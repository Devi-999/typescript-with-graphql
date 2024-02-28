// function foo(i){ //functipon obj
//     this.count++ // it overrides, function / reference so the function is not pointing to function obj
//     console.log("hello", i);
//     console.log(this.count, 'this.count')
// }
// foo.count = 0 //adding property
// for(let i =0 ;i<10;i++){
//     foo.apply(foo, [9])
// }

function Car(type, fuelType){
	this.type = type;
	this.fuelType = fuelType;
}

function setBrand(brand){
	Car.call(this, "convertible", "petrol");
	this.brand = brand;
	console.log(`Car details = `, this);
}

function definePrice(price){
	Car.call(this, "convertible", "diesel");
	this.price = price;
	console.log(`Car details = `, this);
}

const newBrand = new setBrand('Brand1');
const newCarPrice = new definePrice(100000);