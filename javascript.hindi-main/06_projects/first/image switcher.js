
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const id = button.getAttribute('id');
        if(id === 'image'){
            body.style.backgroundImage = 'url(image.png)';
            body.style.backgroundSize = 'cover';
        }
        else if(id === 'image2'){
            body.style.backgroundImage = 'url(image2.jpg)';
            body.style.backgroundSize = 'cover';
        }   
        else if(id === 'image3'){
            body.style.backgroundImage = 'url(image3.jpg)';
            body.style.backgroundSize = 'cover';
        }
        
    })
})

