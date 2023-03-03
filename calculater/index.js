let screen = documentid('screen');
buttons = document.querySelectorAll('button');
let screenvalue = '';
for (item of buttons) {
    item.addEventlistner('click', (e) => {
        buttontext = e.target.innethtml;
        console.log('Button text is ', buttontext)
        if (buttontext == 'x') {
            buttontext = '*';
            screenvalue += buttontext;
            screen.value = screenvalue;
        }
        else if (buttontext == 'c') {
            svreenvalue = "";
            screen.value = screenvalue;
        }
        else if (buttontext == '=') {
            screen.value = evl(screenvalue);
        }
        else {
            screenvalue += buttontext;
            screen.value = screenvalue;
        }
    })
}