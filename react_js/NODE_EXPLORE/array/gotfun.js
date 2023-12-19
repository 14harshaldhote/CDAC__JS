function printArray(arr) {
    arr.forEach(person => {
        console.log(`Name: ${person.name}, Age: ${person.age}`);
    });
}

module.exports = {
    printArray
};
console.log(module)