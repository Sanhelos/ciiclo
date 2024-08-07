const swiper = new Swiper('.slider__body-container', {
    slidesPerView: 'auto',
    speed: 800 ,
    direction: 'vertical' ,

    Keyboard: {
        enabled: true ,
        onlyInViewport: true ,
        pageUpDown: true ,
    },
    mousewheel: {
        sensative: 1 ,
    },
    obserwer:true,
    watchOverflow: true, 
    obserwerParents: true,
    obserwerSlideChildren: true, 
    
    pagination: {
        el: '.pagination1',
        dynamicBullets: true,
      },
})








window.addEventListener("load", windowLoad);

function windowLoad() {

    // Функція ініціалізації
    digitsCountersInit()
    function digitsCountersInit(digitsCountersItems) {
        let digitsCounters = digitsCountersItems ? digitsCountersItems : document.querySelectorAll("[data-digits-counter]");
        if (digitsCounters) {
            digitsCounters.forEach(digitsCounter => {
                digitsCountersAnimate(digitsCounter);
            });

        }

    }

    // Функція анімації

    function digitsCountersAnimate(digitsCounter) {
        let startTimestamp = null;
        const duration = parseInt(digitsCounter.dataset.digitsCounter) ? parseInt(digitsCounter.dataset.digitsCounter) : 1000;
        const startValue = parseInt(digitsCounter.innerHTML);
        const startPosition = 0;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            digitsCounter.innerHTML = Math.floor(progress * (startPosition + startValue));
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }
    // Пуск при загрузці сторінки

    // digitsCountersInit();


        let options = {
            threshold: 0.3
        }
        
        let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetElement = entry.target;
                const digitsCountersItems = targetElement.querySelectorAll("[data-digits-counter]");
                if (digitsCountersItems.length) {
                    digitsCountersInit(digitsCountersItems);
                }
                // Вимкнути відслідковування після спрацювання
                // observen.unobserve(targetElement);

				const d = document.querySelector(".design")
                d.classList.add("active")
                const p = document.querySelector(".projects")
                p.classList.add("active")
            }
        });
        
        }, options); 
        let sections = document.querySelectorAll(".page__section");
        if (sections.length) {
            sections.forEach(section => {
                observer.observe(section);
            });
        }
}



