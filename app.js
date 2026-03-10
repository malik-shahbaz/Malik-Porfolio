
// HOME-SECTION
const words = ["Frontend Developer", "Web Designer", "JavaScript Enthusiast"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;
const typingElement = document.querySelector(".typing");

function type() {
    currentWord = words[i];

    if (isDeleting) {
        typingElement.textContent = currentWord.substring(0, j--);
    } else {
        typingElement.textContent = currentWord.substring(0, j++);
    }

    if (!isDeleting && j === currentWord.length) {
        setTimeout(() => isDeleting = true, 1000);
    }

    if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % words.length;
    }

    setTimeout(type, isDeleting ? 50 : 100);
}

type();


//PROGRESS BAR MOVE ANIMATION 
const skillsSection = document.querySelector(".skills");
const progressBars = document.querySelectorAll(".progress");

const observer = new IntersectionObserver((items) => {
    items.forEach(item =>{
        if(item.isIntersecting){
            progressBars.forEach(bar => {
                if(bar.classList.contains("html")){
                    bar.style.width = "90%";
                }
                if(bar.classList.contains("css")){
                    bar.style.width = "85%";
                }
                if(bar.classList.contains("js")){
                    bar.style.width = "75%";
                }
            });
        }

    });
},{threshold:0.5});

observer.observe(skillsSection)

// SECTION-PROJECTS

const filterButtons = document.querySelectorAll(".project-filters button");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {
    button.addEventListener("click",() => {

        filterButtons.forEach(btn => btn.classList.remove("active"))
        button.classList.add("active");

        const filter = button.dataset.filter;

        projectCards.forEach(card => {
            if(filter === "all" || card.dataset.category === filter){
                card.style.display = "block";
            }else{
                card.style.display = "none"
            }
        })
    })
})

// CONTACT-SECTION

emailjs.init("3XdYcVQs4FVwtUhj8");

// Select the form
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit",function(e){
    e.preventDefault();

    emailjs.sendForm("service_rox49g5","template_8x1ivbo",this)
    .then(
        function(response){
            console.log("✅ Email sent successfully!", response.status, response.text);
            alert("Message sent successfully!");
            contactForm.reset();
        },
        function(error){
            console.log("❌ EmailJS Error:", error);
            alert("Oops! Something went wrong. Check the console.");

        }
    );
});

// Resume-Section

const resumeSection = document.querySelector(".resume");
const timelineItems = document.querySelectorAll(".timeline .container");

const resumeObserver = new IntersectionObserver((enteries) => {

    enteries.forEach(entry => {
        if(entry.isIntersecting){

            timelineItems.forEach((item,index) => {

                setTimeout(() => {
                    item.classList.add("show");
                },index*500)
            })
        }
    })
},{threshold:0.3});
resumeObserver.observe(resumeSection)

// back top button


const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});