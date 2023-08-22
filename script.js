let slide = document.querySelectorAll(".slide")

slide.forEach((e, index) => {
    e.style.left = `${index * 100}%`
})
let count = 0;
let next = document.getElementById("next")
let prev = document.getElementById("Prev");
next.addEventListener("click", () => {
    count++;
    if (count <=3) {
        nextFun()
    }else{
        count=3
    }
})
prev.addEventListener("click", () => {
    if(count>=0){
        count--
        prevfun()
    }
})

let timer1=setInterval(()=>{
 if(count<3){
    count++
    nextFun()
 }
 if(count>=3){
    count=0
 }
},2000)

let nextFun=()=>{
    slide.forEach((e) => {
        e.style.transform = `translateX(-${count * 100}%)`;
    })
}
let prevfun=()=>{
    slide.forEach((e) => {
        e.style.transform = `translateX(-${count * 100}%)`;
    })
}