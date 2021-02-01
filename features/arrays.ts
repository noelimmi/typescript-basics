const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake = [['f150'], ['corolla']];

//Help with inference when extracating values

const carArrEle = carMakers[0];
const myCar = carMakers.pop();

//Prevent incompatable values
//carMakers.push(2);

//Help with higher order functions like map,filter
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

//Flexible type
const importantDate: (Date | string)[] = [new Date()];
importantDate.push(new Date());
importantDate.push('03-09-1998');
