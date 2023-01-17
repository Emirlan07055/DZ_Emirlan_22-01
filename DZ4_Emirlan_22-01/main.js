let count = document.getElementById('Number')
let increment = document.querySelector('.Plus')
let decrement = document.querySelector('.Minus')
let clear = document.querySelector('.clear')

increment.addEventListener('click', () =>{
    count.innerHTML++
    count.style.color = 'green'
})
decrement.addEventListener('click', () =>{
    if (count.innerHTML > 0)
    count.innerHTML--
    count.style.color = 'red'
})

clear.addEventListener("click",()=>{
    count.innerHTML = 0
    count.style.color = 'black'
})

/********************/

// document.querySelector('.block').onmousemove = function (event){
//     document.querySelector('#posX').innerHTML = event.screenX
//     document.querySelector('#posY').innerHTML = event.screenY
// }
