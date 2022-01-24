const winsOver = {
  "rock" : "scissors",
  "scissors" : "paper",
  "paper" : "rock"
};

const rps = (p1, p2) => {
if (p1 === p2)
  return "Draw!";
else if (winsOver[p1] === p2)
  return "Player 1 won!";
else
  return "Player 2 won!";  
};
/* Камень ножницы Бумага
Давайте играть! Вы должны вернуть, какой игрок выиграл! В случае ничьей возврат Draw!.

Примеры:

rps('scissors','paper') // Player 1 won!
rps('scissors','rock') // Player 2 won!
rps('paper','paper') // Draw! 
*/