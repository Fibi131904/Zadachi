function testElseIf(val) {
  if (val > 10) {  // если верно условие это, верни..
    return "Greater than 10"; // это
  } else if (val < 5) {// если это условие верно, верни
    return "Smaller than 5"; // это
  } else { // если условия выше не верны, верни

  return "Between 5 and 10"; // это
  }
}
testElseIf(7);