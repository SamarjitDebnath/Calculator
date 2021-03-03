let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = '';

for(let item of buttons){
    item.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;
        if(buttonText == 'AC'){
            screenValue = '';
            screen.innerText = screenValue;
        }
        else if(buttonText == '='){
            screen.innerText = eval(screenValue);
            screenValue = '';
        }
        else if(buttonText == "DEL"){
            screenValue = screenValue.toString().slice(0, -1)
            screen.innerText = screenValue;
        }
        else{
            screenValue += buttonText;
            screen.innerText = screenValue;
        }
    
    })
}

