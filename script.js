window.onload = function(){ 
    let a = ''
    let b = ''
    let expressionResult = ''
    let selectedOperation = null
    
    // окно вывода результата
    outputElement = document.getElementById("result")
    
    // список объектов кнопок циферблата (id которых начинается с btn_digit_)
    digitButtons = document.querySelectorAll('[id ^= "btn_digit_"]')
    
    function onDigitButtonClicked(digit) {
        if (!selectedOperation) {
            if ((digit != '.') || (digit == '.' && !a.includes(digit))) { 
                a += digit
            }
            outputElement.innerHTML = a
        } else {
            if ((digit != '.') || (digit == '.' && !b.includes(digit))) { 
                b += digit
                outputElement.innerHTML = b        
            }
        }
    }
    // Кнопка смены знака
    document.getElementById("btn_op_sign").onclick = function() {
        if (selectedOperation === null) {
            // Если не выбрана операция, меняем знак числа a
            if (a !== '') {
                a = (-a).toString();
                outputElement.innerHTML = a;
            }
        } else {
            // Если выбрана операция, меняем знак числа b
            if (b !== '') {
                b = (-b).toString();
                outputElement.innerHTML = b;
            }
        }
    };
    // Кнопка для вычисления процента
    document.getElementById("btn_op_percent").onclick = function() {
        if (selectedOperation === null) {
            // Если не выбрана операция, вычисляем процент от числа a
            if (a !== '') {
                a = (parseFloat(a) / 100).toString();
                outputElement.innerHTML = a;
            }
        } else {
            // Если выбрана операция, вычисляем процент от числа b
            if (b !== '') {
                b = (parseFloat(b) * parseFloat(a) / 100).toString();
                outputElement.innerHTML = b;
            }
        }
    };
    // Кнопка стёрки
    document.getElementById("btn_backspace").onclick = function() {
        if (selectedOperation === null) {
            // Если не выбрана операция, удаляем последнюю цифру из a
            a = a.slice(0, -1);
            outputElement.innerHTML = a;
        } else {
            // Если выбрана операция, удаляем последнюю цифру из b
            b = b.slice(0, -1);
            outputElement.innerHTML = b;
        }
    };
    // Смена цвета фона
    document.getElementById("btn_swap_color").onclick = function() {
        // Получите текущий цвет фона
        const bodyElement = document.querySelector(".bbody");
        const currentBackgroundColor = getComputedStyle(bodyElement).backgroundColor;
      
        // Определите темный цвет для переключения
        let newBackgroundColor;
        if (currentBackgroundColor === "rgb(23, 31, 26)") {
          // Если текущий цвет - ваш цвет
          newBackgroundColor = "rgb(103, 111, 106)"; // Установите темный цвет
        } else {
          // В противном случае, если текущий цвет - темный
          newBackgroundColor = "rgb(23, 31, 26)"; // Установите ваш цвет
        }
      
        // Установите новый цвет фона
        bodyElement.style.backgroundColor = newBackgroundColor;
      };
      document.getElementById("btn_swap_colorR").onclick = function() {
        // Получите текущий цвет фона
        const bodyElement = document.querySelector(".result");
        const currentBackgroundColor = getComputedStyle(bodyElement).backgroundColor;
      
        // Определите темный цвет для переключения
        let newBackgroundColor;
        if (currentBackgroundColor === "rgb(43, 189, 26)") {
          // Если текущий цвет - ваш цвет
          newBackgroundColor = "rgb(33, 77, 28)"; // Установите темный цвет
        } else {
          // В противном случае, если текущий цвет - темный
          newBackgroundColor = "rgb(43, 189, 26)"; // Установите ваш цвет
        }
        // Установите новый цвет фона
        bodyElement.style.backgroundColor = newBackgroundColor;
    };
    
      // Кнопка высичления корня
    // Кнопка вычисления корня
document.getElementById("btn_sqrt").onclick = function() {
  if (selectedOperation === null) {
      if (a !== '') {
          a = Math.sqrt(parseFloat(a)).toString();
          outputElement.innerHTML = a;
      }
  } else if (b !== '') {
      b = Math.sqrt(parseFloat(b)).toString();
      outputElement.innerHTML = b;
  }
};

      // Кнопка возведения в степень
      document.getElementById("btn_square").onclick = function() {
        if (selectedOperation === null) {
          a = Math.pow(parseFloat(a), 2).toString();
          outputElement.innerHTML = a;
        } else if (b !== '') {
          b = Math.pow(parseFloat(b), 2).toString();
          outputElement.innerHTML = b;
        }
      };
      // Кнопка вычисления факториала
      document.getElementById("btn_factorial").onclick = function() {
        if (a) {
          a = calculateFactorial(parseFloat(a)).toString();
          outputElement.innerHTML = a;
        } else if (b !== '') {
          b = calculateFactorial(parseFloat(b)).toString();
          outputElement.innerHTML = b;
        }
      };
      // Функция для вычисления факториала
      function calculateFactorial(number) {
        if (number < 0) {
          return "Error";
        } else if (number === 0) {
          return "1";
        } else {
          let result = 1;
          for (let i = 1; i <= number; i++) {
            result *= i;
          }
          return result;
        }
      }
      // Кнопка добавлению 3х нолей
      document.getElementById("btn_add_zeros").onclick = function() {
        if (selectedOperation === null) {
          a += "000";
          outputElement.innerHTML = a;
        } else {
          b += "000";
          outputElement.innerHTML = b;
        }
      };
      
      
    // устанавка колбек-функций на кнопки циферблата по событию нажатия
    digitButtons.forEach(button => {
        button.onclick = function() {
            const digitValue = button.innerHTML
            onDigitButtonClicked(digitValue)
        }
    });
    // установка колбек-функций для кнопок операций
    document.getElementById("btn_op_mult").onclick = function() { 
        if (a === '') return
        selectedOperation = 'x'
    }
    document.getElementById("btn_op_plus").onclick = function() { 
      if (a === '') return
      selectedOperation = '+'
      selectedOperation2 = '+'
    }
    document.getElementById("btn_op_minus").onclick = function() { 
      if (a === '') return
      selectedOperation = '-'
      selectedOperation2 = '-'
    }
    document.getElementById("btn_op_div").onclick = function() { 
        if (a === '') return
        selectedOperation = '/'
    }
    
    // кнопка очищения
    document.getElementById("btn_op_clear").onclick = function() { 
        a = ''
        b = ''
        selectedOperation = null
        expressionResult = ''
        outputElement.innerHTML = 0
    }
    
    // кнопка расчёта результата
    document.getElementById("btn_op_equal").onclick = function () {
      if (a && b === '' && selectedOperation) {
          switch (selectedOperation) {
              case '**2':
                  expressionResult = (+a) ** 2
                  break;
              case '**(1/2)':
                  expressionResult = (+a) ** (1 / 2)
                  break;
              case '!':
                  expressionResult = factorial(+a)
                  break;

          }
      }
      if (selectedOperation === '=') {
          switch (selectedOperation2) {
              case '+':
                  expressionResult = (+a) + (+b2)
                  break;
              case '-':
                  expressionResult = (+a) - (+b2)
                  break;
              case 'x':
                  expressionResult = (+a) * (+b2)
                  break;
              case '/':
                  expressionResult = (+a) / (+b2)
                  break;
          }
      }
      else if (a === '' || b === '' || !selectedOperation) {
          return
      }

      switch (selectedOperation) {
          case 'x':
              expressionResult = (+a) * (+b)
              b2 = b
              break;
          case '+':
              expressionResult = (+a) + (+b)
              b2 = b
              break;
          case '-':
              expressionResult = (+a) - (+b)
              b2 = b
              break;
          case '/':
              expressionResult = (+a) / (+b)
              b2 = b
              break;
          case '%':
              expressionResult = (+a) % (+b)
              break;
      }



      a = expressionResult.toString()
      b = ''
      selectedOperation = '='



      outputElement.innerHTML = a
  }
    };