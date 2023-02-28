function Calculator(){
    this.read= function(){
        this.a=+prompt()
        this.b=+prompt()
    },
    this.sum= function(){
        return this.a+this.b
    },
    this.mul= function(){
        return this.a*this.b
    }
}
let calculator = new Calculator();
calculator.read();

console.log( "Sum=" + calculator.sum() );
console.log( "Mul=" + calculator.mul() );