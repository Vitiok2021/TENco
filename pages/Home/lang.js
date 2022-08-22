const langArr = {
    "home": {
        'ua': 'Головна',
        'en': 'Home',
    },
    "about": {
        'ua': 'Про нас',
        'en': 'About Us',
    },
    "service": {
        'ua': 'Сервіс',
        'en': 'Service',
    },
    "membership": {
        'ua': 'Клуб',
        'en': 'Membership',
    },
    'events': {
        'ua': 'Події',
        'en': 'Events',
    },
    'partners': {
        'ua': 'Партнери',
        'en': 'Partners',
    },
    'contact': {
        'ua': 'Контакти',
        'en': 'Сontact',
    },
    'play': {
        'ua': 'Життя, де все виглядає</br> як вистава',
        'en': 'A life where everything<br> feels like a play',
    },
    'discov': {
        'ua': 'Відкрийте для себе найексклюзивніший приватний членський клуб Швейцарії.',
        'en': "Discover Switzerland's most exclusive private membership club.",
    },
    'discov-text1': {
        'ua': 'Основна місія TENco полягає в тому, щоб ви могли зосередитися на тому, що дійсно найважливіше у вашому житті.<br>Ніколи не встановлюйте обмежень, йдіть за своїми мріями та не бійтеся розширювати межі.',
        'en': "TENco’s core mission is to enable you to focus on what really matters most in your life.<br>Never set limits, go after your dreams and don’t be afraid to push boundaries.",
    },
    'discov-text2': {
        'ua': "У TENco ви можете очікувати нову сферу можливостей, що змінюють життя, як ніде більше. Ми надаємо вам найвищий рівень персоналізованого обслуговування та прагнемо перевершити всі ваші очікування. Будучи частиною ексклюзивної спільноти TENco, ви матимете можливість зустрітися з однодумцями з нашої ретельно відібраної мережі членів.",
        'en': " At TENco, you can expect a new realm of life-changing opportunities like nowhere else. We provide you with the highest level of personalized service and thrive to exceed all your expectations. As part of the exclusive TENco community, you will have the chance to encounter like-minded individuals from our carefully selected network of Members.",
    },
    'slider': {
        'ua': 'Наші партнери',
        'en': 'Our partners',
    },
}


// Змінення мови

const select = document.querySelector('select');
select.addEventListener('change', changeUrlLang);
const allLang = ['ua', 'en', 'it'];

//перенаправлення на url мови
function changeUrlLang() {
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLang() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    // console.log(hash);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#en';
        location.reload();
    }
    select.value = hash;
    // document.querySelector('.home-ua').innerHTML = langArr['home-ua'][hash];
    // document.querySelector('.about-ua').innerHTML = langArr['about-ua'][hash];
    for (let key in langArr) {
        let elem = document.querySelector('.ua-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }
    }
}


changeLang();