function testElse(val) {
  let result = "";


  if (val > 5) {     // Если val больше 5, то 
    result = "Bigger than 5";
  } else {  // Иначе
    result = "5 or Smaller";
  }
  
  return result;
}

testElse(4); //вызов с параметром 4