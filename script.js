//let myVar = 11;
//myVar--;


/*Hапишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

Если объект salaries пуст, то результат должен быть 0
*/

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };

let sum = 0;
for (let key in salaries){
    sum += salaries [key];
    }
    alert (sum);


    let group = {
        Olga: 200,
        Nikita: 140,
        Julia: 190,
        Anna : 169
    };
    let sum =0;
    for (let key in group) {
        sum += group [key];
    }
    alert(sum);