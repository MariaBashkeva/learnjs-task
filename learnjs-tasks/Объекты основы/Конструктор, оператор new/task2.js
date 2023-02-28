function Accumulator(startingValue){
    this.ans=startingValue
    this.read=function(){
        this.ans+=+prompt()
    }
}
let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); // выведет сумму этих значений