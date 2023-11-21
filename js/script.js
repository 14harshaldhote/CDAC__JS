let persson={
    name: "shashank",
    age: 21,
    mobile:'123456798765',

    getName:function(){
        return this.name;},

    setName:function(name){
        this.name = name;},
    getMobile:function(){
        return this.mobile},
    setMobile:function(mobile){
        this.mobile = mobile;},
    }
    


console.log(persson.age);
console.log(persson.getName());
console.log(persson.getMobile());