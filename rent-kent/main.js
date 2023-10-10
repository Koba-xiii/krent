const tl = gsap.timeline()

const TOKEN = "5825753439:AAHpxIAxwwoNBSnFqHEq4k-NTuc6iKkWI_M";
const CHAT_ID = "-1001861883252";
const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;
const formAlert = document.querySelector('.idnsticky_bar');
const formAlert2 = document.querySelector('.idnsticky_bar_2');

const menuBtn = document.querySelector('.menu-btn');
const navResponse = document.querySelector('.navbar-response');

menuBtn.addEventListener('click', () => {
    navResponse.classList.toggle('menu--open');
});


// ALERT message
document.getElementById('tgForm').addEventListener('submit', function (e) {
    e.preventDefault();
    let message = `<b>Заявка с сайта</b>\n`;
    message += `<b>Отправитель: </b> ${ this.name.value }\n`;
    message += `<b>Название автомобиля: </b> ${ this.mark.value }\n`;
    message += `<b>Номер телефона отправителя: </b> ${ this.number.value }`;

    axios.post(URI_API, {
            chat_id: CHAT_ID,
            parse_mode: 'html',
            text: message
        })
        .then((res) => {
            this.name.value = "";
            this.mark.value = "";
            this.number.value = "";
            formAlert2.style.display = "block";
        })
        .catch((err) => {
            console.warn(err);
        })
        .finally(() => {
            console.log("Konec");
        })
})
document.getElementById('form-1').addEventListener('submit', function (e) {
    e.preventDefault();
    let message = `<b>Заявка с сайта</b>\n`;
    message += `<b>Отправитель: </b> ${ this.name.value }\n`;
    message += `<b>Номер телефона отправителя: </b> ${ this.number.value }\n`;
    message += `<b>День аренды машины: </b> ${ this.searchDay.value }\n`;
    message += `<b>День возврата машины: </b> ${ this.returnDate.value }`;

    axios.post(URI_API, {
            chat_id: CHAT_ID,
            parse_mode: 'html',
            text: message
        })
        .then((res) => {
            this.name.value = "";
            this.searchDay.value = "";
            this.returnDate.value = "";
            this.number.value = "";
            formAlert.style.display = "block";
        })
        .catch((err) => {
            console.warn(err);
        })
        .finally(() => {
            console.log("Konec");
        })
})


// menu-btn



tl.fromTo('.home-header', {
        x: -100,
        opacity: 0
    }, {
        x: 0,
        opacity: 1,
        duration: 1
    }, ).fromTo('.text-h2 ', {
        x: 100,
        opacity: 0

    }, {
        x: 0,
        opacity: 1,
        duration: 1
    }, ).fromTo('.btn-1', {
        y: 100,
        opacity: 0,

    }, {
        y: 0,
        opacity: 1,
        duration: 1

    })

    .fromTo('.logo', {
            x: -50,
            opacity: 0,

        }, {
            x: 0,
            opacity: 1,
            duration: 1
        },
        3
    )
    .fromTo('.header-btn', {
            x: 50,
            opacity: 0,

        }, {
            x: 0,
            opacity: 1,
            duration: 1
        },
        3
    )
    .fromTo('.navbar li', {
            y: -50,
            opacity: 0,

        }, {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.15,
        },
        2
    )
    .fromTo('.header-img', {
            x: 100,
            opacity: 0,

        }, {
            x: 0,
            opacity: 1,
            duration: 1
        },
        1
    )


tl.fromTo('.heading-1', {
    x: -100,
    opacity: 0
}, {
    x: 0,
    opacity: 1,
    duration: 1
})

SmoothScroll({
    // Время скролла 400 = 0.4 секунды
    animationTime: 800,
    // Размер шага в пикселях 
    stepSize: 75,

    // Дополнительные настройки:

    // Ускорение 
    accelerationDelta: 30,
    // Максимальное ускорение
    accelerationMax: 2,

    // Поддержка клавиатуры
    keyboardSupport: true,
    // Шаг скролла стрелками на клавиатуре в пикселях
    arrowScroll: 50,

    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm: true,
    pulseScale: 4,
    pulseNormalize: 1,

    // Поддержка тачпада
    touchpadSupport: true,
})
