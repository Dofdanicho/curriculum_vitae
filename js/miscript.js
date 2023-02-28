// document.getElementById('cambiarcolor1').addEventListener('click',function(){
//     console.log("hola mundo desde EventListener");
//     document.getElementById("micontenedor").style.backgroundColor = "#8BF8AE";
// })

// document.getElementById('cambiarcolor2').addEventListener('click',function(){
//     console.log("hola mundo desde EventListener");
//     document.getElementById("micontenedor").style.backgroundColor = "black";
// })

document.getElementById('cambiarcolor1').addEventListener('click',
    function(){
        document.body.style.backgroundColor = 'rgb(227, 211, 230)';
        const collection = document.getElementsByClassName('oscuro');
        for (let i = 0; i < collection.length; i++){
            collection[i].style.backgroundColor = 'rgb(227, 211, 230)';
            collection[i].style.color = 'black';
        }
    }
)
document.getElementById('cambiarcolor1').addEventListener('click',
    function(){
        const collection = document.getElementsByClassName('color_texto');
        for (let i = 0; i < collection.length; i++){
            collection[i].style.color = 'black';
        }
    }
)



document.getElementById('cambiarcolor2').addEventListener('click',
    function(){
        document.body.style.backgroundColor = '#4B0656';
        const collection = document.getElementsByClassName('oscuro');
        for (let i = 0; i < collection.length; i++){
            collection[i].style.backgroundColor = '#4B0656';
            collection[i].style.color = 'white';
        }
    }
)
document.getElementById('cambiarcolor2').addEventListener('click',
    function(){
        const collection = document.getElementsByClassName('color_texto');
        for (let i = 0; i < collection.length; i++){
            collection[i].style.color = 'white';
        }
    }
)