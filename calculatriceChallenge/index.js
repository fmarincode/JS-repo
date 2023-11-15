class Calculator {
    constructor(...numbers){
        this.numbers = numbers; // this.numbers un tableau qui stocke les nombres
    }

    reset(){
        //method pour reset la calculatrice
        this.this.numbers = [];
    }

    addition(numbers){
        let sum = this.numbers[0];
        for (let i = 1; i < this.numbers.length; i++) {
            sum += this.numbers[i];
        }
        return sum
    }

    soustraction(numbers){
        let result = this.numbers[0];
        for (let i = 1; i < this.numbers.length; i++) {
            result -= this.numbers[i];
        }
        return result
    }

    mutliplication(numbers){
        let product = this.numbers[0];
        for (let i = 1; i < this.numbers.length; i++) {
            product *= this.numbers[i];
        }
        return product
    }

    division(numbers){
        let result = this.numbers[0];
        for (let i = 1; i < this.numbers.length; i++) {
            if(this.numbers[i] !== 0) result /= this.numbers[i];
        }
        return result
    }
}

const myCalculator = new Calculator(5,0)
console.log(myCalculator.division())