let name = document.getElementById('lname');
let n = window.localStorage.getItem('fullname');
console.log(name);
console.log(n);
$("#lname").text("Congrats "+n);
