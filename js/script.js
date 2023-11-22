function register(event) {
    event.preventDefault();

    alert("hello");

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let cpassword = document.getElementById("cpassword").value;

    let city = document.getElementById("city").value;
    let mobile = document.getElementById("mobile").value;
    let address = document.getElementById("address").value;
    let agree = document.getElementById("agree").checked;

    // Get the selected gender value
    let gender = document.querySelector('input[name="gender"]:checked');
    gender = gender ? gender.value : '';

    const person = { name, age, email, password, city, mobile, address, gender };

    // Check if the passwords match and the "agree" checkbox is checked
    if (password === cpassword && agree) {
        localStorage.setItem("person", JSON.stringify(person));
        alert("Data added to local storage");
    } else {
        alert("Password does not match or 'Agree' checkbox is not checked.");
    }
}


// let persson={
//     name: "shashank",
//     age: 21,
//     mobile:'123456798765',

//     getName:function(){
//         return this.name;},

//     setName:function(name){
//         this.name = name;},
//     getMobile:function(){
//         return this.mobile},
//     setMobile:function(mobile){
//         this.mobile = mobile;},
//     }
    


// console.log(persson.age);
// console.log(persson.getName());
// console.log(persson.getMobile());