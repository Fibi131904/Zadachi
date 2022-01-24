function testLogicalOr(val) {

  if (val < 10 || val > 20) {
    return "Outside";
  }
  return "Inside";

}

testLogicalOr(15);

/*
if (num > 10) {
  return "No";
}
if (num < 5) {
  return "No";
}
return "Yes";

Та же логика может быть записана как:

if (num > 10 || num < 5) {
  return "No";
}
return "Yes"; */