// ==========================
// Counter Animation
// ==========================

const counters = document.querySelectorAll(".counter");

const speed = 100;

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const count = +counter.innerText;

        const increment = Math.ceil(target / speed);

        if(count < target){

            counter.innerText = count + increment;

            setTimeout(updateCounter,20);

        }else{

            counter.innerText = target + "+";

        }

    };

    updateCounter();

});
// ==========================
// FAQ Accordion
// ==========================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        faqItems.forEach(faq => {

            if(faq !== item){

                faq.classList.remove("active");

                faq.querySelector("i").className = "fa-solid fa-plus";

            }

        });

        item.classList.toggle("active");

        const icon = item.querySelector("i");

        if(item.classList.contains("active")){

            icon.className = "fa-solid fa-minus";

        }else{

            icon.className = "fa-solid fa-plus";

        }

    });

});