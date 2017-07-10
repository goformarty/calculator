var n1 = 0,
n2 = 0,
next_operator = '',
i = 0;

function add(n1, n2) {
  return (+n1 + +n2);
};

function subtract(n1, n2) {
  return (+n1 - +n2);
};

function multiply (n1, n2) {
  return (+n1 * +n2).toFixed(2);
};

function divide(n1, n2) {
  return (+n1 / +n2).toFixed(2);
};

function press_button(curr_btn){
  if (n1.length != 0 && i == 0) {
    clear_display();
    display(curr_btn);
    i++;
  } else {
    i++;
    display(curr_btn);
  }
};

function display(number) {
  var display_number = document.getElementById("screen");
  if (i === 1) {
    display_number.innerHTML = "";
    display_number.innerHTML = display_number.innerHTML + number;
  } else if(i > 10) {
    document.getElementById("screen").style.display = "none";
    setTimeout(function(){
      document.getElementById("screen").style.display = "block";
    }, 100);
    document.getElementById("screen").innerHTML = "Too long";
  } else {
    display_number.innerHTML = display_number.innerHTML + number;
  }
};

function clear_display() {
  document.getElementById("screen").innerHTML = "";
};

function reset() {
  document.getElementById("screen").innerHTML = "";
  n1 = 0;
  n2 = 0;
  next_operator = 0;
  i = 0;
};

function get_number() {
  if (n1 === 0) {
    n1 = document.getElementById("screen").innerHTML;
  } else {
    n2 = document.getElementById("screen").innerHTML;
  }
};

function operator(sign) {
  if (sign === "equals") {
    get_result();
    n1 = 0
    n2 = 0;
    i = 0;
  } else if (sign === "negate") {
    var num = document.getElementById("screen").innerHTML;
    document.getElementById("screen").innerHTML = +num * -1;
  } else {
    next_operator = sign;
    get_number();
    calculate_step();
    i = 0;
  }
};

function get_result() {
  get_number();
  if (next_operator === "add") {
    clear_display();
    i = (add(n1, n2)).length
    display(add(n1, n2));
  } else if (next_operator === "subtract") {
    clear_display();
    i = (subtract(n1, n2)).length
    display(subtract(n1, n2));
  } else if (next_operator === "multiply") {
    clear_display();
    i = (multiply(n1, n2)).length
    display(multiply(n1, n2));
  } else if (next_operator === "divide") {
    clear_display();
    i = (divide(n1, n2)).length
    display(divide(n1, n2));
  }
};

function calculate_step() {
  if (n1 != 0 && n2 != 0) {
    get_result();
    n1 = document.getElementById("screen").innerHTML;
    n2 = 0;
    i = 0;
  }
};

document.onkeyup = function(e) {
  e = e || event
  if(!e.shiftKey){
    switch(e.keyCode){
      case 49:
        press_button(1);
        break;
      case 50:
        press_button(2);
        break;
      case 51:
        press_button(3);
        break;
      case 52:
        press_button(4);
        break;
      case 53:
        press_button(5);
        break;
      case 54:
        press_button(6);
        break;
      case 55:
        press_button(7);
        break;
      case 56:
        press_button(8);
        break;
      case 57:
        press_button(9);
        break;
      case 48:
        press_button(0);
        break;
      case 187:
        operator('equals');
        break;
      case 189:
        operator('subtract');
        break;
      case 88:
        operator('multiply');
        break;
      case 191:
        operator('divide');
      case 190:
        press_button('.');
        break;
      case 13:
        operator('equals');
        break;
      case 27:
        reset();
    }
  } else if(e.shiftKey) {
    switch(e.keyCode){
      case 187:
        operator('add');
        break;
      case 56:
        operator('multiply');
    }
  }
};
