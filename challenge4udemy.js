/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.
Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
*/
var mark = {
    firstName: "mark",
    lastName: "smith",
    mass: 65,
    height: 1.8,
    fullName: function(){
        return this.firstName + " " + this.lastName},
    calcBMI: function(){
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
}
var john = {
    firstName: "john",
    lastName: "cena",
    mass: 72,
    height: 1.3,
    fullName: function(){
        return this.firstName + " " + this.lastName},
    calcBMI: function(){
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
}
if (mark.calcBMI() > john.calcBMI()){
    console.log( mark.fullName() + " has high BMI than " + john.fullName());
} else if(john.calcBMI() > mark.calcBMI()){
    console.log( john.fullName() + " has high BMI than " + mark.fullName());
} else{
    console.log( mark.fullName() + " and " + john.fullName() + " has equal BMI")
}
