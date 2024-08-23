const cars = ["Saab", "Volvo", "BMW"];
// Here cars[0] is "Saab"
{  
  const cars = ["Toyota", "Volvo", "BMW"]; 
  // Here cars[0] is "Toyota"
}
// Here cars[0] is "Saab"
document.getElementById("demo").innerHTML = cars[1];