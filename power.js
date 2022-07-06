exports.isPower = (number1, number2) =>{
    let pow = 1;
    for(let i = 0; i< number2; i++){
        pow*=number1;
    }
    return pow;
}
