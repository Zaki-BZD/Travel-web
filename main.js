// check local storage for color
let mainColor1=localStorage.getItem("color-1")
let mainColor2=localStorage.getItem("color-2")
if(mainColor1!==null){
    document.documentElement.style.setProperty("--main-color-1",mainColor1)
    document.documentElement.style.setProperty("--main-color-2",mainColor2)
    document.querySelectorAll(".color-list li").forEach(e=>{
        e.classList.remove("active")
        if (e.dataset.color1==mainColor1) {
            e.classList.add("active")
        }
    })
    
}
// check local storage background
// let backgroundRandom=document.querySelectorAll(".Background-Random span")
// let backgroundRandoml=true
// let backgroundInterval;
// let backgroundstorage=localStorage.getItem("background")
// if (backgroundstorage!==null) {
//     backgroundRandom.forEach(e=>{
//         e.classList.remove("active")
//     })
//     if (backgroundstorage=="true") {
//         backgroundRandoml=true
//         document.querySelector(".Background-Random .yes").classList.add("active")
        
//     }
//     else{
//         backgroundRandoml=false
//         document.querySelector(".Background-Random .no").classList.add("active")
//         }
        
//     }

// setting box click
let settingsBox=document.querySelector(".settings-box")
let settingsicon=document.querySelector(".settings-box .icon")
console.log(settingsicon)
console.log(settingsBox)
settingsicon.addEventListener("click",()=>{
    if (settingsBox.classList.contains("open")) {
        settingsBox.classList.remove("open")
    }
    else{
        settingsBox.classList.add("open")
    }
}
)
// addEventListener(settingsicon,onclick)
// switch color 
let colorlist=document.querySelectorAll(".color-list li")
colorlist.forEach(li=>
    li.addEventListener("click",(e)=>{
        
        document.documentElement.style.setProperty("--main-color-1",e.target.dataset.color1)
        document.documentElement.style.setProperty("--main-color-2",e.target.dataset.color2)
        localStorage.setItem("color-1",e.target.dataset.color1)
        localStorage.setItem("color-2",e.target.dataset.color2)
        active(e)
    }))
// backgroundRandom.forEach(e=>
//     e.addEventListener("click",(e)=>{
    
        
        
        
//         e.target.parentElement.querySelectorAll(".active").forEach(e=>{
//             e.classList.remove("active")
//         })
//         e.target.classList.add("active")
//         if (e.target.classList.contains("yes")) {
//             backgroundRandoml=true
//             RandomBackground();
//             localStorage.setItem("background",true)
//         }
//         else{
//             backgroundRandoml=false
//             clearInterval(backgroundInterval)
//             localStorage.setItem("background",false)

//         }
//     }))
    // nav
    let nav=document.querySelector("header ul")
    let navButton=document.querySelector("header button")
    navButton.addEventListener("click",function () {
        let statue=navButton.getAttribute("data-statue")
        if (statue=="false") {
            nav.style.top="60px"
            navButton.setAttribute("data-statue", true);
        } else {
            nav.style.top="-560px"
            navButton.setAttribute("data-statue", false);
            
        }
    })
    let header=document.querySelector("header")
    window.addEventListener("scroll",function () {
        let pageHeight=this.pageYOffset
        if (pageHeight==0) {
            
            header.style.backgroundColor="transparent"
        }
        else{

            header.style.backgroundColor="#222"
        }
    })
    // number animation
    let nums=document.querySelectorAll(".num")
    let section=document.querySelector(".question")
    let started=false
    function startCount(el) {
        let goal=el.dataset.goal
        let count=setInterval(()=>{
            el.textContent++
            if (el.textContent==goal) {
                clearInterval(count)
            }
        },1000/goal )

    }
    window.addEventListener("scroll",function (){
        if (window.scrollY>=section.offsetTop) {
                if (!started) {
                    
                            nums.forEach((el)=>{startCount(el)})
                }
                started=true
        }
    }) 
    // bullets
    let allbullets=document.querySelectorAll(".bullets>div")
    allbullets.forEach(bullet=>{
        bullet.addEventListener("click",(e)=>{
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior:"smooth"
            })
        })
    })
    // handle active
    function active(e) {
        e.target.parentElement.querySelectorAll(".active").forEach(e=>{
            e.classList.remove("active")
        })
        e.target.classList.add("active")
    }
    // bullets show
    let bulletsspan=document.querySelectorAll(".Bullets-state span")
    let bulletscontainer=document.querySelector(".bullets")
    let bulletlocalstorage=localStorage.getItem("bullets")
    if(bulletlocalstorage!==null){
        console.log("nkmk")
        bulletsspan.forEach(span=>{
            span.classList.remove("active")
        })
        if (bulletlocalstorage=="block") {
            bulletscontainer.style.display="block"
            document.querySelector(".Bullets-state .yes").classList.add("active")
            
            
        }
        else{
            bulletscontainer.style.display="none"
            document.querySelector(".Bullets-state .no").classList.add("active")

        }

    }
    bulletsspan.forEach(span=>{
        span.addEventListener("click",(e)=>{
            if(e.target.classList.contains("yes")){
                bulletscontainer.style.display="block"
                localStorage.setItem("bullets","block")
            }
            else {

                bulletscontainer.style.display="none"
                localStorage.setItem("bullets","none")
            }
            active(e)
        })
    })
// reset options
let resetButton=document.querySelector(".settings-box button")
resetButton.addEventListener("click",()=>{
    localStorage.removeItem("bullets")
    localStorage.removeItem("color-1")
    localStorage.removeItem("color-2")
    localStorage.removeItem("background")
    window.location.reload()
})
// footer button
let footerbutton=document.querySelector("footer button")
let footerspan=document.querySelector("footer .submit")
footerbutton.addEventListener("click",()=>{
    footerspan.style.display="block"
    setInterval(() => {
        
        footerspan.style.display="none"
        window.location.reload()
    }, 2000);
})