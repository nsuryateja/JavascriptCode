<p style="line-height: 18px; font-size: 18px;  font-family: times;">
<h1> Function constructor </h1>

<script>
var Person = function(name,birthDate){
this.name = name;
this.birthDate = birthDate;
this.last = "smith";
}
Person.prototype.calAge = function(){
console.log(2018 -this.birthDate);
}
 var john = new Person("Surya",1995);
 var jane = new Person("Sunny",1963);
 var menty = new Person("menty",1967);
 console.log(john.name);
 console.log(jane.last);
 menty.calAge()
 console.log(john.birthDate);
 john.calAge();

</script>
</p>
