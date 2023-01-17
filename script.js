var buttons = document.getElementsByClassName("buttons");
var equationArray = [];

for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        if (this.textContent == "=") {
            console.log(getResult(equationArray));
            return;
        }
        let parsedChar = parseInt(this.textContent);
        if (!isNaN(parsedChar)) {
            if (equationArray[equationArray.length - 1] == '--') {
                equationArray[equationArray.length - 1] = parsedChar * -1;
                return;
            }
            if (equationArray[equationArray.length - 1] === undefined || isNaN(parseInt(equationArray[equationArray.length - 1]))) {
                equationArray[equationArray.length] = parsedChar;
                return;
            } 
            equationArray[equationArray.length - 1] = equationArray[equationArray.length - 1] * 10 + parseInt(this.textContent);

        } else {
            if (!isNaN(equationArray[equationArray.length - 1])) {
                equationArray[equationArray.length] = this.textContent;
                return;
            } 
            if (equationArray[equationArray.length - 1] == '--') {
                return;
            }
            if (this.textContent == '-' && isNaN(equationArray[equationArray.length - 1])) {
                if (equationArray[equationArray.length - 1] == 'x' || equationArray[equationArray.length - 1] == '÷') {
                    equationArray[equationArray.length] = '--';
                    return;
                }
            }
            equationArray[equationArray.length - 1] = this.textContent;
        }
        console.log(equationArray);
    };
};

function getResult(equation) {
    console.log(equationArray);
    let total = 0;
    for (let i = 0; i < equation.length; i++) {
        let parsedChar = parseInt(equation[i]);

        if (isNaN(parsedChar)) {
            switch(equation[i]) {
                case '+':
                break;
                case '-':
                break;
                case '*':
                break;
                case '÷':
                break;
            }
        } else {
            if (equation[i-1] === undefined) {
                total += parsedChar;
            } else { 
                total = total * 10 + parseInt(equation[i]); 
            }
        } 
    }
    return total;
}