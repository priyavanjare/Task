let mm = gsap.matchMedia();

mm.add("(min-width: 900px)", () => {


gsap.registerPlugin(ScrollTrigger);

const containerPanelTop = document.querySelectorAll(".main .sec");
let containerspanel = [...containerPanelTop]


ScrollTrigger.create({
    markers: false,
    snap: 1,
    trigger: containerspanel[0],
    
    //pin: true,
    pinSpacer: true,
    scrub: 1,
    // opdate its value on resize
    start: () => `+=${-containerspanel[0].offsetHeight}`,
    end: () => `+=${containerspanel[0].offsetHeight}`,
    
});
ScrollTrigger.create({
    markers: false,
    snap: 1,
    trigger: containerspanel[1],
    
    //pin: true,
    pinSpacer: true,
    scrub: 1,
    // opdate its value on resize
    start: () => `+=${-containerspanel[1].offsetHeight}`,
    end: () => `+=${containerspanel[1].offsetHeight}`,
    
});

ScrollTrigger.create({
    markers: false,
    snap: 1,
    trigger: containerspanel[2],
    
    //pin: true,
    pinSpacer: true,
    scrub: 1,
    // opdate its value on resize
    start: () => `+=${-containerspanel[2].offsetHeight}`,
    end: () => `+=${containerspanel[2].offsetHeight}`,
    
});

ScrollTrigger.create({
    markers: false,
    snap: 1,
    trigger: containerspanel[3],
    
    //pin: true,
    pinSpacer: true,
    scrub: 1,
    // opdate its value on resize
    start: () => `+=${-containerspanel[3].offsetHeight}`,
    end: () => `+=${containerspanel[3].offsetHeight}`,
    
});

ScrollTrigger.create({
    markers: false,
    snap: 1,
    trigger: containerspanel[4],
    
    //pin: true,
    pinSpacer: true,
    scrub: 1,
    // opdate its value on resize
    start: () => `+=${-containerspanel[4].offsetHeight}`,
    end: () => `+=${containerspanel[4].offsetHeight}`,
    
});

ScrollTrigger.create({
    markers: false,
    snap: 1,
    trigger: containerspanel[5],
    
    //pin: true,
    pinSpacer: true,
    scrub: 1,
    // opdate its value on resize
    start: () => `+=${-containerspanel[5].offsetHeight}`,
    end: () => `+=${containerspanel[5].offsetHeight}`,
    
});

ScrollTrigger.create({
    markers: false,
    snap: 1,
    trigger: containerspanel[6],
    
    //pin: true,
    pinSpacer: true,
    scrub: 1,
    // opdate its value on resize
    start: () => `+=${-containerspanel[6].offsetHeight}`,
    end: () => `+=${containerspanel[6].offsetHeight}`,
    
});

// gsap.registerPlugin(ScrollTrigger);
// gsap.to(".sec",{
//     scrollTrigger:{
//         trigger:".sec",
//         start:"top",
//         markers:{
//             backgroundColor:"blue",
//             endColor:"blue"
//         }

//     }
// })



gsap.registerPlugin(ScrollTrigger);
// ScrollTrigger.defaults({
//   toggleActions: "restart pause resume pause",
//   scroller: ".main"
// });

gsap.to(".page2-img1",{
    y:-130,
    duration:2,
    scrollTrigger:{
        trigger:".page2-img1",
        start:"top center",
        end: "bottom center",
        markers:false,
        toggleActions:"restart restart restart restart"
    }
})
gsap.to(".page2-img2",{
    y:130,
    duration:2,
    scrollTrigger:{
        trigger:".page2-img2",
        start:"top center",
        end: "bottom center",
        markers:false,
        toggleActions:"restart restart restart restart"
    }
})

gsap.to(".page1_img1",{
    y:-100,
    duration:3,
    scrollTrigger:{
        trigger:".page1_img1",
        start:"top center",
        end: "bottom center",
        markers:false,
        toggleActions:"restart restart restart restart"
    }
})
gsap.to(".page1_img2",{
    y:100,
    duration:3,
    scrollTrigger:{
        trigger:".page1_img2",
        start:"top center",
        end: "bottom center",
        markers:false,
        toggleActions:"restart restart restart restart"
    }
})

gsap.to(".page3-img1",{
    y:150,
    duration:2,
    scrollTrigger:{
        trigger:".page3-img1",
        start:"top center",
        end: "bottom center",
        markers:false,
        toggleActions:"restart restart restart restart"
    }
})
gsap.to(".page3-img2",{
    y:-150,
    duration:2,
    scrollTrigger:{
        trigger:".page3-img2",
        start:"top center",
        end: "bottom center",
        markers:false,
        toggleActions:"restart restart restart restart"
    }
})

gsap.to(".page4-img1",{
    x:-100,
    y:-150,
    duration:2,
    scrollTrigger:{
        trigger:".page4-img1",
        start:"top center",
        end: "bottom center",
        markers:false,
        toggleActions:"restart restart restart restart"
    }
})

gsap.to(".page5-img1",{
    y:-100,
    duration:2,
    scrollTrigger:{
        trigger:".page5-img1",
        start:"top center",
        end: "bottom center",
        markers:false,
        toggleActions:"restart restart restart restart"
    }
})
gsap.to(".page5-img2",{
    y:100,
    duration:2,
    scrollTrigger:{
        trigger:".page5-img2",
        start:"top center",
        end: "bottom center",
        markers:false,
        toggleActions:"restart restart restart restart"
    }
})
gsap.to(".page6_img1",{
    y:-20,
    duration:2,
    scrollTrigger:{
        trigger:".page6_img1",
        start:"top center",
        end: "bottom center",
        markers:false,
        toggleActions:"restart restart restart restart"
    }
})
gsap.to(".page6_img2",{
    y:-20,
    duration:2,
    scrollTrigger:{
        trigger:".page6_img2",
        start:"top center",
        end: "bottom center",
        markers:false,
        toggleActions:"restart restart restart restart"
    }
})
gsap.to(".page6_img3",{
    y:-20,
    duration:2,
    scrollTrigger:{
        trigger:".page6_img3",
        start:"top center",
        end: "bottom center",
        markers:false,
        toggleActions:"restart restart restart restart"
    }
})
gsap.to(".page6_img4",{
    y:30,
    duration:2,
    scrollTrigger:{
        trigger:".page6_img4",
        start:"top center",
        end: "bottom center",
        markers:false,
        toggleActions:"restart restart restart restart"
    }
})
gsap.to(".page6_img5",{
    y:80,
    duration:2,
    scrollTrigger:{
        trigger:".page6_img5",
        start:"top center",
        end: "bottom center",
        markers:false,
        toggleActions:"restart restart restart restart"
    }
})

gsap.to(".page7-img1",{
    y:-100,
    duration:2,
    scrollTrigger:{
        trigger:".page7-img1",
        start:"top center",
        end: "bottom center",
        markers:false,
        toggleActions:"restart restart restart restart"
    }
})
gsap.to(".page7-img2",{
    y:100,
    duration:2,
    scrollTrigger:{
        trigger:".page7-img2",
        start:"top center",
        end: "bottom center",
        markers:false,
        toggleActions:"restart restart restart restart"
    }
})




var svg = document.querySelector(".svg_img")

// if (window.scrollY ="100px"){
//     svg.classList.add("color-green")
// }


// function showScrollColorChange() {
//     // let scroll = window.scrollTop() + (window.height() / 3); 
  
//     if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 90) {
//       svg.classList.add('color-green')
//     } if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 250) {
//       svg.classList.add('color-green')
//     } else {
//       document.body.classList.add('color-orange')
//     }
//   }
  
//   document.body.addEventListener('scroll', () => {
//     showScrollColorChange()
//   }) 
//   window.onscroll = function () { showScrollColorChange() };










let dotsst = document.querySelectorAll("dotsst")
let path = document.querySelector('path')
let pathlength = path.getTotalLength();
let img1 = document.getElementById("img1")
// let main = document.querySelector(".main")


// drawing
path.style.strokeDasharray = pathlength+ ' '+pathlength;
path.style.strokeDashoffset = pathlength;

window.addEventListener("scroll",()=>{
    var scrollpercentage = (document.documentElement.scrollTop + document.body.scrollTop)/(document.documentElement.scrollHeight - document.documentElement.clientHeight)
    var drawlength = pathlength * scrollpercentage;

    path.style.strokeDashoffset = pathlength - drawlength
    path.style.strokeWidth = "8px"

})
});

//image slider
var img = document.querySelectorAll(".main12")
var currentSlide = 0;

window.addEventListener("keydown",(e)=>{
    if(e.key === "ArrowRight"){
      currentSlide = (currentSlide +1) %img.length;
      showSlide(currentSlide)
    }
})

window.addEventListener("keydown",(e)=>{
     if(e.key === "ArrowLeft"){
        currentSlide = (currentSlide -1)+img.length %img.length;
        showSlide(currentSlide)
    }
})

showSlide(currentSlide);

function showSlide(index){
    img.forEach((img,i)=>{
        img.classList.toggle("active",i ===index)
    })
}


// var img = document.querySelectorAll(".main12")
// var counter = 0;

// img.forEach((img,index)=>{
//     // img.style.left = `${index*100}%`
// })

// window.addEventListener("keydown",(e)=>{
//    if(e.key==="ArrowRight"){
//       counter++
//       slider()
//    }
// })
// window.addEventListener("keydown",(e)=>{
//     if(e.key==="ArrowLeft"){
//        counter--
//        slider()
//     }
//  })


// var slider = ()=>{
//     img.forEach((img,i)=>{
//         // img.style.transform = `translateX(-${counter*100}%)`
//     })
// }
// var svg = document.querySelector(".svg_img")
// if(window.screenY = "50px" || window.screenY <= "50px"){
//    svg.classList.add("color-green")
// }else{
//     svg.classList.remove("color-green")
// }























