function squaresNeeded(grains){
    let x = 1;
    let square = 0;
    let sum = 0;
    while ( sum < grains ){
        square ++;
        sum +=x;
        x*=2;
    }
    return square;
}
//https://www.codewars.com/kata/5b0d67c1cb35dfa10b0022c7