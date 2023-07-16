/*function switcher(){
    const h =document.querySelector("h1")
    if (h.innerHTML==="hello"){
    h.innerHTML="bye"
    h.style.color="blue"
    }else{
        h.innerHTML="hello"
        h.style.color="green"
    }
}
document.querySelector("button").onclick=switcher*/
/*document.addEventListener('DOMContentLoaded',function(){
    if (!localStorage.getItem('counter')){
        localStorage.setItem('counter',0)
    }
})
const h =document.querySelector("h1")
function count(){
    let counter=localStorage.getItem('counter')
    counter++;
    if(counter %10 === 0){
        h.style.color="red"
    }else{
        h.style.color="black"
    }
    h.innerHTML=counter
localStorage.setItem('counter',counter)
}
document.addEventListener('DOMContentLoaded',function(){
    h.innerHTML=localStorage.getItem('counter') 
})
document.querySelector("button").onclick=count*/
/*if (!localStorage.getItem('color')){
    localStorage.setItem('color',"black")
}
const h =document.querySelector("h1")
document.querySelectorAll("button").forEach(button => {
button.onclick=function(){
    let color2 =localStorage.getItem('color')
    h.style.color=button.dataset.color
    color2=h.style.color
    localStorage.setItem('color',color2)
}
document.addEventListener('DOMContentLoaded',function(){
    h.style.color=localStorage.getItem('color') 
})
})*/
/*let s1=document.querySelector('select')
document.addEventListener('DOMContentLoaded',function(){
    s1.onchange=function(){
let color1=localStorage.getItem('color')
       h.style.color =this.value
color1=h.style.color
localStorage.setItem('color',color1)
    }
})
document.addEventListener('DOMContentLoaded',function(){
    h.style.color=localStorage.getItem('color') 
})*/
