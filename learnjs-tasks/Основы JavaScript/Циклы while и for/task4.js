let number = +prompt()
for (let i=2; i<number; i++){
    let boo=true
    if (i==2){
        console.log(2)
        continue
    }
    for (let j=2; j< Math.ceil(i**0.5)+1; j++){
        if (i%j==0){
            boo=false
            break;
        }
        
    }
    if (boo){
        console.log(i)
    }
}