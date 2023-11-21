let persson={
    name: "shashank",
    age: 21,
    mobile:'123456798765',

    getName:function(){
        return this.name;},

    setName:function(name){
        this.name = name;},

}
console.log(persson.age);
console.log(persson.getName());