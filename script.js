function testEven(n){
  var number = n;
  if(Math.floor(number / 2) == number / 2) {
      //Чётное
      return true;
  }else{
      //Нечётное
      return false;
  }
}
