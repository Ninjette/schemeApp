export function MapCtrl($scope, dataService, $http) {

	const _this = this;
	this.canvas = new fabric.Canvas('canvas-block', { selection: false, hoverCursor : 'pointer'});
	this.paramFree = null;
	this.defaultColor = "#282736";
	this.activeColor = "#F5842D";
	this.passiveColor = "#B4B4B4";
	this.svgSrc = "img/dot-icon.svg";
	$scope.coverShow = true;

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

	$scope.changeCoordinates = function (event) {
		let data = $scope.seats[$scope.currentEl];
		data.left = event.target.left;
		data.top = event.target.top;

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
			if ($scope.currentUser.seatId !== _this.paramFree) {
				$scope.seats[$scope.currentUser.seatId].occupant = _this.paramFree;//db
				updateSeat($scope.seats[$scope.currentUser.seatId]);
			}

			$scope.seats[$scope.currentEl].occupant = $scope.currentUser.name;//db
			updateSeat($scope.seats[$scope.currentEl]);
			$scope.selectionMode = false;

			$scope.persons[$scope.persons.indexOf($scope.currentUser)].seatId = $scope.currentEl;//db
			updatePerson($scope.persons[$scope.persons.indexOf($scope.currentUser)]);

			_this.canvas.setActiveObject(_this.canvas.item($scope.currentEl));
			$scope.displayToster($scope.currentUser.name +' assigned successfully');
			$scope.safeApply();
		} else {
			$scope.currentPlace = $scope.seats[$scope.currentEl];
			$scope.assignModal = true;
			$scope.safeApply();
		};
	}

	$scope.replacePerson = function() {
		$scope.persons.forEach(function(person){
			if( person.name === $scope.currentPlace.occupant ){
				person.seatId = _this.paramFree;
				$scope.replacedPerson = person;
				updatePerson(person);
			}
		})

		if (!$scope.userWithoutSeat) {
			$scope.seats[$scope.currentUser.seatId].occupant = _this.paramFree;
			updateSeat($scope.seats[$scope.currentUser.seatId]);
		}

		$scope.persons[$scope.persons.indexOf($scope.currentUser)].seatId = $scope.currentPlace.id;
		updatePerson($scope.persons[$scope.persons.indexOf($scope.currentUser)]);

		$scope.seats[$scope.currentEl].occupant = $scope.currentUser.name;
		updateSeat($scope.seats[$scope.currentEl]);

		$scope.assignNewModal = true;
		$scope.selectionMode = false;
		$scope.assignModal = false;

		_this.canvas.setActiveObject(_this.canvas.item($scope.currentEl));
		$scope.displayToster($scope.replacedPerson.name + ' replaced successfully');
	}

	$scope.swapPersons = function(){

		$scope.seats[$scope.currentUser.seatId].occupant = $scope.currentPlace.occupant;
		updateSeat($scope.seats[$scope.currentUser.seatId]);

		let oldPlace = $scope.currentUser.seatId;

		$scope.persons.forEach(function(person){
			if (person.name === $scope.currentPlace.occupant) {
				person.seatId = $scope.seats[$scope.currentUser.seatId].id;
				updatePerson(person);
			}
		})

		$scope.persons[$scope.persons.indexOf($scope.currentUser)].seatId = $scope.currentPlace.id;
		updatePerson($scope.persons[$scope.persons.indexOf($scope.currentUser)]);

		$scope.seats[$scope.currentEl].occupant = $scope.currentUser.name;//db
		updateSeat($scope.seats[$scope.currentEl]);

		$scope.selectionMode = false;
		$scope.assignModal = false;
		_this.canvas.setActiveObject(_this.canvas.item($scope.currentEl));
		$scope.displayToster('persons swapped successfully');
	}

	$scope.displayToster = function(message){
		$scope.tosterMessage = message;
		$scope.showToster = true;
		setTimeout(function(){
			$scope.showToster = false;
			$scope.safeApply();
		},4000)
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
		if (hasSeat !== _this.paramFree){
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
		$scope.seats[$scope.currentEl].occupant = _this.paramFree;
		updateSeat($scope.seats[$scope.currentEl]);

		$scope.makePersonFree(placeOccupant);
	}

	$scope.removeFromPlace = function(){
		$scope.seats[$scope.currentUser.seatId].occupant = _this.paramFree;//db
		updateSeat($scope.seats[$scope.currentUser.seatId]);
		$scope.makePersonFree($scope.currentUser.name);
		$scope.discardActiveElement();
	}

	$scope.makePersonFree = function(currentOccupant){
		$scope.persons.forEach(function(person) {
			if(person.name === currentOccupant) {
				person.seatId = _this.paramFree;
				updatePerson(person);
			}
		})
	}

	$scope.rememberOldOccupant = function(){
		$scope.oldOccupant = $scope.seatOccupant;
	}

	$scope.assignNewOccupant = function(newOccupant){
		$scope.seatOccupant = newOccupant.name;
		$scope.editingOccupant = false;

		if ($scope.oldOccupant !== newOccupant.name){
			$scope.makePersonFree($scope.oldOccupant);

			$scope.persons.forEach(function(person){
				if (person.name === newOccupant.name) {
					if (person.seatId !== _this.paramFree) {
						person.occupant = _this.paramFree;
					}
					person.seatId = $scope.currentEl;
					updatePerson(person);
				}
			})

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
		$scope.seats.splice($scope.currentEl, 1);
		$scope.showSeatInfo = false;
		_this.canvas.getActiveObject().remove();
	};

	$scope.displaySeats = function(){
		let itemsProcessed = 0;
		$scope.seats.forEach(function(seat, index, array){
			fabric.loadSVGFromURL(_this.svgSrc, function(objects, options) { 
				let seatId = seat.id;
				let elem = fabric.util.groupSVGElements(objects, options);
				elem.set({
					id: seatId,
					left: seat.left,
					top: seat.top,
					fill: _this.defaultColor,
					scaleY: 0.08,
					scaleX: 0.08,
					hasBorders: false,
					hasControls: false,
					hasRotatingPoint: false,
					lockMovementX: window.user ? false: true,
					lockMovementY: window.user ? false: true
				});
				setTimeout(function(){
					_this.canvas.add(elem);
					itemsProcessed++;
					if(itemsProcessed === array.length){
						_this.assignColors();
						$scope.coverShow = false;
						$scope.safeApply();
					}
				}, index * 100)
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
		$scope.seats.forEach(function(seat, index){
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


			$scope.seats.push(data);
			$http.post('/new-seat', data);
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
					scaleY: 0.08,
					scaleX: 0.08,
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
			'object:modified': $scope.changeCoordinates,
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
