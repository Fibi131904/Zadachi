const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes === par - 1) {
    return names[2];
  } else if (strokes === par) {
    return names[3];
  } else if (strokes === par + 1) {
    return names[4];
  } else if (strokes === par + 2) {
    return names[5];
  } else {
    return names[6];
  }

}

golfScore(5, 4);
/* 
Гольф-код
В игре в гольф у каждой лунки есть par, что означает среднее количество очков strokes,
 которое игрок в гольф должен сделать, чтобы загнать мяч в лунку и завершить игру.
  В зависимости от того, насколько выше или ниже parвы strokesнаходитесь, существует другое прозвище.

Вашей функции будут переданы parи strokesаргументы. Верните правильную строку в соответствии
 с этой таблицей, в которой штрихи перечислены в порядке приоритета; сверху (самый высокий) 
 к низу (самый низкий):
Удары	Возвращение
1	"Отверстие в одном!"
<= пар - 2	"Орел"
пар - 1	"Птичка"
номинал	"Пар"
номинал + 1	"Буги"
номинал + 2	"Двойной призрак"
>= номинал + 3	"Иди домой!"
*/
