var buttons = document.getElementsByClassName("buttons");
var equationArray = [];

for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () { 
        if (this.textContent == "=") {
            console.log(getResult(equationArray));
        }
        let parsedChar = parseInt(this.textContent);
        if (isNaN(parsedChar)) {
            equationArray[equationArray.length] = this.textContent; 
            // if (this.textContent == '-') {
            //     if (isNaN(equationArray[equationArray.length - 1])) {
                    
            //     }
            // } else if (this.textContent == '+') {

            // } else {

            // }
        } else {
            if (equationArray[equationArray.length-1] === undefined || isNaN(parseInt(equationArray[equationArray.length-1]))) {
                if (equationArray.length === 0) {
                    equationArray[equationArray.length] = parsedChar;
                } else {
                    equationArray[equationArray.length] = parsedChar;
                }
            } else {
                equationArray[equationArray.length - 1] = equationArray[equationArray.length - 1] * 10 + parseInt(this.textContent);
            }
        }
    };
};

function getResult(equation) {
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
                // total = equation[i-1] + equation[i];
                // total = parseInt(equation[i-1] + equation[i]);
                total = total * 10 + parseInt(equation[i]);

                // total = parseInt(`${equation[i-1]}${equation[i]}`);
            }
        }

        // console.log(equation[i]);
    }
    return total;
}