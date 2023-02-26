function Num(val) {
  document.querySelector(".result").value += val;
}
Num(val);
function equal() {
  let input = document.querySelector(".result").value;
  let output = eval(input);
  document.querySelector(".result").value = output;
}
equal();

function clr() {
  document.querySelector(".result").value = "";
}
