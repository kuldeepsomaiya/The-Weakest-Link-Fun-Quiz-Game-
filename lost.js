 $("audio#player")[0].play();
let name = document.getElementById('lname');
let n = window.localStorage.getItem('fullname');
console.log(name);
console.log(n);
$("#lname").text("Sorry "+n+" You are the Weakest Link");
