function openFolder(type){

let gallery = document.getElementById("gallery")
gallery.innerHTML = ""

// YOUR REAL IMAGES
let data = {

birthday: [
"images/birthday-flyer/Flyer1.png",
"images/birthday-flyer/Flyer2.png",
"images/birthday-flyer/Flyer3.png"
],

church: [
"images/church-flyer/Flyer1.png",
"images/church-flyer/Flyer2.png",
"images/church-flyer/Flyer3.png",
"images/church-flyer/Flyer4.png",
"images/church-flyer/Flyer5.png",
"images/church-flyer/Flyer6.png"
],

event: [
"images/event-flyer/Flyer1.png",
"images/event-flyer/Flyer2.png",
"images/event-flyer/Flyer3.png"
],

social: [
"images/social-media-flyer/Flyer1.png",
"images/social-media-flyer/Flyer2.png",
"images/social-media-flyer/Flyer3.png",
"images/social-media-flyer/Flyer4.png",
"images/social-media-flyer/Flyer5.png",
"images/social-media-flyer/Flyer6.png",
"images/social-media-flyer/Flyer7.png",
"images/social-media-flyer/Flyer8.png"
],

logo: [
"images/logo-design/Logo1.png",
"images/logo-design/Logo2.png",
"images/logo-design/Logo3.png",
"images/logo-design/Logo4.png"
],

lodge: [
"images/logde/l1.png",
"images/logde/l2.png",
"images/logde/l3.png",
"images/logde/l4.png",
"images/logde/l5.png"
]

}

// LOAD DEFAULT IMAGES
data[type].forEach(file=>{
let img=document.createElement("img")
img.src=file
img.onclick=()=>openViewer(file)
gallery.appendChild(img)
})

// LOAD ADMIN UPLOADS
let stored = JSON.parse(localStorage.getItem(type)) || []

stored.forEach(src=>{
let img=document.createElement("img")
img.src=src
img.onclick=()=>openViewer(src)
gallery.appendChild(img)
})

}

// FULLSCREEN
function openViewer(src){
document.getElementById("viewer").style.display="flex"
document.getElementById("fullImg").src = src
}

function closeViewer(){
document.getElementById("viewer").style.display="none"
}

// ORDER
function sendOrder(){
let msg = "Hello Golide Creation Graphix, I need a design"
window.open(`https://wa.me/27630685560?text=${msg}`)
window.location.href = "mailto:sibusisopro121@gmail.com"
}