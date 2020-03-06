var i = 1;
var msg = "";

//store 5 times table in a viriable
do {
  msg += i + " x 5 = " + (i * 5) + "<br/>";
  i++;
} while (i < 1);
//note how this is alredy 1 and it still run
document.getElementById("answer").innerHTML = msg;

// 1   2 3       4          5         6
//msg += i + ' x 5 = ' + (i * 5) + '<br/>;

//1 take variable called msg
//2 add to the following to its value
//3 the number in the counter
//4 write out the string x 5 =
//5 the counter multiplied by 5
//6 add a line break
