export function MapCtrl($scope, dataService, $http) {

	const _this = this;
	this.canvas = new fabric.Canvas('canvas-block', { selection: false, hoverCursor : 'pointer'});
	this.paramFree = null;
	this.defaultColor = "#282736";
	this.activeColor = "#F5842D";
	this.passiveColor = "#B4B4B4";
	this.svgSrc = "img/dot-icon.svg";

	$scope.safeApply = function(fn) {
		let phase = this.$root.$$phase;
		if(phase == '$apply' || phase == '$digest') {
			if(fn && (typeof(fn) === 'function')) {
				fn();
			}
		} else {
			this.$apply(fn);
		}
	};

	$scope.changeFilter = function(){
		if ($scope.freeOnly === true) {
			$scope.filterFree = _this.paramFree;
		} else {
			$scope.filterFree = '';
		}
	}

	$scope.movingDetect = function(event){
		if (event.target.top < 0) {
			_this.canvas.getActiveObject().set({
				'top': 10
			})
		} else if (event.target.top > 490){
			_this.canvas.getActiveObject().set({
				'top': 490
			})
		}
		if (event.target.left < 0) {
			_this.canvas.getActiveObject().set({
				'left': 10
			})
		} else if (event.target.left > 970) {
			_this.canvas.getActiveObject().set({
				'left': 970
			})
		}
	}

	$scope.blurTitle = function(title) {
		$scope.editingTitle = false;
		$scope.seats[$scope.currentEl].title = title;
		updateSeat($scope.seats[$scope.currentEl]);
	}

	function updateSeat(data) {
		$http.post('/update-seat', data);
	}

	function updatePerson(data) {
		$http.post('/update-person', data);
	}

	$scope.changeCoords = function (event) {
		var data = {
			id: $scope.seats[$scope.currentEl].id,
			left: event.target.left,
			top: event.target.top
		};
		Object.assign($scope.seats[$scope.currentEl], data);
		updateSeat(data);
	}

	$scope.selectedObject = function(e) {
		$scope.currentEl = _this.canvas.getObjects().indexOf(e.target);
		if ( $scope.selectionMode ) {
			_this.selectionModeHandler();
		} else {
			$scope.showSeatInfo = true;
			$scope.seatTitle = $scope.seats[$scope.currentEl].title;
			$scope.seatOccupant = $scope.seats[$scope.currentEl].occupant;
			_this.highlightActive(e);
			$scope.safeApply();
		}
	}

	this.selectionModeHandler = function() {
		if ($scope.currentUser.seatId === _this.paramFree) {
			$scope.userWithoutSeat = true;
		} else {
			$scope.userWithoutSeat = false;
		}

		if ($scope.seats[$scope.currentEl].occupant == _this.paramFree) {
			//make previous place free if it was occupanted by him.
			if ($scope.currentUser.seatId !== _this.paramFree) {
				$scope.seats[$scope.currentUser.seatId].occupant = _this.paramFree;//db
				updateSeat($scope.seats[$scope.currentUser.seatId]);
			}

			//current user put on choosen place
			$scope.seats[$scope.currentEl].occupant = $scope.currentUser.name;//db
			updateSeat($scope.seats[$scope.currentEl]);
			$scope.selectionMode = false;

			//закрепить место за ним в массиве $scope.persons
			$scope.persons[$scope.persons.indexOf($scope.currentUser)].seatId = $scope.currentEl;//db
			updatePerson($scope.persons[$scope.persons.indexOf($scope.currentUser)]);

			_this.canvas.setActiveObject(_this.canvas.item($scope.currentEl));
			$scope.safeApply();
		} else {
			$scope.currentPlace = $scope.seats[$scope.currentEl];//db
			$scope.assignModal = true;
			$scope.safeApply();
		};
	}

	$scope.replacePerson = function() {
		//make old occupant free ($scope.persons array)
		$scope.persons.map(function(person){
			if( person.name === $scope.currentPlace.occupant ){
				person.seatId = _this.paramFree;//db
				$scope.replacedPerson = person;
				updatePerson(person);
			}
		})

		if (!$scope.userWithoutSeat) {
			// make old occupant free ($scope.seats array)
			$scope.seats[$scope.currentUser.seatId].occupant = _this.paramFree;//db
			updateSeat($scope.seats[$scope.currentUser.seatId]);
		}

		//put new occupant on new place ($scope.persons array)
		$scope.persons[$scope.persons.indexOf($scope.currentUser)].seatId = $scope.currentPlace.id;//db
		updatePerson($scope.persons[$scope.persons.indexOf($scope.currentUser)]);

		//put new occupant on new place ($scope.seats array)
		$scope.seats[$scope.currentEl].occupant = $scope.currentUser.name;//db
		updateSeat($scope.seats[$scope.currentEl]);

		$scope.assignNewModal = true;
		$scope.selectionMode = false;
		$scope.assignModal = false;

		//highlight active element
		_this.canvas.setActiveObject(_this.canvas.item($scope.currentEl));
	}

	$scope.swapPersons = function(){

		//put old occupant on old place ($scope.seats array)
		$scope.seats[$scope.currentUser.seatId].occupant = $scope.currentPlace.occupant;
		updateSeat($scope.seats[$scope.currentUser.seatId]);

		//put old occupant on old place ($scope.persons array)
		let oldPlace = $scope.currentUser.seatId;

		$scope.persons.map(function(person){
			if (person.name === $scope.currentPlace.occupant) {
				person.seatId = $scope.seats[$scope.currentUser.seatId].id;//db old place
				updatePerson(person);
			}
		})

		//put new occupant on new place ($scope.persons array)
		$scope.persons[$scope.persons.indexOf($scope.currentUser)].seatId = $scope.currentPlace.id;
		updatePerson($scope.persons[$scope.persons.indexOf($scope.currentUser)]);


		//put new occupant on new plce($scope.seats array)
		$scope.seats[$scope.currentEl].occupant = $scope.currentUser.name;//db
		updateSeat($scope.seats[$scope.currentEl]);

		$scope.selectionMode = false;
		$scope.assignModal = false;
		//highlight active element
		_this.canvas.setActiveObject(_this.canvas.item($scope.currentEl));
	}


	$scope.assignNewSeat = function(){
		$scope.currentUser = $scope.replacedPerson;
		$scope.discardActiveElement();
		$scope.selectionMode = true;
		$scope.assignNewModal = false;
	}

	$scope.closeSeatInfo = function(){
		$scope.showSeatInfo = false;
		$scope.editingOccupant = false;
	}

	$scope.discardActiveElement = function(){
		if (_this.canvas.getActiveObject()) {
			_this.canvas.getActiveObject().set({
				fill: _this.defaultColor
			});
			_this.canvas.discardActiveObject();
		};
	}

	this.highlightActive = function(){
		this.assignColors();

		// highlight active element
		_this.canvas._objects[$scope.currentEl].set({
			fill: _this.activeColor
		})
		_this.canvas.renderAll();
	}

	$scope.createSeat = function(){ // on click btn "new seat"
		let floorPlan = angular.element(document.querySelector('.floor-plan'));
		floorPlan.on('click', _this.addSeat);
		$scope.newSeatMode = true;
	}


	$scope.focussedPerson = function(person){
		$scope.personInfo = true;
		$scope.showUsers = false;
		$scope.currentUser = person;

		let hasSeat = person.seatId;
		if (hasSeat !== _this.paramFree){ // if person doesn't have seat
			_this.canvas.setActiveObject(_this.canvas.item(person.seatId));
		} else {
			$scope.discardActiveElement();
		}
	}

	$scope.searchUsersChanged = function(inputText){
		if(inputText && inputText.length > 1){
			$scope.showUsers = true;
		}
		else{
			$scope.showUsers = false;
		}
	}

	$scope.searchChanged = function(inputText){
		if(inputText.length > 1){
			$scope.showHints = true;
		}
		else{
			$scope.showHints = false;
		}
	}

	$scope.makeSeatFree = function(){
		$scope.seatOccupant = _this.paramFree;
		let placeOccupant = $scope.seats[$scope.currentEl].occupant;
		$scope.seats[$scope.currentEl].occupant = _this.paramFree; //db
		updateSeat($scope.seats[$scope.currentEl]);

		$scope.makePersonFree(placeOccupant);
	}

	$scope.removeFromPlace = function(){
		$scope.seats[$scope.currentUser.seatId].occupant = _this.paramFree;//db
		updateSeat($scope.seats[$scope.currentUser.seatId]);
		$scope.makePersonFree($scope.currentUser.name);//db
		$scope.discardActiveElement();
	}

	$scope.makePersonFree = function(currentOccupant){
		$scope.persons.forEach(function(person) {
			if(person.name === currentOccupant) {
				person.seatId = _this.paramFree; //db
				updatePerson(person);
			}
		})
	}

	$scope.rememberOldOccupant = function(){
		// $scope.assignedValue = false;
		$scope.oldOccupant = $scope.seatOccupant;
	}

	$scope.assignNewOccupant = function(newOccupant){
		$scope.seatOccupant = newOccupant.name;
		$scope.editingOccupant = false;

		if ($scope.oldOccupant !== newOccupant.name){
			//old occupant сделай бомжом
			$scope.makePersonFree($scope.oldOccupant);

			$scope.persons.map(function(person){
				if (person.name === newOccupant.name) {
					if (person.seatId !== _this.paramFree) {
						// проверка был ли такой чувак на месте. Если да, то в этом месте, то нужно сделать место free
						person.occupant = _this.paramFree; //db
					}
					person.seatId = $scope.currentEl; //db
					updatePerson(person);
				}
			})

			// это место.occupant = person.name;
			$scope.seats[$scope.currentEl].occupant = newOccupant.name;

			updateSeat($scope.seats[$scope.currentEl]);
		}
	}

	$scope.deleteSeat = function(){
		let placeOccupant = $scope.seats[$scope.currentEl].occupant;
		$http.post('/remove-seat', {id: $scope.seats[$scope.currentEl].id});
		if(placeOccupant !== _this.paramFree){
			$scope.makePersonFree(placeOccupant)
		}
		$scope.seats.splice($scope.currentEl, 1); //db
		$scope.showSeatInfo = false;
		_this.canvas.getActiveObject().remove();
	};

	$scope.displaySeats = function(){
		let itemsProcessed = 0;
		$scope.seats.map(function(seat, index, array){
			fabric.loadSVGFromURL(_this.svgSrc, function(objects, options) { 
				let seatId = seat.id;
				let elem = fabric.util.groupSVGElements(objects, options);
				elem.set({
					id: seatId,
					left: seat.left,
					top: seat.top,
					fill: _this.defaultColor,
					scaleY: 0.09,
					scaleX: 0.09,
					hasBorders: false,
					hasControls: false,
					hasRotatingPoint: false,
					lockMovementX: window.user ? false: true,
					lockMovementY: window.user ? false: true
				});
				_this.canvas.add(elem);
				itemsProcessed++;
				if(itemsProcessed === array.length){
					// _this.canvas.calcOffset();
					// _this.canvas.renderAll();
					_this.assignColors();
				}
			});
		});
	}

	angular.element(document.documentElement).on('keydown', function (event) {
		if (event.keyCode == 27) {
			if ($scope.newSeatMode === true) {
				$scope.newSeatMode = false;
				$scope.safeApply();
			} else if ( $scope.selectionMode === true ) {
				$scope.selectionMode = false;
				$scope.safeApply();
			}
		}
	});

	this.assignColors = function(){
		$scope.seats.map(function(seat, index){
			if (seat.occupant === _this.paramFree) {
				_this.canvas._objects[index].set({
					fill: _this.defaultColor
				});
			} else {
				_this.canvas._objects[index].set({
					fill: _this.passiveColor
				});
			}
			_this.canvas.renderAll();
		})
	}

	this.addSeat = function(event){
		if($scope.newSeatMode) {
			var data = {
				"left": event.offsetX-15,
				"top": event.offsetY-15,
				"id": $scope.seats.length,
				"title": "No title",
				"occupant": _this.paramFree
			};

			$http.post('/new-seat', data);

			$scope.seats.push(data); //db
			$scope.newSeatMode = false;
			$scope.showSeatInfo = true;
			$scope.currentEl = $scope.seats.length - 1;
			$scope.safeApply();

			let newSeatId = $scope.seats.length -1;

			fabric.loadSVGFromURL(_this.svgSrc, function(objects, options) { 
				let elem = fabric.util.groupSVGElements(objects, options);
				elem.set({
					id: newSeatId,
					left: event.offsetX-12,
					top: event.offsetY-12,
					scaleY: 0.09,
					scaleX: 0.09,
					hasBorders: false,
					hasControls: false,
					hasRotatingPoint: false
				});
				_this.canvas.add(elem);
				_this.canvas.calcOffset();
				_this.canvas.renderAll();

				_this.canvas.setActiveObject(_this.canvas.item($scope.currentEl));
			});
		}
	}
	$scope.openUserForm = function(){
		$scope.showUserForm = true;
		$scope.showSeatInfo = false;
		$scope.personInfo = false;
	}

	$scope.addUser = function(user) {
		let newUser = {
			"id": $scope.persons.length + 1,
			"seatId": _this.paramFree,
			"email": user.email,
			"name": user.name
		};
		$http.post('/new-person', newUser);

		$scope.persons.push(newUser);
		$scope.showUserForm = false;
		$scope.personInfo = true;
		$scope.user.name = null;
		$scope.user.email = null;
		$scope.currentUser = newUser;
	};

	this.initFunc = function() {
		dataService.getPersons(function(response) {
			$scope.persons = response.data;
		});

		dataService.getSeats(function(response) {
			$scope.seats = response.data;
			$scope.displaySeats();
		});

		_this.canvas.on({
			'object:selected': $scope.selectedObject,
			'object:modified': $scope.changeCoords,
			'object:moving': $scope.movingDetect,
			'mouse:down': function(e) {
				if (e.target) {
					e.target.opacity = 0.5;
					_this.canvas.renderAll();
				}
			},
			'mouse:up': function(e) {
				if (e.target) {
					e.target.opacity = 1;
					_this.canvas.renderAll();
				}
			}
		});
	}
	this.initFunc();
}
