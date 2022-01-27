function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  var classAvg = 0;
  for (var i = 0; i < classPoints.length; i++){
    classAvg += classPoints[i]; 
  }
  classAvg = classAvg/classPoints.length; 
  return yourPoints > classAvg;
}

/*дан массив. добавить свое число. посчитайть среднее и сравнить со своим числом.

Вернуть True, если твое больше, иначе False
