var buttons = document.getElementsByClassName('buttons');
var calcText = document.getElementById('calculator-text')
var equationArray = [];

for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        if (this.textContent == '=') {
            console.log(getResult(equationArray));
            return;
        }
        if (this.textContent == 'AC') {
            equationArray = [];
            updateCalcScreen(equationArray);
            return;
        }
        let parsedChar = parseInt(this.textContent);
        if (!isNaN(parsedChar)) {
            if (equationArray[equationArray.length - 1] == '--') {
                equationArray[equationArray.length - 1] = parsedChar * -1;
                updateCalcScreen(equationArray);
                return;
            }
            if (equationArray[equationArray.length - 1] === undefined || isNaN(parseInt(equationArray[equationArray.length - 1]))) {
                equationArray[equationArray.length] = parsedChar;
                updateCalcScreen(equationArray);
                return;
            } 
            equationArray[equationArray.length - 1] = equationArray[equationArray.length - 1] * 10 + parseInt(this.textContent);
            updateCalcScreen(equationArray);
        } else {
            if (!isNaN(equationArray[equationArray.length - 1])) {
                equationArray[equationArray.length] = this.textContent;
                updateCalcScreen(equationArray);
                return;
            } 
            if (equationArray[equationArray.length - 1] == '--') {
                updateCalcScreen(equationArray);
                return;
            }
            if (this.textContent == '-' && isNaN(equationArray[equationArray.length - 1])) {
                if (equationArray[equationArray.length - 1] == 'x' || equationArray[equationArray.length - 1] == '÷') {
                    equationArray[equationArray.length] = '--';
                    updateCalcScreen(equationArray);
                    return;
                }
            }
            equationArray[equationArray.length - 1] = this.textContent;
            updateCalcScreen(equationArray);
        }
        console.log(equationArray);
    };
};

function getResult(equation) {
    console.log(equationArray);
    let total = 0;
    for (let i = 0; i < equation.length; i++) {
        if (equationArray[i] == 'x') {
            let result = equationArray[i - 1] * equationArray[i + 1];
            total = result;
            equationArray[i - 1] = result; 
            equationArray.splice(i, 2);
            i--;
            continue;
        }
        else if (equationArray[i] == '÷'){
            let result = equationArray[i - 1] / equationArray[i + 1];
            total = result;
            equationArray[i - 1] = result; 
            equationArray.splice(i, 2);
            i--;
            continue;
        }
    }
    for (let i = 0; i < equation.length; i++) {
        if (equationArray[i] == '+') {
            let result = equationArray[i - 1] + equationArray[i + 1];
            total = result;
            equationArray[i - 1] = result; 
            equationArray.splice(i, 2);
            i--;
            continue;
        }
        else if (equationArray[i] == '-'){
            let result = equationArray[i - 1] - equationArray[i + 1];
            total = result;
            equationArray[i - 1] = result; 
            equationArray.splice(i, 2);
            i--;
            continue;
        }
    }
    console.log(total);
    return total;
    // let total = 0;
    // for (let i = 0; i < equation.length; i++) {
    //     let parsedChar = parseInt(equation[i]);

    //     if (isNaN(parsedChar)) {
    //         switch(equation[i]) {
    //             case '+':
    //             break;
    //             case '-':
    //             break;
    //             case '*':
    //             break;
    //             case '÷':
    //             break;
    //         }
    //     } else {
    //         if (equation[i-1] === undefined) {
    //             total += parsedChar;
    //         } else { 
    //             total = total * 10 + parseInt(equation[i]); 
    //         }
    //     } 
    // }
    // return total;
}

function updateCalcScreen(equationArray) {
    calcText.innerHTML = equationArray.join(' ');
}