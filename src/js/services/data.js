export {serviceFunc};
function serviceFunc($http) {

	this.getPersons = (callback) => {
		$http.get('/json/persons')
			.then(callback);
	};

	this.getSeats = (callback) =>{
		$http.get('/json/seats')
			.then(callback);
	};
}