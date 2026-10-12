//ссылка на папку в облаке
const URL_TO_ASSETS = 'https://storage.yandexcloud.net/external-assets/tantum/farmland-journey/desktop';
const URL_TO_ASSETS_MOB = 'https://storage.yandexcloud.net/external-assets/tantum/farmland-journey/mobile';
const URL_TO_ASSETS_COMMON = 'https://storage.yandexcloud.net/external-assets/tantum/farmland-journey/common';
//откуда начинаем игру
const RESTART_ID = 'swamp-1';
//
const START_ID = 'start';
const LAST_SLIDE_ID = 'restart';

// ========================================================== переменные для работы  =======================================================

const isMobile = window.innerWidth <= 768;
//флаг
let isTransitioning = false;
//задержка
const delay = 800;
const delayAchiv = 1500;
const delayAchivNext = 100;
//массив ачивок
const achivementsArr = {
  tehn: 0,
  social: 0,
  survival: 0,
  secret: 0
};

// ========================================================== массивы данных для работы с сюжетом =======================================================

const SLIDES_CONFIG = [
  //   id: 'swamp-1',
  {
    id: 'start',
    text: 'Лисенок Танти отправляется на поиски редкого чуда. Впереди сложный путь — каждый твой выбор влияет на исход истории.',
    textCenter: true,
    image: `${URL_TO_ASSETS}/start/1.webp`,
    imageMob: `${URL_TO_ASSETS_MOB}/start/1.webp`,
    video: null,
    videoMob: null,
    buttons: [
      {
        text: 'В путь!',
        nextId: RESTART_ID,
        modifierClass: 'btn--green'
      }
    ],
    isDisclaimer: true,
    add: 'TV_DTC_Farmlend_Play_2026_09',
    showBanner: true,
    achiev: null
  },
  //   id: 'swamp-1',
  {
    id: RESTART_ID,
    text: 'Вечером с крыльца Танти замечает за горами зеленое мерцание.',
    textCenter: false,
    image: `${URL_TO_ASSETS}/start/2.webp`,
    imageMob: `${URL_TO_ASSETS_MOB}/start/2.webp`,
    video: null,
    videoMob: null,
    buttons: [
      {
        text: '',
        nextId: 'swamp-2',
        modifierClass: 'btn--inset'
      }
    ],
    add: 'TV_DTC_Farmlend_Play_2026_09',
    achiev: null
  },
  //  id: 'swamp-2',
  {
    id: 'swamp-2',
    text: 'Это редкое чудо бывает пару раз в году, и видно его лишь из скрытой долины.',
    textCenter: false,
    image: `${URL_TO_ASSETS}/start/3.webp`,
    imageMob: `${URL_TO_ASSETS_MOB}/start/3.webp`,
    video: null,
    videoMob: null,
    buttons: [
      {
        text: '',
        nextId: 'swamp-3',
        modifierClass: 'btn--inset'
      }
    ],
    achiev: null
  },
  // id: 'swamp-3',
  {
    id: 'swamp-3',
    text: 'Вооружившись туристическим рюкзаком, Танти решает своими глазами увидеть это чудо и отправляется в путь.',
    textCenter: false,
    image: `${URL_TO_ASSETS}/start/4.webp`,
    imageMob: `${URL_TO_ASSETS_MOB}/start/4.webp`,
    video: null,
    videoMob: null,
    buttons: [
      {
        text: '',
        nextId: 'swamp-4',
        modifierClass: 'btn--inset'
      }
    ],
    achiev: null,
    isDisclaimer: true,
    add: 'TV_DTC_Farmlend_Play_2026_09'
  },
  //  id: 'swamp-4',
  {
    id: 'swamp-4',
    text: 'Добраться до долины нужно к вечеру!',
    textCenter: true,
    image: `${URL_TO_ASSETS}/start/5.webp`,
    imageMob: `${URL_TO_ASSETS_MOB}/start/5.webp`,
    video: null,
    videoMob: null,
    buttons: [
      {
        text: 'Вперед!',
        nextId: 'swamp-choices',
        modifierClass: 'btn--green'
      }
    ],
    achiev: null
  },
  // id: 'swamp-choices',
  {
    id: 'swamp-choices',
    text: 'Впереди болото. Идти опасно. Что делать?',
    textCenter: true,
    image: `${URL_TO_ASSETS}/swamp/bg.webp`,
    imageMob: `${URL_TO_ASSETS_MOB}/swamp/bg.webp`,
    video: null,
    isChoices: true,
    videoMob: null,
    buttons: [
      {
        text: 'Осмотреть<br>растительность',
        nextId: 'swamp-choice-2-res',
        modifierClass: 'btn--img',
        btnImgDesc: `${URL_TO_ASSETS}/swamp/examine.webp`,
        btnImgMob: `${URL_TO_ASSETS_MOB}/swamp/examine.webp`
      },
      {
        text: 'Поделиться угощением<br>с птицей',
        nextId: 'swamp-choice-1-res',
        modifierClass: 'btn--img',
        btnImgDesc: `${URL_TO_ASSETS}/swamp/share.webp`,
        btnImgMob: `${URL_TO_ASSETS_MOB}/swamp/share.webp`
      },
      {
        text: 'Использовать треккинговую палку и навигацию',
        nextId: 'swamp-choice-3-res',
        modifierClass: 'btn--img',
        btnImgDesc: `${URL_TO_ASSETS}/swamp/phone.webp`,
        btnImgMob: `${URL_TO_ASSETS_MOB}/swamp/phone.webp`
      }
    ],
    achiev: null
  },

  // id: 'swamp-choice-1-res',
  {
    id: 'swamp-choice-1-res',
    text: 'Танти кидает печенье вороне. Там, где спокойно садится крупная птица, — земля точно выдержит. Танти осторожно идет за ней.',
    textCenter: false,
    image: `${URL_TO_ASSETS}/swamp/swamp.webp`,
    imageMob: `${URL_TO_ASSETS_MOB}/swamp/swamp.webp`,
    video: `${URL_TO_ASSETS}/swamp/share.mp4`,
    videoMob: `${URL_TO_ASSETS_MOB}/swamp/share.mp4`,
    buttons: [
      {
        text: '',
        nextId: 'steppe-choices',
        modifierClass: 'btn--inset'
      }
    ],
    achiev: ['social', 'secret']
  },

  // id: 'swamp-choice-2-res',
  {
    id: 'swamp-choice-2-res',
    text: 'Танти замечает островки с осокой и сосной. Это верный признак твердой почвы. По ним он уверенно переходит топь.',
    textCenter: false,
    image: `${URL_TO_ASSETS}/swamp/swamp.webp`,
    imageMob: `${URL_TO_ASSETS_MOB}/swamp/swamp.webp`,
    video: `${URL_TO_ASSETS}/swamp/examine.mp4`,
    videoMob: `${URL_TO_ASSETS_MOB}/swamp/examine.mp4`,
    buttons: [
      {
        text: '',
        nextId: 'steppe-choices',
        modifierClass: 'btn--inset'
      }
    ],
    achiev: ['survival']
  },

  // id: 'swamp-choice-3-res',
  {
    id: 'swamp-choice-3-res',
    text: 'Через спутниковую карту, Танти намечает маршрут по отмелям и каждый свой шаг прощупывает трекинговой палкой.',
    textCenter: false,
    image: `${URL_TO_ASSETS}/swamp/swamp.webp`,
    imageMob: `${URL_TO_ASSETS_MOB}/swamp/swamp.webp`,
    video: `${URL_TO_ASSETS}/swamp/phone.mp4`,
    videoMob: `${URL_TO_ASSETS_MOB}/swamp/phone.mp4`,
    buttons: [
      {
        text: '',
        nextId: 'steppe-choices',
        modifierClass: 'btn--inset'
      }
    ],
    achiev: ['tehn']
  },

  //=============================локация 2==============================================================
  //=============================локация 2==============================================================
  //=============================локация 2==============================================================

  // id: 'steppe-choices',
  {
    id: 'steppe-choices',
    text: 'Теперь — бескрайняя степь с высокой травой. Тропа совершенно затерялась нужно сориентироваться.',
    textCenter: true,
    image: `${URL_TO_ASSETS}/steppe/bg.webp`,
    imageMob: `${URL_TO_ASSETS_MOB}/steppe/bg.webp`,
    video: null,
    videoMob: null,
    isChoices: true,
    buttons: [
      {
        text: 'Сыграть на губной <br> гармошке',
        nextId: 'steppe-choice-3-res',
        modifierClass: 'btn--img',
        btnImgDesc: `${URL_TO_ASSETS}/steppe/harmonica.webp`,
        btnImgMob: `${URL_TO_ASSETS_MOB}/steppe/harmonica.webp`
      },
      {
        text: 'Найти степной <br>  муравейник',
        nextId: 'steppe-choice-2-res',
        modifierClass: 'btn--img',
        btnImgDesc: `${URL_TO_ASSETS}/steppe/anthill.webp`,
        btnImgMob: `${URL_TO_ASSETS_MOB}/steppe/anthill.webp`
      },
      {
        text: 'Использовать селфи-палку',
        nextId: 'steppe-choice-1-res',
        modifierClass: 'btn--img',
        btnImgDesc: `${URL_TO_ASSETS}/steppe/selfie.webp`,
        btnImgMob: `${URL_TO_ASSETS_MOB}/steppe/selfie.webp`
      }
    ],
    achiev: null
  },

  // id: 'steppe-choice-1',
  // {
  //   id: 'steppe-choice-1',
  //   text: '',
  //   textCenter: true,
  //   image: `${URL_TO_ASSETS}/img/swamp-3.webp`,
  //   imageMob: `${URL_TO_ASSETS}/img/swamp-3--mob.webp`,
  //   video: null,
  //   videoMob: null,
  //   buttons: [
  //     {
  //       text: 'Назад',
  //       nextId: 'steppe-choices',
  //       modifierClass: 'btn--back'
  //     },
  //     {
  //       text: 'Использовать',
  //       nextId: 'steppe-choice-1-res',
  //       modifierClass: 'btn--green'
  //     }
  //   ],
  //   achiev: null
  // },
  // id: 'steppe-choice-1-res',
  {
    id: 'steppe-choice-1-res',
    text: 'Подняв смартфон над травой, Танти делает пару снимков. Селфи-палка отлично помогает увидеть примятую тропу. Маршрут найден!',
    textCenter: false,
    image: `${URL_TO_ASSETS}/swamp/swamp.webp`,
    imageMob: `${URL_TO_ASSETS_MOB}/swamp/swamp.webp`,
    video: `${URL_TO_ASSETS}/steppe/selfie.mp4`,
    videoMob: `${URL_TO_ASSETS_MOB}/steppe/selfie.mp4`,
    buttons: [
      {
        text: '',
        nextId: 'pass-choices',
        modifierClass: 'btn--inset'
      }
    ],
    achiev: ['tehn', 'secret']
  },

  // id: 'steppe-choice-2-res',
  {
    id: 'steppe-choice-2-res',
    text: 'Танти находит муравейник. Его южная сторона всегда более пологая. Определив стороны света, Танти выходит в нужном направлении.',
    textCenter: false,
    image: `${URL_TO_ASSETS}/swamp/swamp.webp`,
    imageMob: `${URL_TO_ASSETS_MOB}/swamp/swamp.webp`,
    video: `${URL_TO_ASSETS}/steppe/anthill.mp4`,
    videoMob: `${URL_TO_ASSETS_MOB}/steppe/anthill.mp4`,
    buttons: [
      {
        text: '',
        nextId: 'pass-choices',
        modifierClass: 'btn--inset'
      }
    ],
    achiev: ['survival']
  },

  // id: 'steppe-choice-3-res',
  {
    id: 'steppe-choice-3-res',
    text: 'Звонкая мелодия разносится по степи. На звук выходит пастушья собака и радостно выводит музыканта к натоптанной дороге.',
    textCenter: false,
    image: `${URL_TO_ASSETS}/swamp/swamp.webp`,
    imageMob: `${URL_TO_ASSETS_MOB}/swamp/swamp.webp`,
    video: `${URL_TO_ASSETS}/steppe/harmonica.mp4`,
    videoMob: `${URL_TO_ASSETS_MOB}/steppe/harmonica.mp4`,
    buttons: [
      {
        text: '',
        nextId: 'pass-choices',
        modifierClass: 'btn--inset'
      }
    ],
    achiev: ['social']
  },
  //=============================локация 3 ==============================================================
  //=============================локация 3 ==============================================================
  //=============================локация 3 ==============================================================

  // id: 'pass-choices',
  {
    id: 'pass-choices',
    text: 'Цель уже близко, но солнце клонится к закату. Впереди крутой участок с опасной осыпью.',
    textCenter: true,
    image: `${URL_TO_ASSETS}/mountains/bg.webp`,
    imageMob: `${URL_TO_ASSETS_MOB}/mountains/bg.webp`,
    video: null,
    isChoices: true,
    videoMob: null,
    buttons: [
      {
        text: 'Довериться местным <br/> обитателям',
        nextId: 'pass-choice-1-res',
        modifierClass: 'btn--img',
        btnImgDesc: `${URL_TO_ASSETS}/mountains/locals.webp`,
        btnImgMob: `${URL_TO_ASSETS_MOB}/mountains/locals.webp`
      },
      {
        text: 'Использовать оптику <br/> смартфона',
        nextId: 'pass-choice-2-res',
        modifierClass: 'btn--img',
        btnImgDesc: `${URL_TO_ASSETS}/mountains/phone.webp`,
        btnImgMob: `${URL_TO_ASSETS_MOB}/mountains/phone.webp`
      },
      {
        text: 'Внимательно изучить камни',
        nextId: 'pass-choice-3-res',
        modifierClass: 'btn--img',
        btnImgDesc: `${URL_TO_ASSETS}/mountains/rocks.webp`,
        btnImgMob: `${URL_TO_ASSETS_MOB}/mountains/rocks.webp`
      }
    ],
    achiev: null
  },

  // id: 'pass-choice-1-res',
  {
    id: 'pass-choice-1-res',
    text: 'Танти замечает горного козлика. Животные инстинктивно знают прочные камни. Танти безопасно спускается, ступая след в след.',
    textCenter: false,
    image: `${URL_TO_ASSETS}/swamp/swamp.webp`,
    imageMob: `${URL_TO_ASSETS_MOB}/swamp/swamp.webp`,
    video: `${URL_TO_ASSETS}/mountains/locals.mp4`,
    videoMob: `${URL_TO_ASSETS_MOB}/mountains/locals.mp4`,
    buttons: [
      {
        text: '',
        nextId: 'calc',
        modifierClass: 'btn--inset'
      }
    ],
    achiev: ['social']
  },

  // id: 'pass-choice-2-res',
  {
    id: 'pass-choice-2-res',
    text: 'Через камеру смартфона Танти внимательно изучает склон, находит безопасную полосу монолитной породы и спускается по ней.',
    textCenter: false,
    image: `${URL_TO_ASSETS}/swamp/swamp.webp`,
    imageMob: `${URL_TO_ASSETS_MOB}/swamp/swamp.webp`,
    video: `${URL_TO_ASSETS}/mountains/phone.mp4`,
    videoMob: `${URL_TO_ASSETS_MOB}/mountains/phone.mp4`,
    buttons: [
      {
        text: '',
        nextId: 'calc',
        modifierClass: 'btn--inset'
      }
    ],
    achiev: ['tehn']
  },

  // id: 'pass-choice-3-res',
  {
    id: 'pass-choice-3-res',
    text: 'На неподвижных валунах всегда успевает вырасти лишайник. Танти ступает только по замшелым камням, избегая свежей осыпи.',
    textCenter: false,
    image: `${URL_TO_ASSETS}/swamp/swamp.webp`,
    imageMob: `${URL_TO_ASSETS_MOB}/swamp/swamp.webp`,
    video: `${URL_TO_ASSETS}/mountains/rocks.mp4`,
    videoMob: `${URL_TO_ASSETS_MOB}/mountains/rocks.mp4`,
    buttons: [
      {
        text: '',
        nextId: 'calc',
        modifierClass: 'btn--inset'
      }
    ],
    achiev: ['survival', 'secret']
  },

  //============================= подсчет  ==============================================================
  //============================= подсчет ==============================================================
  //============================= подсчет ==============================================================
  // id: 'calc',
  {
    id: 'calc',
    text: 'Позади остались болота, степи и крутые горы. Танти добрался до заветной долины! Твои решения в пути определили, как пройдет этот финал!',
    textCenter: true,
    image: `${URL_TO_ASSETS}/final/1.webp`,
    imageMob: `${URL_TO_ASSETS_MOB}/final/1.webp`,
    video: null,
    videoMob: null,
    buttons: [
      {
        text: 'Смотреть финал',
        nextId: '',
        modifierClass: 'btn--green'
      }
    ],
    achiev: null
  },
  //=============================конец 1  ==============================================================
  //=============================конец 1 ==============================================================
  //=============================конец 1 ==============================================================

  // id: 'end1-1',
  {
    id: 'end1-1',
    text: 'Светлячки слишком высоко — Танти включает фонарь и направляет луч на поляну. Приняв свет за сородича, светлячки спускаются к лисёнку, образуя мерцающий купол.',
    textCenter: true,
    image: `${URL_TO_ASSETS}/swamp/swamp.webp`,
    imageMob: `${URL_TO_ASSETS_MOB}/swamp/swamp.webp`,
    video: `${URL_TO_ASSETS}/final/2/tech.mp4`,
    videoMob: `${URL_TO_ASSETS_MOB}/final/2/tech.mp4`,
    buttons: [
      {
        text: '',
        nextId: 'restart',
        modifierClass: 'btn--inset'
      }
    ],
    achiev: null
  },

  //=============================конец 2  ==============================================================
  //=============================конец 2 ==============================================================
  //=============================конец 2 ==============================================================

  // id: 'end2-1',
  {
    id: 'end2-1',
    text: 'Танти выходит на поляну не один — за ним увязались его новые друзья. Светлячки совершенно не боятся их, принимая Танти за «своего», и кружатся прямо вокруг уютной компании.',
    textCenter: true,
    image: `${URL_TO_ASSETS}/swamp/swamp.webp`,
    imageMob: `${URL_TO_ASSETS_MOB}/swamp/swamp.webp`,
    video: `${URL_TO_ASSETS}/final/2/social.mp4`,
    videoMob: `${URL_TO_ASSETS_MOB}/final/2/social.mp4`,
    buttons: [
      {
        text: '',
        nextId: 'restart',
        modifierClass: 'btn--inset'
      }
    ],
    achiev: null
  },
  //=============================конец 3  ==============================================================
  //=============================конец 3 ==============================================================
  //=============================конец 3 ==============================================================

  // id: 'end3-1',
  {
    id: 'end3-1',
    text: 'У кромки леса Танти находит скрытую тропу на секретный холм. Оттуда открывается лучший, недоступный обычным туристам вид на бескрайнее море светящихся огней.',
    textCenter: true,
    image: `${URL_TO_ASSETS}/swamp/swamp.webp`,
    imageMob: `${URL_TO_ASSETS_MOB}/swamp/swamp.webp`,
    video: `${URL_TO_ASSETS}/final/2/surv.mp4`,
    videoMob: `${URL_TO_ASSETS_MOB}/final/2/surv.mp4`,
    buttons: [
      {
        text: '',
        nextId: 'restart',
        modifierClass: 'btn--inset'
      }
    ],
    achiev: null
  },
  //=============================конец 4  ==============================================================
  //=============================конец 4 ==============================================================
  //=============================конец 4 ==============================================================

  // id: 'end4-1',
  {
    id: 'end4-1',
    text: 'Танти наслаждается мерцанием и находит свой идеальный баланс: пьет чай из собранных трав, угощает бурундука печеньем и делает красивое селфи на фоне светлячков. Абсолютная гармония!',
    textCenter: true,
    image: `${URL_TO_ASSETS}/swamp/swamp.webp`,
    imageMob: `${URL_TO_ASSETS_MOB}/swamp/swamp.webp`,
    video: `${URL_TO_ASSETS}/final/2/balance.mp4`,
    videoMob: `${URL_TO_ASSETS_MOB}/final/2/balance.mp4`,
    buttons: [
      {
        text: '',
        nextId: 'restart',
        modifierClass: 'btn--inset'
      }
    ],
    achiev: null
  },
  //=============================конец 5  ==============================================================
  //=============================конец 5 ==============================================================
  //=============================конец 5 ==============================================================

  // id: 'end5-1',
  {
    id: 'end5-1',
    text: 'Танти хочет сделать фото. Вдруг ворона садится прямо на край селфи-палки, и светлячки начинают мигать в едином ритме с крыльями. Крупный светлячок доверчиво садится Танти на нос.',
    textCenter: true,
    image: `${URL_TO_ASSETS}/swamp/swamp.webp`,
    imageMob: `${URL_TO_ASSETS_MOB}/swamp/swamp.webp`,
    video: `${URL_TO_ASSETS}/final/2/secret.mp4`,
    videoMob: `${URL_TO_ASSETS_MOB}/final/2/secret.mp4`,
    buttons: [
      {
        text: '',
        nextId: 'restart',
        modifierClass: 'btn--inset'
      }
    ],
    achiev: null
  },
  //============================= рестарт  ==============================================================
  //============================= рестарт ==============================================================
  //============================= рестарт ==============================================================

  // id: 'restart',
  {
    id: 'restart',
    text: 'Сыграй еще раз другим стилем, чтобы открыть остальные концовки.',
    textCenter: true,
    image: `${URL_TO_ASSETS}/final/3.webp`,
    imageMob: `${URL_TO_ASSETS_MOB}/final/3.webp`,
    video: null,
    videoMob: null,
    buttons: [
      {
        text: 'Начать игру',
        nextId: RESTART_ID,
        modifierClass: 'btn--green'
      }
    ],
    achiev: null,
    isDisclaimer: true,
    add: 'TV_DTC_Farmlend_Play_2026_09',
    showBanner: true
  }
];

const ACHIEVEMENTS_CONFIG = {
  tehn: { title: 'технологиям', icon: `${URL_TO_ASSETS_COMMON}/tehn.webp` },
  social: { title: 'общению', icon: `${URL_TO_ASSETS_COMMON}/social.webp` },
  survival: { title: 'выживанию', icon: `${URL_TO_ASSETS_COMMON}/survival.webp` }
};

const ENDINGS_CONFIG = {
  'end1-1': {
    title: 'Изобретатель',
    _nextId: 'end1-1',
    get nextId() {
      return this._nextId;
    },
    set nextId(value) {
      this._nextId = value;
    }
  },
  'end2-1': {
    title: 'Душа леса',
    nextId: 'end2-1'
  },
  'end3-1': {
    title: 'Истинный следопыт',
    nextId: 'end3-1'
  },
  'end4-1': {
    title: 'Гармоничный искатель',
    nextId: 'end4-1'
  },
  'end5-1': {
    title: 'Мастер скрытых троп',
    nextId: 'end5-1'
  }
};

const BACKPACK_CONFIG = {
  icon: `${URL_TO_ASSETS_COMMON}/backpack.webp`,
  backbackground: `${URL_TO_ASSETS_COMMON}/backpackBg.webp`,
  disclaimerDesk: `${URL_TO_ASSETS_COMMON}/disclaimerDesk.svg`,
  disclaimerMob: `${URL_TO_ASSETS_COMMON}/disclaimerMob.svg`,
  add: 'TV_DTC_Farmlend_Play_2026_09',
  picture: `${URL_TO_ASSETS_COMMON}/backpackMain.webp`,
  title: 'Ваш рюкзак',
  desc: ' Здесь находятся предметы, которые могут помочь Танти в своем путешествии.',
  btnText: 'Продолжить путешествие'
};

const BANNER_CONFIG = {
  image: `${URL_TO_ASSETS_COMMON}/banner.webp`,
  url: 'https://app.farmlend.ru/'
};

// ========================================================== начальное состояние игры ====================================================================

const gameState = {
  currentSlideId: START_ID,
  achievements: { ...achivementsArr }
};

// ================================================================== логика игры =========================================================================

function initGameEngine() {
  const slidesBox = document.querySelector('.modal-game__slides-box');
  if (!slidesBox) return;

  slidesBox.addEventListener('click', setupEvents);
  renderAllSlides();
  showBackpackBlock();

  // ================================================================== рендер всех слайдов ================================================================
  // ================================================================== рендер всех слайдов ================================================================
  // ================================================================== рендер всех слайдов ================================================================
  function renderAllSlides() {
    slidesBox.innerHTML = SLIDES_CONFIG.map((slide) => {
      const isActive = slide.id === gameState.currentSlideId ? 'slide--active' : '';
      const isFirstSlide = slide.id === START_ID;
      const decodingMode = isFirstSlide ? 'sync' : 'async';
      const isChoices = slide.isChoices;
      const isDisclaimer = slide.isDisclaimer;

      const buttonsHtml = slide.buttons
        ? slide.buttons
            .map(
              (btn, index) => `
              <button class="slide__btn ${btn.modifierClass || ''}" data-index="${index}">
               <span> ${btn.text}</span>                
               ${
                 slide.isChoices
                   ? `<picture>
                        <source srcset="${btn.btnImgMob}" media="(max-width: 768px)" />
                        <img src="${btn.btnImgDesc || ''}" alt="" decoding=${decodingMode} fetchpriority="high"/>
                      </picture>`
                   : ''
               } 
              </button>
            `
            )
            .join('')
        : '';

      const centerClass = slide.textCenter ? 'slide__text--center' : '';

      const svgHtml = slide.textCenter
        ? ''
        : `<div class="slide__arr">
          <svg width="64" height="71" viewBox="0 0 64 71" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M37.4879 35.4796L10.0785 69.6621L0 61.5806L20.9284 35.4796L0 9.37865L10.0785 1.29712L37.4879 35.4796ZM63.0446 35.4796L35.6352 69.6621L25.5567 61.5806L46.485 35.4796L25.5567 9.37865L35.6352 1.29712L63.0446 35.4796Z" fill="url(#paint0_linear_5001_27637)" stroke="white" stroke-opacity="0.5" stroke-width="1.84556"/>
            <defs>
              <linearGradient id="paint0_linear_5001_27637" x1="42.6808" y1="5.33788" x2="42.6808" y2="92.5015" gradientUnits="userSpaceOnUse">
                <stop stop-color="#459F07" />
                <stop offset="1" stop-color="#193903" />
              </linearGradient>
            </defs>
          </svg>
        </div>`;

      // const isVideo = slide.video || slide.videoMob;
      const video = isMobile ? slide.videoMob : slide.video;

      // ИСПРАВЛЕНО: preload="metadata" вместо preload="none"
      const bg = video
        ? `<video width="100%" height="100%" preload="metadata" loop muted playsinline poster="${slide.image || ''}">
          <source src="${video}" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
         </video>`
        : `<picture>
          ${slide.imageMob ? `<source srcset="${slide.imageMob}" media="(max-width: 768px)" />` : ''}
          <img src="${slide.image || ''}" alt="" decoding=${decodingMode} fetchpriority="high"/>
        </picture>`;

      const bannerHtml = slide.showBanner
        ? `<a class="slide__banner" href="${BANNER_CONFIG.url}" target="_blank" rel="noopener noreferrer">
            <img src="${BANNER_CONFIG.image}" alt="" decoding=${decodingMode} fetchpriority="high" />
          </a>`
        : '';

      const disclaimerClass = isDisclaimer ? 'slide--hasDisclaimer' : '';

      return `
      <div class="slide ${isActive} ${disclaimerClass}" data-id="${slide.id}">
        ${bannerHtml}
        <div class="slide__content ${isChoices ? 'slide__content--isChoices' : ''} ${isDisclaimer ? 'slide__content--isDisclaimer' : ''}">
          <div class="slide__text-box">
            <p class="slide__text ${isChoices ? 'slide__text--isChoices' : ''} ${centerClass}">${slide.text || ''}</p>
            ${svgHtml}
          </div>
          <div class="slide__btn-box ${isChoices ? 'slide__btn-box--isChoices' : ''}">
            ${buttonsHtml}
          </div>
        </div>

        ${
          isDisclaimer
            ? `
           <div class="slide__disclaimer-box">
         ${slide.add ? `<p class="slide__disclaimer-add">${slide.add}</p>` : ''}
         <div class="slide__disclaimer-wrapp">
           <p class="slide__disclaimer-age">
           <svg width="61" height="51" viewBox="0 0 61 51" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g opacity="0.8">
    <path d="M6.83265 4.33469L0 8.44898V4.40816L6.83265 0.293878H11.0204V49.8857H6.83265V4.33469Z" fill="white" />
    <path d="M35.1717 8.44898V17.1184C35.1717 20.6939 33.6534 23.1918 30.6166 24.6122C33.6534 26.0326 35.1717 28.5061 35.1717 32.0326V41.8041C35.1717 44.351 34.3146 46.3837 32.6003 47.902C30.935 49.4204 28.8044 50.1796 26.2085 50.1796C23.6126 50.1796 21.4819 49.4204 19.8166 47.902C18.1513 46.3837 17.3187 44.351 17.3187 41.8041V32.0326C17.3187 28.4571 18.8126 25.9837 21.8003 24.6122C18.8126 23.2408 17.3187 20.7429 17.3187 17.1184V8.44898C17.3187 5.90204 18.1513 3.86939 19.8166 2.35102C21.4819 0.783673 23.6126 0 26.2085 0C28.8044 0 30.935 0.783673 32.6003 2.35102C34.3146 3.86939 35.1717 5.90204 35.1717 8.44898ZM21.5064 8.44898V18C21.5064 19.4694 21.9473 20.6449 22.8289 21.5265C23.7105 22.4082 24.837 22.849 26.2085 22.849C27.5799 22.849 28.7064 22.4082 29.5881 21.5265C30.5187 20.6449 30.984 19.4694 30.984 18V8.44898C30.984 6.97959 30.5187 5.80408 29.5881 4.92245C28.7064 3.99183 27.5799 3.52653 26.2085 3.52653C24.837 3.52653 23.7105 3.99183 22.8289 4.92245C21.9473 5.80408 21.5064 6.97959 21.5064 8.44898ZM21.5064 31.298V41.8041C21.5064 43.2735 21.9473 44.449 22.8289 45.3306C23.7105 46.2122 24.837 46.6531 26.2085 46.6531C27.5799 46.6531 28.7064 46.2122 29.5881 45.3306C30.5187 44.449 30.984 43.2735 30.984 41.8041V31.298C30.984 29.8286 30.5187 28.6531 29.5881 27.7714C28.7064 26.8408 27.5799 26.3755 26.2085 26.3755C24.837 26.3755 23.7105 26.8408 22.8289 27.7714C21.9473 28.6531 21.5064 29.8286 21.5064 31.298Z" fill="white" />
    <path d="M48.6379 28.8H40.3358V25.2735H48.6379V16.5306H52.1644V25.2735H60.6134V28.8H52.1644V37.5429H48.6379V28.8Z" fill="white" />
  </g>
</svg>
           
           </p>
          <picture class="slide__disclaimer">
            <source srcset="${BACKPACK_CONFIG.disclaimerMob}" media="(max-width: 768px)" />
            <img src="${BACKPACK_CONFIG.disclaimerDesk}" alt="" fetchpriority="high" />
          </picture>
         </div>
     
      </div>`
            : ` ${slide.add ? `<p class="slide__disclaimer-add slide__disclaimer-add--abs">${slide.add}</p>` : ''}`
        }
       
        <div class="slide__bg">
          ${bg}
        </div>
      </div>
    `;
    }).join('');

    // Запускаем видео на стартовом слайде, если оно там есть
    const activeSlide = slidesBox.querySelector('.slide--active');
    handleSlideVideo(activeSlide, true);
  }

  // ===================================================================== рассчет концовки ================================================================
  // ===================================================================== рассчет концовки ================================================================
  // ===================================================================== рассчет концовки ================================================================

  function calculateEnding(achievs) {
    if (achievs.secret >= 3) {
      return ENDINGS_CONFIG['end5-1'];
    }
    if (achievs.survival >= 2) {
      return ENDINGS_CONFIG['end3-1'];
    }
    if (achievs.social >= 2) {
      return ENDINGS_CONFIG['end2-1'];
    }
    if (achievs.tehn >= 2) {
      return ENDINGS_CONFIG['end1-1'];
    }
    return ENDINGS_CONFIG['end4-1'];
  }

  // ============================================================= рендер всего, что не касается слайдов =====================================================
  // ============================================================= рендер всего, что не касается слайдов =====================================================
  // ============================================================= рендер всего, что не касается слайдов =====================================================

  function showAchievementOverlay(achievArray, nextId) {
    const modalContent = document.querySelector('.modal-game__container');
    if (!modalContent || !Array.isArray(achievArray) || achievArray.length === 0) return;

    const mainAchievKey = achievArray[0];

    const info = ACHIEVEMENTS_CONFIG[mainAchievKey];

    const overlay = document.createElement('div');
    overlay.className = 'achiev-overlay';
    overlay.innerHTML = `
        <div class="achiev-overlay__card">
          <div class="achiev-overlay__body">
            <span>+1 к</span>
            <div class="achiev-overlay__img">
                    <img src="${info.icon}" alt="${info.title}"  />
            </div>
            <span>${info.title}</span>
          </div>
        </div>
      `;

    modalContent.appendChild(overlay);

    requestAnimationFrame(() => {
      overlay.classList.add('achiev-overlay--show');
    });

    setTimeout(() => {
      overlay.classList.remove('achiev-overlay--show');
      setTimeout(() => overlay.remove(), delay);
      setTimeout(() => changeSlideWithAnimation(nextId), delayAchivNext);
    }, delayAchiv);
  }

  function showEndingOverlay(endingData, achievements) {
    const modalContent = document.querySelector('.modal-game__container');
    if (!modalContent || !endingData) return;

    const overlay = document.createElement('div');
    overlay.className = 'ending-overlay';

    const activeAchievements = Object.entries(achievements).filter(([key, count]) => key !== 'secret' && count > 0);

    const counterBlocks =
      activeAchievements.length > 0
        ? activeAchievements
            .map(([key, count]) => {
              const info = ACHIEVEMENTS_CONFIG[key] || { title: key, icon: '' };
              return `
                <div class="ending-overlay__badge" title="${info.title}">
                  <span class="ending-overlay__count">${count}</span>
                  <div class="ending-overlay__badge-img">
                  <img src="${info.icon}" alt="${info.title}" />
                  </div>
                </div>
              `;
            })
            .join('')
        : '';

    overlay.innerHTML = `
    <div class="ending-overlay__card">
      <div class="ending-overlay__bg">
        <img src="${URL_TO_ASSETS_COMMON}/endAchBg.webp" alt="" />
      </div>

          <div class="ending-overlay__content">
      <div class="ending-overlay__achive">
        <div class="ending-overlay__img">
          <img src="${URL_TO_ASSETS_COMMON}/endAchImg.webp" alt="${endingData.title}" />
        </div>

        <div class="ending-overlay__body">
          <div class="ending-overlay__body-inner">
            <div class="ending-overlay__head">
              <p class="ending-overlay__subtitle">Твой стиль путешествия:</p>
              <p class="ending-overlay__title">${endingData.title}!</p>
            </div>
            <div class="ending-overlay__result">
              <p class="ending-overlay__result-title">Твои решения:</p>
              <div class="ending-overlay__counter">${counterBlocks}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="ending-overlay__btn-box">
        <div class="ending-overlay__end">
          <div class="ending-overlay__end-img">
            <img src="${URL_TO_ASSETS_COMMON}/prize.webp" alt="${endingData.title}" />
          </div>
          <p class="ending-overlay__end-text">Открыта новая концовка!</p>
        </div>

        <div class="slide__btn btn--green">Отлично!</div>
      </div>
    </div>
    </div>
      `;

    modalContent.appendChild(overlay);

    requestAnimationFrame(() => {
      overlay.classList.add('ending-overlay--show');
    });

    overlay.addEventListener('click', (e) => {
      // Проверяем, был ли клик по кнопке .slide__btn или её дочерним элементам
      const btn = e.target.closest('.slide__btn');
      if (!btn) return; // Если кликнули мимо кнопки — ничего не делаем

      e.stopPropagation();
      isTransitioning = false;
      overlay.classList.remove('ending-overlay--show');

      setTimeout(() => {
        changeSlideWithAnimation(endingData.nextId);
        overlay.remove();
      }, 300);
    });
  }

  function showBackpackBlock() {
    const modalContainer = document.querySelector('.modal-game__container');
    if (!modalContainer) return;

    backpackBadge = document.createElement('button');
    backpackBadge.className = 'backpack-badge';
    modalContainer.appendChild(backpackBadge);

    backpackBadge.innerHTML = `
      <div class="backpack-badge__img">
        <img src="${BACKPACK_CONFIG.icon}" alt="рюкзак" />
      </div>
    `;

    backpackModal = document.createElement('div');
    backpackModal.className = 'backpack-modal';
    modalContainer.appendChild(backpackModal);

    backpackModal.innerHTML = `
      <div class="backpack-modal__inner">
      <div class="backpack-modal__bg">
        <img decoding= async' src="${BACKPACK_CONFIG.backbackground}" alt="" />
      </div>

      <div class="backpack-modal__body">
        <div class="backpack-modal__content">
          <div class="backpack-modal__img">
            <img decoding= async' src="${BACKPACK_CONFIG.picture}" alt="" />
          </div>
          <div class="backpack-modal__info">
            <div class="backpack-modal__info-body">
              <p class="backpack-modal__title">${BACKPACK_CONFIG.title}</p>
              <p class="backpack-modal__desc">${BACKPACK_CONFIG.desc}</p>
            </div>
          </div>
        </div>
        <button class="backpack-modal__btn btn--green">${BACKPACK_CONFIG.btnText}</button>
      </div>

      <div class="backpack-modal__disclaimer-box">
      
       

          

        <p class="slide__disclaimer-add">${BACKPACK_CONFIG.add}</p>
         <div class="slide__disclaimer-wrapp">
           <p class="slide__disclaimer-age">
           <svg width="61" height="51" viewBox="0 0 61 51" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g opacity="0.8">
    <path d="M6.83265 4.33469L0 8.44898V4.40816L6.83265 0.293878H11.0204V49.8857H6.83265V4.33469Z" fill="white" />
    <path d="M35.1717 8.44898V17.1184C35.1717 20.6939 33.6534 23.1918 30.6166 24.6122C33.6534 26.0326 35.1717 28.5061 35.1717 32.0326V41.8041C35.1717 44.351 34.3146 46.3837 32.6003 47.902C30.935 49.4204 28.8044 50.1796 26.2085 50.1796C23.6126 50.1796 21.4819 49.4204 19.8166 47.902C18.1513 46.3837 17.3187 44.351 17.3187 41.8041V32.0326C17.3187 28.4571 18.8126 25.9837 21.8003 24.6122C18.8126 23.2408 17.3187 20.7429 17.3187 17.1184V8.44898C17.3187 5.90204 18.1513 3.86939 19.8166 2.35102C21.4819 0.783673 23.6126 0 26.2085 0C28.8044 0 30.935 0.783673 32.6003 2.35102C34.3146 3.86939 35.1717 5.90204 35.1717 8.44898ZM21.5064 8.44898V18C21.5064 19.4694 21.9473 20.6449 22.8289 21.5265C23.7105 22.4082 24.837 22.849 26.2085 22.849C27.5799 22.849 28.7064 22.4082 29.5881 21.5265C30.5187 20.6449 30.984 19.4694 30.984 18V8.44898C30.984 6.97959 30.5187 5.80408 29.5881 4.92245C28.7064 3.99183 27.5799 3.52653 26.2085 3.52653C24.837 3.52653 23.7105 3.99183 22.8289 4.92245C21.9473 5.80408 21.5064 6.97959 21.5064 8.44898ZM21.5064 31.298V41.8041C21.5064 43.2735 21.9473 44.449 22.8289 45.3306C23.7105 46.2122 24.837 46.6531 26.2085 46.6531C27.5799 46.6531 28.7064 46.2122 29.5881 45.3306C30.5187 44.449 30.984 43.2735 30.984 41.8041V31.298C30.984 29.8286 30.5187 28.6531 29.5881 27.7714C28.7064 26.8408 27.5799 26.3755 26.2085 26.3755C24.837 26.3755 23.7105 26.8408 22.8289 27.7714C21.9473 28.6531 21.5064 29.8286 21.5064 31.298Z" fill="white" />
    <path d="M48.6379 28.8H40.3358V25.2735H48.6379V16.5306H52.1644V25.2735H60.6134V28.8H52.1644V37.5429H48.6379V28.8Z" fill="white" />
  </g>
</svg>
           
           </p>
          <picture class="slide__disclaimer">
           <source srcset="${BACKPACK_CONFIG.disclaimerMob}" media="(max-width: 768px)" />
            <img src="${BACKPACK_CONFIG.disclaimerDesk}" alt="" fetchpriority="high" />
          </picture>
      </div>
    </div>
    `;

    // Функции управления модалкой
    function openModal() {
      backpackModal.classList.add('isOpen');
    }

    function closeModal() {
      backpackModal.classList.remove('isOpen');
    }

    // Вешаем слушатели событий через addEventListener
    backpackBadge.addEventListener('click', openModal);

    const closeBtn = backpackModal.querySelector('.backpack-modal__btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }

    updateGameUiVisibility();
  }

  function isEndingSlide(slideId) {
    return slideId in ENDINGS_CONFIG;
  }

  function updateGameUiVisibility() {
    const modalContainer = document.querySelector('.modal-game__container');
    if (!modalContainer) return;

    const slideId = gameState.currentSlideId;
    const isEnding = isEndingSlide(slideId);
    const showBackpack = slideId !== START_ID && slideId !== LAST_SLIDE_ID && !isEnding;
    const showCounter = slideId !== LAST_SLIDE_ID && !isEnding;

    const badge = modalContainer.querySelector('.backpack-badge');
    if (badge) {
      badge.classList.toggle('game-ui--hidden', !showBackpack);
    }

    const modal = modalContainer.querySelector('.backpack-modal');
    if (modal && !showBackpack) {
      modal.classList.remove('isOpen');
    }

    const counterBlock = modalContainer.querySelector('.achiev-counter ');
    if (counterBlock) {
      counterBlock.classList.toggle('game-ui--hidden', !showCounter);
    }
  }

  function showCounterBlock() {
    const modalContainer = document.querySelector('.modal-game__container');
    if (!modalContainer) return;

    let counterBlock = modalContainer.querySelector('.achiev-counter ');
    if (!counterBlock) {
      counterBlock = document.createElement('div');
      counterBlock.className = 'achiev-counter ';
      modalContainer.appendChild(counterBlock);
    }

    const activeAchievements = Object.entries(gameState.achievements).filter(([key, count]) => key !== 'secret' && count > 0);

    if (activeAchievements.length === 0) {
      counterBlock.innerHTML = '';
      return;
    }

    counterBlock.innerHTML = activeAchievements
      .map(([key, count]) => {
        const info = ACHIEVEMENTS_CONFIG[key] || { title: key, icon: '' };
        return `
            <div class="achiev-counter__badge" title="${info.title}">
              <span class="achiev-counter__count">${count}</span>
              <div class="achiev-counter__img">
                <img src="${info.icon}" alt="${info.title}"  />
              </div>
            </div>
          `;
      })
      .join('');

    updateGameUiVisibility();
  }

  // ================================================================вспомогательные функции:================================================================
  // ================================================================вспомогательные функции:================================================================
  // ================================================================вспомогательные функции:================================================================

  // Получение текущего слайда по айдишнику
  function getSlideById(id) {
    return SLIDES_CONFIG.find((slide) => slide.id === id);
  }

  // запуск/остановка видео
  function handleSlideVideo(slideEl, shouldPlay) {
    if (!slideEl) return;
    const video = slideEl.querySelector('video');
    if (!video) return;

    if (shouldPlay) {
      video.currentTime = 0;
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }

  // обработка выбора
  function handleChoice(btnData, currentSlide) {
    if (btnData.nextId === RESTART_ID) {
      resetGameState();
      return;
    }

    if (currentSlide.achiev) {
      showAchievementOverlay(currentSlide.achiev, btnData.nextId);
      unlockAchievement(currentSlide.achiev);
      // setTimeout(() => {
      //   changeSlideWithAnimation(btnData.nextId);
      // }, delay);
      return;
    }

    if (btnData.nextId) {
      changeSlideWithAnimation(btnData.nextId);
    }
  }

  // Клик по кнопкам/слайдам для перехода
  function setupEvents(e) {
    if (isTransitioning) return;

    const btn = e.target.closest('.slide__btn');
    if (!btn) return;

    const currentSlide = getSlideById(gameState.currentSlideId);
    if (!currentSlide) return;

    const btnIndex = btn.dataset.index;
    const btnData = currentSlide.buttons[btnIndex];
    if (!btnData) return;

    if (currentSlide.id === 'calc') {
      const endingData = calculateEnding(gameState.achievements);
      showEndingOverlay(endingData, gameState.achievements);
      return;
    }

    handleChoice(btnData, currentSlide);
  }

  // анимация смены слайда
  function changeSlideWithAnimation(nextId) {
    if (isTransitioning) return;

    const currentSlideEl = slidesBox.querySelector('.slide--active');
    const nextSlideEl = slidesBox.querySelector(`[data-id="${nextId}"]`);

    if (!nextSlideEl || currentSlideEl === nextSlideEl) return;

    isTransitioning = true;

    nextSlideEl.classList.add('slide--active');
    gameState.currentSlideId = nextId;
    updateGameUiVisibility();

    // Запускаем видео на НОВОМ слайде
    handleSlideVideo(nextSlideEl, true);

    setTimeout(() => {
      if (currentSlideEl) {
        currentSlideEl.classList.remove('slide--active');
        currentSlideEl.style.zIndex = ''; // сбрасываем z-index
        // Останавливаем видео на СТАРОМ слайде
        handleSlideVideo(currentSlideEl, false);
      }
      nextSlideEl.style.zIndex = ''; // сбрасываем z-index
      isTransitioning = false;
    }, 300);
  }

  // начало игры заново
  function resetGameState() {
    gameState.achievements = { ...achivementsArr };
    gameState.currentSlideId = RESTART_ID;

    showCounterBlock();
    updateGameUiVisibility();

    const modalContent = document.querySelector('.modal-game__modal');
    if (modalContent) {
      const overlays = modalContent.querySelectorAll('.modal-game__achievement-overlay, .modal-game__ending-overlay');
      overlays.forEach((el) => el.remove());
    }

    const allSlides = slidesBox.querySelectorAll('.slide');
    allSlides.forEach((slide) => {
      if (slide.dataset.id === RESTART_ID) {
        slide.classList.add('slide--active');
        handleSlideVideo(slide, true);
      } else {
        slide.classList.remove('slide--active');
        handleSlideVideo(slide, false);
      }
    });

    isTransitioning = false;
  }

  //обновление каунтера

  function unlockAchievement(achiev) {
    if (!Array.isArray(achiev)) return;

    achiev.forEach((key) => {
      if (gameState.achievements[key] !== undefined) {
        gameState.achievements[key] += 1;
      }
    });

    setTimeout(() => {
      showCounterBlock();
    }, delayAchiv);
  }
}
// =============================================================== предпрогрузка картинок ================================================================

function preloadOverlayAssets() {
  const overlayUrls = new Set([
    ...Object.values(ACHIEVEMENTS_CONFIG).map((item) => item.icon),
    `${URL_TO_ASSETS_COMMON}/endAchBg.webp`,
    `${URL_TO_ASSETS_COMMON}/endAchImg.webp`,
    `${URL_TO_ASSETS_COMMON}/prize.webp`,
    BACKPACK_CONFIG.icon,
    BACKPACK_CONFIG.backbackground,
    BACKPACK_CONFIG.picture,
    BACKPACK_CONFIG.disclaimerDesk,
    BACKPACK_CONFIG.disclaimerMob
  ]);

  // Создаем скрытый контейнер один раз
  const container = document.createElement('div');
  container.style.position = 'absolute';
  container.style.width = '0px';
  container.style.height = '0px';
  container.style.overflow = 'hidden';
  container.style.opacity = '0';
  container.style.pointerEvents = 'none';

  overlayUrls.forEach((url) => {
    if (!url) return;
    // Создаем реальный тег img и добавляем в DOM
    const img = document.createElement('img');
    img.src = url;
    container.appendChild(img);
  });

  // Вшиваем контейнер в документ — теперь браузер гарантированно
  // и скачает, и сразу пропустит их через движок рендеринга.
  document.body.appendChild(container);
}

// ============================================================ рендер модалки и кнопки ===================================================================
// ============================================================ рендер модалки и кнопки ===================================================================

function initModalShell() {
  let modalOverlay, modalContent, videoButton, closeButton;
  const config = {
    trigger: {
      bgImage: `${URL_TO_ASSETS_COMMON}/Circle.png`
    }
  };
  function createTrigger(conf) {
    const btn = document.createElement('button');
    btn.className = 'trigger';
    const inner = document.createElement('div');
    inner.className = 'trigger__inner';
    const img = document.createElement('img');
    img.src = conf.trigger.bgImage;
    img.className = 'trigger__bg';
    inner.append(img);
    btn.appendChild(inner);
    return btn;
  }

  function createModal(conf) {
    const overlay = document.createElement('div');
    overlay.className = 'modal-game__overlay';
    const modal = document.createElement('div');
    modal.className = 'modal-game__modal';
    const closeBtn = document.createElement('button');
    closeBtn.className = 'modal-game__close';
    closeBtn.innerHTML = `<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M20.0466 0.835449L0.835328 20.0467M0.835327 0.835449L20.0466 20.0467" stroke="white" stroke-width="1.67054" stroke-linecap="round" />
</svg>`;
    const container = document.createElement('div');
    container.className = 'modal-game__container';
    const slidesBox = document.createElement('div');
    slidesBox.className = 'modal-game__slides-box';

    container.append(slidesBox);
    modal.append(closeBtn, container);
    overlay.appendChild(modal);
    return overlay;
  }

  function renderGame() {
    videoButton = createTrigger(config);
    modalOverlay = createModal(config);
    document.body.append(videoButton, modalOverlay);
    modalContent = modalOverlay.querySelector('.modal-game__modal');
    closeButton = modalOverlay.querySelector('.modal-game__close');
  }

  function setupEventListeners() {
    videoButton.addEventListener('click', openModal);
    closeButton.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === e.currentTarget) {
        closeModal();
      }
    });
  }

  const getScrollbarWidth = () => window.innerWidth - document.documentElement.clientWidth;

  function openModal() {
    modalOverlay.style.display = 'flex';
    let scrollWith = getScrollbarWidth();
    setTimeout(() => {
      modalOverlay.style.opacity = '1';
      modalContent.style.transform = 'translateY(0)';
    }, 10);
    document.body.style.paddingRight = `${scrollWith}px`;
    videoButton.style.marginRight = `${scrollWith}px`;
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalOverlay.style.opacity = '0';
    modalContent.style.transform = 'translateY(30px)';
    setTimeout(() => {
      modalOverlay.style.display = 'none';
      document.body.style.paddingRight = '0px';
      videoButton.style.marginRight = '0px';
      document.body.style.overflow = '';
    }, 300);
  }

  renderGame();
  setupEventListeners();
}

// ============================================================ добавление тега стилей ===================================================================
// ============================================================ добавление тега стилей ===================================================================

function addResponsiveStyles() {
  const style = document.createElement('style');
  style.textContent = ``;
  document.head.appendChild(style);
}

// ========================================================== запуск скриптов ====================================================================

document.addEventListener('DOMContentLoaded', () => {
  preloadOverlayAssets();
  addResponsiveStyles();
  initModalShell();
  initGameEngine();
});
