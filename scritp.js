let display = document.querySelector('.display');
let buttons = document.querySelectorAll('button');
let string = '';

Array.from(buttons).forEach(button=>{
    button.addEventListener('click', (e)=>{

        // use if else statement
        // if(e.target.innerHTML === '='){
        //     string = eval(string);
        //     display.value = string;
        // }else if(e.target.innerHTML === 'AC'){
        //     string = '';
        //     display.value = string;
        // }
        // else if(e.target.innerHTML === 'DE'){
        //     string = display.value.slice(0,-1);
        //     display.value = string;
        // }
        // else{
        //     string += e.target.innerHTML;
        //     display.value = string;
        // }



        // use switch statement 
        switch (e.target.innerText) {
            case '=':
                try {
                    display.value = eval(display.value);
                } catch (error) {
                    display.value = 'error!'
                }
                break;
            case 'AC':
                display.value = "";
                break;
            case 'DE':
                display.value = display.value.slice(0,-1);
                break;
            default:
                display.value += e.target.innerText;
                break;
        }
    })
})