
function initial(){
    var tl = gsap.timeline()
tl.from(".page1",{
    opacity:0,
    duration:0.4,
    delay:0.5
})
tl.from(".page1",{
    transform:"scaleX(0.7) scaleY(0.2) translateY(80%)",
    borderRadius:"100px",
    duration:1,
    ease:"expo.out"
})
tl.from("nav",{
    y:-100,
    opacity:0,
    delay:-0.2
})
tl.from(".page1 h1, .page1 p, .page1 div",{
    opacity:0,
    duration:0.5,
    stagger:0.2,
    x:-100
})


gsap.to("Body",{
    backgroundColor:"Black",
    delay:2
})
}
initial()

function navAnimation() {
    var nav = document.querySelector(".nav-part2")

nav.addEventListener("mouseenter",function(){

    let vl = gsap.timeline()


    vl.to(".nav-bottom",{
        height : "17vh",
        duration:0.1
    })
    vl.to(".nav-part2 h5",{
        display : "block",
        duration:0.1
    })
    vl.to(".nav-part2 h5 span",{
        y:0,
        stagger:{
            amount:0.2
        }
    })
})


nav.addEventListener("mouseleave",function(){

    let vl = gsap.timeline()


    vl.to(".nav-part2 h5 span",{
        y:25,
        stagger:{
            amount:0.1
        }
    }).to(".nav-part2 h5",{
        display : "none",
        duration:0.1
    }).to(".nav-bottom",{
        height : 0,
        duration:0.1
    })
})
}
navAnimation()

function page3Animation(){
    var page3 = document.querySelector(".page3") 
    var book = document.querySelector(".page3 .book")


page3.addEventListener("mouseenter",function(){
    gsap.to(".book",{
        opacity:1,
        scale : 1
    })
})


page3.addEventListener("mouseleave",function(){
    gsap.to(".book",{
        opacity:0,
        scale : 0
    })
})

page3.addEventListener("mousemove",function(dets){
    gsap.to(".book",{
        x:dets.x - page3.getBoundingClientRect().x-50,
        y:dets.y - page3.getBoundingClientRect().y-50
    })
})
}
page3Animation()

function sampleAnimation(){
    var engagement = document.querySelectorAll("#wed")
    var ok = document.querySelector("#ok")
    var anchor = document.querySelector(".sample p a")


engagement.forEach(function(elem){
    elem.addEventListener("click",function(){
        gsap.to(".sample",{
            opacity:1,
            scale:1
        })
    })
})


ok.addEventListener("click",function(){
    gsap.to(".sample",{
        scale:0,
        opacity:0
    })
})

anchor.addEventListener("click",function(){
    gsap.to(".sample",{
        scale:0,
        opacity:0
    })
})
}
sampleAnimation()

function scrollTriggerAnimation(){
    gsap.from(".page2-left",{
        x:-100,
        duration:1,
        opacity:0,
        scrollTrigger:{
            trigger:".page2",
            scroller:"body",
            // markers:true,
            start:"top 60%",
        }
    })
    
    gsap.from(".page2-right",{
        y:100,
        duration:1,
        opacity:0,
        scrollTrigger:{
            trigger:".page2",
            scroller:"body",
            // markers:true,
            start:"top 60%",
        }
    })
    
    
    gsap.from(".upper h1",{
        x:-100,
        duration:1,
        opacity:0,
        scrollTrigger:{
            trigger:".cover",
            scroller:"body",
            // markers:true,
            start:"top 60%",
        }
    })
    
    gsap.from(".subdiv",{
        duration:1.8,
        rotate:5,
        scrollTrigger:{
            trigger:"#page4",
            scroller:"body",
            // markers:true,
            start:"top 50%",
        }
    })
    
    gsap.from(".page3",{
        duration:2,
        opacity:0,
        scrollTrigger:{
            trigger:".page3",
            scroller:"body",
            // markers:true,
            start:"top 60%",
        }
    })
    
    gsap.from(".page5 .left img",{
        duration:1,
        opacity:0,
        x:-100,
        scrollTrigger:{
            trigger:".page5",
            scroller:"body",
            // markers:true,
            start:"top 60%",
        }
    })
    
    gsap.from(".page5 .right span",{
        duration:1,
        // opacity:0,
        x:100,
        
        scrollTrigger:{
            trigger:".page5",
            scroller:"body",
            // markers:true,
            start:"top 60%",
        }
    })
    
    gsap.from(".page6 .right img",{
        duration:1,
        opacity:0,
        x:100,
        scrollTrigger:{
            trigger:".page6",
            scroller:"body",
            // markers:true,
            start:"top 60%",
        }
    })
    
    gsap.from(".page6 .left span",{
        duration:1,
        // opacity:0,
        x:-100,
        
        scrollTrigger:{
            trigger:".page6",
            scroller:"body",
            // markers:true,
            start:"top 60%",
        }
    })
    
    gsap.from(".squre",{
        duration:1,
        opacity:0,
        scrollTrigger:{
            trigger:".contact",
            scroller:"body",
            // markers:true,
            start:"top 60%",
        }
    })
    
}
scrollTriggerAnimation()

