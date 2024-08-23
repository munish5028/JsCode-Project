
let animal = {
    animalEats: true,
};
 
let rabbit = {
    rabbitJumps: true,
};
 
// Sets rabbit.[[Prototype]] = animal
rabbit.__proto__ = animal;
// console.log(rabbit.animalEats);
// console.log(rabbit.rabbitJumps);
document.getElementById("demo").innerHTML = rabbit.animalEats;
document.getElementById("demo1").innerHTML = rabbit.rabbitJumps;
