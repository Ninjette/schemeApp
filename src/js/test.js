$scope.seats = [
	{
		'pageX' : 50,
		'pageY' : 50
	},
	{
		'pageX' : 150,
		'pageY' : 50
	}
];

$scope.tracker = false;
$scope.createSeat = function(){
	$scope.tracker = true;
	cursorTracker.addClass("active");
}

this.addSeat = function(event){
	if($scope.tracker){
		$scope.seats.push({'pageX':event.pageX-15 , 'pageY': event.pageY-15});
		$scope.$apply();
		cursorTracker.removeClass("active");
		$('body').off('click', this.addSeat); //unsubscribe from click addSeat
	}
}

$('body').on('click', this.addSeat);

