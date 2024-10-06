const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button){
    console.log(button);
    button.addEventListener('click', function (k) {
        
        console.log(k)
        console.log(k.target);
        if(k.target.id === 'green' ){
            body.style.backgroundColor =  k.target.id;
        }
        if(k.target.id === 'red' ){
            body.style.backgroundColor =  k.target.id;
        }
        if(k.target.id === 'pink' ){
            body.style.backgroundColor =  k.target.id;
        }
        if(k.target.id === 'black' ){
            body.style.backgroundColor = k.target.id;
        }

    });
});