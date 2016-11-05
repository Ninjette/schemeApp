export function dataService($http){

	this.getPersons = (callback, arg) => {
		$http.get("/json/persons")
			.then(callback)
	};

	this.getSeats = (callback, arg) =>{
		$http.get("/json/seats")
			.then(callback)
	};
}