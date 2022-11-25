let stars = document.getElementById('stars')
let Moon = document.getElementById('moon')
let Mountain_back = document.getElementById('mountain_behind')
let text = document.getElementById('text')
let btn = document.getElementById('btn')
let Mountain_front = document.getElementById('mountain_Front')
let email = document.getElementById('email')
window.addEventListener('scroll',function(){
    let value = window.scrollY
    stars.style.left = value * 0.25 + 'px';
    Moon.style.top = value * 1.05 + 'px';
    Mountain_back.style.top = value * 0.5 + 'px'
    Mountain_front.style.top = value * 0 + 'px'
    text.style.marginRight = value * 3 + 'px'
    
})

email.addEventListener('click', function(){

    alert("samolichampagne@icloud.com")

})


