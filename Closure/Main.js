function Parent() {
    let p = "I'm parent!";
  
    function Child() {
      document.getElementById("demo").innerHTML = p; // child has access to Parent Variable
    }
    return Child;
  }
  let closure = Parent();
  closure(); 
  