let resultElements = document.querySelector('p')
resultElements.innerText = '<p>hello Dharmik</p>'
console.log(resultElements)

// resultElements.innerHTML = '<p>hello Dharmik</p>'
//change the value of tag
let myLink = document.querySelector('a')
// console.log(myLink.getAttribute('href'))
myLink.setAttribute('href', 'google.com')
console.log (myLink.getAttribute('href'))


// add class
let heading = document.querySelector('h1')
heading.classList.add('newClass')

//remove class
let params = document.querySelector('p')
params.classList.remove('params')
console.log(params)

// toggle class 
params.classList.replace("main","newClass")

//parent , child, siblings

let parentElems = document.querySelector('.content')

// All Child
console.log(parentElems.children)

// parent access
let childElems = document.querySelector('h1')
console.log(childElems.parentElement)

// sibling access
let siblingElems = document.querySelector('h1')
console.log(siblingElems.nextElementSibling)

// Event Basic ( Click Event )
// let element = document.querySelectorAll('li');
// element.forEach(function(element){
//     element.addEventListener('click',(e) => {
//         e.target.remove()
//     })

// })

// const ul = document.querySelector('ul')
let button = document.querySelector('.clickMe')

button.addEventListener('click',function(){
    let li = document.createElement('li')
    li.textContent = "Something New Added";
    ul.append(li)
})

// event bubling and delegation
const ul = document.querySelector('ul')
ul.addEventListener('click',(e)=>{
    if(e.target.nodeName == 'LI'){
        e.target.remove()
    }
})

let form = document.querySelector('.sing-up-form')
let email = document.querySelector('#email')
let password = document.querySelector('#password')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log(form.userEmail.value,form.userPassword.value)
   
   
    })





