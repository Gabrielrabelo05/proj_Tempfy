let main = document.getElementById("content_main")
let result = document.getElementById("content_result")
let select = document.getElementById("select")
let input = document.getElementById("temp")

let label_1 = document.getElementById("label_1")
let value_1 = document.getElementById("value_1")
let label_2 = document.getElementById("label_2")
let value_2 = document.getElementById("value_2")

let isOpen = false

function open() {
     isOpen = true;
     main.style.height = "370px";
}

function close() {
     isOpen = false;
     main.style.height = "230px";
}

function bt_click() {

     if (select.value == "Selecione sua temperatura") {
          alert('Selecione sua Temperatura');
          close();
          return;
     }

     if (!input.value) {
          alert('Digite a Temperatura');
          close();
          return;
     }

     open();
     convert();
}

function convert() {

     let fatordeConversão = select.value
     let c = 0
     let f = 0
     let k = 0

     switch (fatordeConversão) {
          case "Celsius":
               f = parseFloat(input.value) * 9 / 5 + 32
               k = parseFloat(input.value) + 273.15
               changeValues(["Fahrenheit", "Kelvin"], [f, k]);
               break
          case "Fahrenheit":
               c = (parseFloat(input.value) - 32) * 5 / 9
               k = (parseFloat(input.value) - 32) * 5 / 9 + 273.15
               changeValues(["Celsius", "Kelvin"], [c, k]);
               break
          case "Kelvin":
               c = parseFloat(input.value) - 273.15
               f = (parseFloat(input.value) - 273.15) * 9 / 5 + 32
               changeValues(["Celsius", "Fahrenheit"], [c, f]);
               break
     }
}

function changeValues(labels, values) {

     label_1.innerText = labels[0];
     value_1.innerText = values[0].toFixed(2).replace(".",",") + "º";

     label_2.innerText = labels[1];
     value_2.innerText = values[1].toFixed(2).replace(".",",") + "º";
}