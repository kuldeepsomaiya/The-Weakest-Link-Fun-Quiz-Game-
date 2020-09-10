document.getElementById("submit").onclick = function store(){
  let name = document.getElementById('fname').value;
  let age = document.getElementById('age').value;
  let gender = document.getElementById('gender').value;
  console.log(name);
  console.log(age);
  console.log(gender);
  window.localStorage.setItem('fullname', name);
  window.localStorage.setItem('Age',age);
  window.localStorage.setItem('Gender',gender);
}
