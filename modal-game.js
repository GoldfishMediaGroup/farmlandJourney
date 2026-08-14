//ссылка на папку в облаке
const URL_TO_ASSETS = 'https://storage.yandexcloud.net/gamefarmland/assets';
//откуда начинаем игру
const RESTART_ID = 'swamp-1';
//
const START_ID = 'start';

// ========================================================== переменные для работы  =======================================================

const isMobile = () => window.innerWidth <= 768;
//флаг
let isTransitioning = false;
//задержка
const delay = 800;
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
    text: '',
    textCenter: true,
    image: `${URL_TO_ASSETS}/img/swamp-2.webp`,
    imageMob: `${URL_TO_ASSETS}/img/swamp-2--mob.webp`,
    video: null,
    videoMob: null,
    buttons: [
      {
        text: 'Начать игру',
        nextId: RESTART_ID,
        modifierClass: 'btn--green'
      }
    ],
    achiev: null
  },
  //   id: 'swamp-1',
  {
    id: RESTART_ID,
    text: 'Вечером Танти сидит на крыльце и вдруг замечает вдалеке, за лесом и горами, странное мерцание —',
    textCenter: false,
    image: `${URL_TO_ASSETS}/img/swamp-1.webp`,
    imageMob: `${URL_TO_ASSETS}/img/swamp-1--mob.webp`,
    video: null,
    videoMob: null,
    buttons: [
      {
        text: '',
        nextId: 'swamp-2',
        modifierClass: 'btn--inset'
      }
    ],
    achiev: null
  },
  //  id: 'swamp-2',
  {
    id: 'swamp-2',
    text: 'будто кто-то зажег там россыпь крошечных зеленых огоньков. Говорят, что это редчайшее явление, случающееся пару раз в году, и увидеть его можно только из скрытой долины',
    textCenter: false,
    image: `${URL_TO_ASSETS}/img/swamp-2.webp`,
    imageMob: `${URL_TO_ASSETS}/img/swamp-2--mob.webp`,
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
    text: 'Вооружившись туристическим рюкзаком, Танти решает своими глазами увидеть это чудо и отправляется в путь',
    textCenter: false,
    image: `${URL_TO_ASSETS}/img/swamp-3.webp`,
    imageMob: `${URL_TO_ASSETS}/img/swamp-3--mob.webp`,
    video: null,
    videoMob: null,
    buttons: [
      {
        text: '',
        nextId: 'swamp-4',
        modifierClass: 'btn--inset'
      }
    ],
    achiev: null
  },
  //  id: 'swamp-4',
  {
    id: 'swamp-4',
    text: 'Добраться до долины нужно к вечеру!',
    textCenter: true,
    image: `${URL_TO_ASSETS}/img/swamp-3.webp`,
    imageMob: `${URL_TO_ASSETS}/img/swamp-4--mob.webp`,
    video: null,
    videoMob: null,
    buttons: [
      {
        text: 'Вперед!',
        nextId: 'swamp-choises',
        modifierClass: 'btn--green'
      }
    ],
    achiev: null
  },
  // id: 'swamp-choises',
  {
    id: 'swamp-choises',
    text: 'Путь упирается в зеленую ряску. Идти напролом опасно — можно увязнуть. Что делать?',
    textCenter: true,
    image: `${URL_TO_ASSETS}/img/swamp-choises.webp`,
    imageMob: `${URL_TO_ASSETS}/img/swamp-choises--mob.webp`,
    video: null,
    videoMob: null,
    buttons: [
      {
        text: 'Осмотреть растительность',
        nextId: 'swamp-choise-1',
        modifierClass: 'btn--green'
      },
      {
        text: 'Поделиться угощением с птицей',
        nextId: 'swamp-choise-2',
        modifierClass: 'btn--green'
      },
      {
        text: 'Использовать треккинговую палку и навигацию',
        nextId: 'swamp-choise-3',
        modifierClass: 'btn--green'
      }
    ],
    achiev: null
  },
  // id: 'swamp-choise-1',
  {
    id: 'swamp-choise-1',
    text: '',
    textCenter: true,
    image: `${URL_TO_ASSETS}/img/swamp-choise-1.webp`,
    imageMob: `${URL_TO_ASSETS}/img/swamp-choise-1--mob.webp`,
    video: null,
    videoMob: null,
    buttons: [
      {
        text: 'Назад',
        nextId: 'swamp-choises',
        modifierClass: 'btn--back'
      },
      {
        text: 'Осмотреть',
        nextId: 'swamp-choise-1-res',
        modifierClass: 'btn--green'
      }
    ],
    achiev: null
  },
  // id: 'swamp-choise-1-res',
  {
    id: 'swamp-choise-1-res',
    text: 'Танти присматривается и замечает островки с густой осокой и порослью молодой сосны. Он знает, что это верный признак твердой почвы под ногами, и уверенно перебирается по ним на другой берег.',
    textCenter: false,
    image: `${URL_TO_ASSETS}/img/swamp-choise-1-res.webp`,
    imageMob: `${URL_TO_ASSETS}/img/swamp-choise-1-res--mob.webp`,
    video: `${URL_TO_ASSETS}/img/swamp-choise-1-res.mp4`,
    videoMob: `${URL_TO_ASSETS}/img/swamp-choise-1-res--mob.mp4`,
    buttons: [
      {
        text: '',
        nextId: 'steppe-1',
        modifierClass: 'btn--inset'
      }
    ],
    achiev: ['survival']
  },
  // id: 'swamp-choise-2',
  {
    id: 'swamp-choise-2',
    text: '',
    textCenter: true,
    image: `${URL_TO_ASSETS}/img/swamp-choise-2.webp`,
    imageMob: `${URL_TO_ASSETS}/img/swamp-choise-2--mob.webp`,
    video: null,
    videoMob: null,
    buttons: [
      {
        text: 'Назад',
        nextId: 'swamp-choises',
        modifierClass: 'btn--back'
      },
      {
        text: 'Поделиться',
        nextId: 'swamp-choise-2-res',
        modifierClass: 'btn--green'
      }
    ],
    achiev: null
  },
  // id: 'swamp-choise-2-res',
  {
    id: 'swamp-choise-2-res',
    text: 'Танти кидает кусочек печенья вороне, сидящей на сухом бревне. Птица подхватывает угощение и перелетает на следующую кочку. Танти понимает: там, где спокойно садится крупная птица — земля точно выдержит, и аккуратно идет за ней.',
    textCenter: false,
    image: `${URL_TO_ASSETS}/img/swamp-choise-1-res.webp`,
    imageMob: `${URL_TO_ASSETS}/img/swamp-choise-1-res--mob.webp`,
    video: `${URL_TO_ASSETS}/img/swamp-choise-1-res.mp4`,
    videoMob: `${URL_TO_ASSETS}/img/swamp-choise-1-res--mob.mp4`,
    buttons: [
      {
        text: '',
        nextId: 'steppe-1',
        modifierClass: 'btn--inset'
      }
    ],
    achiev: ['social', 'secret']
  },
  // id: 'swamp-choise-3',
  {
    id: 'swamp-choise-3',
    text: '',
    textCenter: true,
    image: `${URL_TO_ASSETS}/img/swamp-choise-3.webp`,
    imageMob: `${URL_TO_ASSETS}/img/swamp-choise-3--mob.webp`,
    video: null,
    videoMob: null,
    buttons: [
      {
        text: 'Назад',
        nextId: 'swamp-choises',
        modifierClass: 'btn--back'
      },
      {
        text: 'Использовать',
        nextId: 'swamp-choise-3-res',
        modifierClass: 'btn--green'
      }
    ],
    achiev: null
  },
  // id: 'swamp-choise-3-res',
  {
    id: 'swamp-choise-3-res',
    text: 'Танти открывает на смартфоне спутниковую карту рельефа, чтобы наметить линию сухих отмелей, а каждый свой шаг осторожно прощупывает обычной треккинговой палкой. Грамотный маршрут и осторожность выводят его из топи.',
    textCenter: false,
    image: `${URL_TO_ASSETS}/img/swamp-choise-1-res.webp`,
    imageMob: `${URL_TO_ASSETS}/img/swamp-choise-1-res--mob.webp`,
    video: `${URL_TO_ASSETS}/img/swamp-choise-1-res.mp4`,
    videoMob: `${URL_TO_ASSETS}/img/swamp-choise-1-res--mob.mp4`,
    buttons: [
      {
        text: '',
        nextId: 'steppe-1',
        modifierClass: 'btn--inset'
      }
    ],
    achiev: ['tehn']
  },

  //=============================локация 2==============================================================
  //=============================локация 2==============================================================
  //=============================локация 2==============================================================

  //   id: 'steppe-1',
  {
    id: 'steppe-1',
    text: 'начальный слайд для степи',
    textCenter: false,
    image: `${URL_TO_ASSETS}/img/swamp-1.webp`,
    imageMob: `${URL_TO_ASSETS}/img/swamp-1--mob.webp`,
    video: null,
    videoMob: null,
    buttons: [
      {
        text: '',
        nextId: 'steppe-choises',
        modifierClass: 'btn--inset'
      }
    ],
    achiev: null
  },
  // id: 'steppe-choises',
  {
    id: 'steppe-choises',
    text: 'новый слайд с выбором для степи',
    textCenter: true,
    image: `${URL_TO_ASSETS}/img/swamp-2.webp`,
    imageMob: `${URL_TO_ASSETS}/img/swamp-2--mob.webp`,
    video: null,
    videoMob: null,
    buttons: [
      {
        text: 'Использовать селфи-палку',
        nextId: 'steppe-choise-1',
        modifierClass: 'btn--green'
      },
      {
        text: 'Найти степной муравейник',
        nextId: 'steppe-choise-2',
        modifierClass: 'btn--green'
      },
      {
        text: 'Сыграть на губной гармошке',
        nextId: 'steppe-choise-3',
        modifierClass: 'btn--green'
      }
    ],
    achiev: null
  },
  // id: 'steppe-choise-1',
  {
    id: 'steppe-choise-1',
    text: '',
    textCenter: true,
    image: `${URL_TO_ASSETS}/img/swamp-3.webp`,
    imageMob: `${URL_TO_ASSETS}/img/swamp-3--mob.webp`,
    video: null,
    videoMob: null,
    buttons: [
      {
        text: 'Назад',
        nextId: 'steppe-choises',
        modifierClass: 'btn--back'
      },
      {
        text: 'Использовать',
        nextId: 'steppe-choise-1-res',
        modifierClass: 'btn--green'
      }
    ],
    achiev: null
  },
  // id: 'steppe-choise-1-res',
  {
    id: 'steppe-choise-1-res',
    text: 'Танти присматривается и замечает островки с густой осокой и порослью молодой сосны. Он знает, что это верный признак твердой почвы под ногами, и уверенно перебирается по ним на другой берег.',
    textCenter: false,
    image: `${URL_TO_ASSETS}/img/swamp-choise-1-res.webp`,
    imageMob: `${URL_TO_ASSETS}/img/swamp-choise-1-res--mob.webp`,
    video: `${URL_TO_ASSETS}/img/swamp-choise-1-res.mp4`,
    videoMob: `${URL_TO_ASSETS}/img/swamp-choise-1-res--mob.mp4`,
    buttons: [
      {
        text: '',
        nextId: 'pass-1',
        modifierClass: 'btn--inset'
      }
    ],
    achiev: ['tehn', 'secret']
  },
  // id: 'steppe-choise-2',
  {
    id: 'steppe-choise-2',
    text: '',
    textCenter: true,
    image: `${URL_TO_ASSETS}/img/swamp-2.webp`,
    imageMob: `${URL_TO_ASSETS}/img/swamp-2--mob.webp`,
    video: null,
    videoMob: null,
    buttons: [
      {
        text: 'Назад',
        nextId: 'steppe-choises',
        modifierClass: 'btn--back'
      },
      {
        text: 'Искать',
        nextId: 'steppe-choise-2-res',
        modifierClass: 'btn--green'
      }
    ],
    achiev: null
  },
  // id: 'steppe-choise-2-res',
  {
    id: 'steppe-choise-2-res',
    text: 'Танти находит в траве крупный муравейник. Он помнит главное правило: южная сторона муравейника всегда более пологая. Поняв, где юг, он легко ориентируется на местности и выходит в нужном направлении.',
    textCenter: false,
    image: `${URL_TO_ASSETS}/img/swamp-choise-1-res.webp`,
    imageMob: `${URL_TO_ASSETS}/img/swamp-choise-1-res--mob.webp`,
    video: `${URL_TO_ASSETS}/img/swamp-choise-1-res.mp4`,
    videoMob: `${URL_TO_ASSETS}/img/swamp-choise-1-res--mob.mp4`,
    buttons: [
      {
        text: '',
        nextId: 'pass-1',
        modifierClass: 'btn--inset'
      }
    ],
    achiev: ['survival']
  },
  // id: 'steppe-choise-3',
  {
    id: 'steppe-choise-3',
    text: '',
    textCenter: true,
    image: `${URL_TO_ASSETS}/img/swamp-2.webp`,
    imageMob: `${URL_TO_ASSETS}/img/swamp-2--mob.webp`,
    video: null,
    videoMob: null,
    buttons: [
      {
        text: 'Назад',
        nextId: 'steppe-choises',
        modifierClass: 'btn--back'
      },
      {
        text: 'Сыграть',
        nextId: 'steppe-choise-3-res',
        modifierClass: 'btn--green'
      }
    ],
    achiev: null
  },
  // id: 'steppe-choise-3-res',
  {
    id: 'steppe-choise-3-res',
    text: 'Звонкая мелодия разносится далеко по степи. На звук из высокой травы выходит лохматая пастушья собака, которая виляет хвостом и с радостью выводит музыканта к натоптанной дороге.',
    textCenter: false,
    image: `${URL_TO_ASSETS}/img/swamp-choise-1-res.webp`,
    imageMob: `${URL_TO_ASSETS}/img/swamp-choise-1-res--mob.webp`,
    video: `${URL_TO_ASSETS}/img/swamp-choise-1-res.mp4`,
    videoMob: `${URL_TO_ASSETS}/img/swamp-choise-1-res--mob.mp4`,
    buttons: [
      {
        text: '',
        nextId: 'pass-1',
        modifierClass: 'btn--inset'
      }
    ],
    achiev: ['social']
  },
  //=============================локация 3 ==============================================================
  //=============================локация 3 ==============================================================
  //=============================локация 3 ==============================================================
  //   id: 'pass-1',
  {
    id: 'pass-1',
    text: 'начальный слайд для гор',
    textCenter: false,
    image: `${URL_TO_ASSETS}/img/swamp-1.webp`,
    imageMob: `${URL_TO_ASSETS}/img/swamp-1--mob.webp`,
    video: null,
    videoMob: null,
    buttons: [
      {
        text: '',
        nextId: 'pass-choises',
        modifierClass: 'btn--inset'
      }
    ],
    achiev: null
  },
  // id: 'pass-choises',
  {
    id: 'pass-choises',
    text: 'новый слайд с выбором для гор',
    textCenter: true,
    image: `${URL_TO_ASSETS}/img/swamp-2.webp`,
    imageMob: `${URL_TO_ASSETS}/img/swamp-2--mob.webp`,
    video: null,
    videoMob: null,
    buttons: [
      {
        text: 'Довериться местным обитателям',
        nextId: 'pass-choise-1',
        modifierClass: 'btn--green'
      },
      {
        text: 'Использовать оптику смартфона',
        nextId: 'pass-choise-2',
        modifierClass: 'btn--green'
      },
      {
        text: 'Внимательно изучить камни',
        nextId: 'pass-choise-3',
        modifierClass: 'btn--green'
      }
    ],
    achiev: null
  },
  // id: 'pass-choise-1',
  {
    id: 'pass-choise-1',
    text: '',
    textCenter: true,
    image: `${URL_TO_ASSETS}/img/swamp-3.webp`,
    imageMob: `${URL_TO_ASSETS}/img/swamp-3--mob.webp`,
    video: null,
    videoMob: null,
    buttons: [
      {
        text: 'Назад',
        nextId: 'pass-choises',
        modifierClass: 'btn--back'
      },
      {
        text: 'Довериться',
        nextId: 'pass-choise-1-res',
        modifierClass: 'btn--green'
      }
    ],
    achiev: null
  },
  // id: 'pass-choise-1-res',
  {
    id: 'pass-choise-1-res',
    text: 'Танти замечает молодого горного козлика. Животные инстинктивно знают, какие камни не шатаются. Танти просто и аккуратно повторяет его маршрут, ступая след в след.',
    textCenter: false,
    image: `${URL_TO_ASSETS}/img/swamp-choise-1-res.webp`,
    imageMob: `${URL_TO_ASSETS}/img/swamp-choise-1-res--mob.webp`,
    video: `${URL_TO_ASSETS}/img/swamp-choise-1-res.mp4`,
    videoMob: `${URL_TO_ASSETS}/img/swamp-choise-1-res--mob.mp4`,
    buttons: [
      {
        text: '',
        nextId: 'calc',
        modifierClass: 'btn--inset'
      }
    ],
    achiev: ['social']
  },

  // id: 'pass-choise-2',
  {
    id: 'pass-choise-2',
    text: '',
    textCenter: true,
    image: `${URL_TO_ASSETS}/img/swamp-1.webp`,
    imageMob: `${URL_TO_ASSETS}/img/swamp-1--mob.webp`,
    video: null,
    videoMob: null,
    buttons: [
      {
        text: 'Назад',
        nextId: 'pass-choises',
        modifierClass: 'btn--back'
      },
      {
        text: 'Использовать',
        nextId: 'pass-choise-2-res',
        modifierClass: 'btn--green'
      }
    ],
    achiev: null
  },
  // id: 'pass-choise-2-res',
  {
    id: 'pass-choise-2-res',
    text: 'Танти достает складную селфи-палку, закрепляет смартфон, поднимает его высоко над ковылем и делает пару снимков. На фото сверху отлично видна примятая трава, где проходит старая тропа. Маршрут найден!',
    textCenter: false,
    image: `${URL_TO_ASSETS}/img/swamp-choise-1-res.webp`,
    imageMob: `${URL_TO_ASSETS}/img/swamp-choise-1-res--mob.webp`,
    video: `${URL_TO_ASSETS}/img/swamp-choise-1-res.mp4`,
    videoMob: `${URL_TO_ASSETS}/img/swamp-choise-1-res--mob.mp4`,
    buttons: [
      {
        text: '',
        nextId: 'calc',
        modifierClass: 'btn--inset'
      }
    ],
    achiev: ['tehn']
  },

  // id: 'pass-choise-3',
  {
    id: 'pass-choise-3',
    text: '',
    textCenter: true,
    image: `${URL_TO_ASSETS}/img/swamp-2.webp`,
    imageMob: `${URL_TO_ASSETS}/img/swamp-2--mob.webp`,
    video: null,
    videoMob: null,
    buttons: [
      {
        text: 'Назад',
        nextId: 'pass-choises',
        modifierClass: 'btn--back'
      },
      {
        text: 'Изучить',
        nextId: 'pass-choise-3-res',
        modifierClass: 'btn--green'
      }
    ],
    achiev: null
  },
  // id: 'pass-choise-3-res',
  {
    id: 'pass-choise-3-res',
    text: 'На тех валунах, что лежат неподвижно годами, успел вырасти густой лишайник. Танти ступает только по замшелым камням, не тревожа свежую опасную осыпь.',
    textCenter: false,
    image: `${URL_TO_ASSETS}/img/swamp-choise-1-res.webp`,
    imageMob: `${URL_TO_ASSETS}/img/swamp-choise-1-res--mob.webp`,
    video: `${URL_TO_ASSETS}/img/swamp-choise-1-res.mp4`,
    videoMob: `${URL_TO_ASSETS}/img/swamp-choise-1-res--mob.mp4`,
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
    image: `${URL_TO_ASSETS}/img/calc.webp`,
    imageMob: `${URL_TO_ASSETS}/img/calc--mob.webp`,
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
    text: 'Титул: «Изобретатель» ',
    textCenter: true,
    image: `${URL_TO_ASSETS}/img/swamp-1.webp`,
    imageMob: `${URL_TO_ASSETS}/img/swamp-1--mob.webp`,
    video: null,
    videoMob: null,
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
    text: 'Титул: «Душа леса»',
    textCenter: true,
    image: `${URL_TO_ASSETS}/img/swamp-2.webp`,
    imageMob: `${URL_TO_ASSETS}/img/swamp-2--mob.webp`,
    video: null,
    videoMob: null,
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
    text: 'Титул: «Истинный следопыт» ',
    textCenter: true,
    image: `${URL_TO_ASSETS}/img/swamp-3.webp`,
    imageMob: `${URL_TO_ASSETS}/img/swamp-3--mob.webp`,
    video: null,
    videoMob: null,
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
    text: 'Титул: «Гармоничный искатель»',
    textCenter: true,
    image: `${URL_TO_ASSETS}/img/swamp-1.webp`,
    imageMob: `${URL_TO_ASSETS}/img/swamp-1--mob.webp`,
    video: null,
    videoMob: null,
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
    text: 'Титул: «Мастер скрытых троп»',
    textCenter: true,
    image: `${URL_TO_ASSETS}/img/swamp-2.webp`,
    imageMob: `${URL_TO_ASSETS}/img/swamp-2--mob.webp`,
    video: null,
    videoMob: null,
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
    text: 'Сыграй еще раз другим стилем, чтобы открыть остальные концовки ',
    textCenter: true,
    image: `${URL_TO_ASSETS}/img/swamp-3.webp`,
    imageMob: `${URL_TO_ASSETS}/img/swamp-3--mob.webp`,
    video: null,
    videoMob: null,
    buttons: [
      {
        text: 'Играть',
        nextId: RESTART_ID,
        modifierClass: 'btn--green'
      }
    ],
    achiev: null
  }
];

const ACHIEVEMENTS_CONFIG = {
  tehn: { title: 'технологиям', icon: `${URL_TO_ASSETS}/img/tehn.webp` },
  social: { title: 'общению', icon: `${URL_TO_ASSETS}/img/social.webp` },
  survival: { title: 'выживанию', icon: `${URL_TO_ASSETS}/img/survival.webp` }
};

const ENDINGS_CONFIG = {
  'end1-1': {
    title: 'Изобретатель',
    nextId: 'end1-1'
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

// ========================================================== начальное состояние игры ====================================================================

const gameState = {
  currentSlideId: START_ID,
  achievements: { ...achivementsArr }
};

// ================================================================== логика игры =========================================================================

function initGameEngine() {
  const slidesBox = document.querySelector('.modal__slides-box');
  if (!slidesBox) return;

  slidesBox.addEventListener('click', setupEvents);
  renderAllSlides();

  // ================================================================== рендер всех слайдов ================================================================
  // ================================================================== рендер всех слайдов ================================================================
  // ================================================================== рендер всех слайдов ================================================================
  function renderAllSlides() {
    slidesBox.innerHTML = SLIDES_CONFIG.map((slide) => {
      const isActive = slide.id === gameState.currentSlideId ? 'slide--active' : '';

      const buttonsHtml = slide.buttons
        ? slide.buttons
            .map(
              (btn, index) => `
              <button class="slide__btn ${btn.modifierClass || ''}" data-index="${index}">
                ${btn.text}
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

      const isFirstSlide = slide.id === START_ID;
      const decodingMode = isFirstSlide ? 'sync' : 'async';

      // ИСПРАВЛЕНО: preload="metadata" вместо preload="none"
      const bg = slide.video
        ? `<video width="100%" height="100%" preload="metadata" loop muted playsinline poster="${slide.image || ''}">
          <source src="${slide.video}" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
         </video>`
        : `<picture>
          ${slide.imageMob ? `<source srcset="${slide.imageMob}" media="(max-width: 768px)" />` : ''}
          <img src="${slide.image || ''}" alt="" decoding=${decodingMode} fetchpriority="high"/>
        </picture>`;

      return `
      <div class="slide ${isActive}" data-id="${slide.id}">
        <div class="slide__content">
          <div class="slide__text-box">
            <p class="slide__text ${centerClass}">${slide.text || ''}</p>
            ${svgHtml}
          </div>
          <div class="slide__btn-box">
            ${buttonsHtml}
          </div>
        </div>
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

  function showAchievementOverlay(achievArray) {
    const modalContent = document.querySelector('.modal__modal');
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
      setTimeout(() => overlay.remove(), 500);
    }, delay);
  }

  function showEndingOverlay(endingData, achievements) {
    const modalContent = document.querySelector('.modal__modal');
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
        <img src="${URL_TO_ASSETS}/img/endAchBg.webp" alt="" />
      </div>

          <div class="ending-overlay__content">
      <div class="ending-overlay__achive">
        <div class="ending-overlay__img">
          <img src="${URL_TO_ASSETS}/img/endAchImg.webp" alt="${endingData.title}" />
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
            <img src="${URL_TO_ASSETS}/img/prize.webp" alt="${endingData.title}" />
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

  function showCounterBlock() {
    const modalContainer = document.querySelector('.modal__container');
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
      showAchievementOverlay(currentSlide.achiev);
      unlockAchievement(currentSlide.achiev);
      setTimeout(() => {
        changeSlideWithAnimation(btnData.nextId);
      }, delay);
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

    const modalContent = document.querySelector('.modal__modal');
    if (modalContent) {
      const overlays = modalContent.querySelectorAll('.modal__achievement-overlay, .modal__ending-overlay');
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
    }, delay);
  }
}
// =============================================================== предпрогрузка картинок ================================================================

function preloadOverlayAssets() {
  const overlayUrls = new Set([
    ...Object.values(ACHIEVEMENTS_CONFIG).map((item) => item.icon),
    `${URL_TO_ASSETS}/img/endAchBg.webp`,
    `${URL_TO_ASSETS}/img/endAchImg.webp`,
    `${URL_TO_ASSETS}/img/prize.webp`
  ]);

  overlayUrls.forEach((url) => {
    if (!url) return;
    const img = new Image();
    img.src = url;
  });
}

// ============================================================ рендер модалки и кнопки ===================================================================
// ============================================================ рендер модалки и кнопки ===================================================================

function initModalShell() {
  let modalOverlay, modalContent, videoButton, closeButton;
  const config = {
    trigger: {
      bgImage: 'https://storage.yandexcloud.net/external-assets/tantum/modal-game/circle.png',
      previewVideo: 'https://storage.yandexcloud.net/external-assets/tantum/modal-game/hello.mp4'
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
    const video = document.createElement('video');
    video.className = 'trigger__video';
    video.muted = video.loop = video.autoplay = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');
    const source = document.createElement('source');
    source.src = conf.trigger.previewVideo;
    source.type = 'video/mp4';
    video.appendChild(source);
    inner.append(img, video);
    btn.appendChild(inner);
    return btn;
  }

  function createModal(conf) {
    const overlay = document.createElement('div');
    overlay.className = 'modal__overlay';
    const modal = document.createElement('div');
    modal.className = 'modal__modal';
    const closeBtn = document.createElement('button');
    closeBtn.className = 'modal__close';
    closeBtn.textContent = '×';
    const container = document.createElement('div');
    container.className = 'modal__container';
    const slidesBox = document.createElement('div');
    slidesBox.className = 'modal__slides-box';

    container.append(slidesBox);
    modal.append(closeBtn, container);
    overlay.appendChild(modal);
    return overlay;
  }

  function renderGame() {
    videoButton = createTrigger(config);
    modalOverlay = createModal(config);
    document.body.append(videoButton, modalOverlay);
    modalContent = modalOverlay.querySelector('.modal__modal');
    closeButton = modalOverlay.querySelector('.modal__close');
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
  style.textContent = `
     @charset "UTF-8";@font-face{font-family:Gilroy;src:url("https://storage.yandexcloud.net/gamefarmland/assets/fonts/Gilroy-Bold.woff2") format("woff2");font-weight:700;font-style:normal;font-display:swap}:root{--wiepotrDeviseWith:1920}.trigger{position:fixed;bottom:calc(110 * 100vw / var(--wiepotrDeviseWith));right:calc(100 * 100vw / var(--wiepotrDeviseWith));width:calc(180 * 100vw / var(--wiepotrDeviseWith));aspect-ratio:1;background:0 0;border:none;cursor:pointer;border-radius:50%;z-index:1039;padding:0}.trigger__inner{width:100%;height:100%;display:flex;align-items:center;justify-content:center;overflow:hidden;position:relative;border-radius:50%}.achiev-counter__badge,.modal__overlay{align-items:center}.trigger__bg{width:100%;height:100%;-o-object-fit:contain;object-fit:contain;position:absolute;z-index:1}.trigger__video{width:80%;height:70%;-o-object-fit:contain;object-fit:contain;z-index:2;border-radius:50%}.modal__overlay{position:fixed;inset:0;background:rgba(0,0,0,.8);display:none;justify-content:center;z-index:110001;opacity:0;transition:opacity .3s;cursor:pointer}.modal__overlay *{padding:0;margin:0;box-sizing:border-box}.modal__overlay img{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.modal__modal{cursor:default;border-radius:calc(12 * 100vw / var(--wiepotrDeviseWith));overflow:hidden;position:relative;transform:translateY(calc(30 * 100vw / var(--wiepotrDeviseWith)));transition:transform .3s;width:calc(1367 * 100vw / var(--wiepotrDeviseWith));aspect-ratio:16/9;background:#555754!important;font-family:Gilroy;font-weight:700;color:#fff}.slide,.slide__bg img,.slide__bg picture,.slide__bg video{backface-visibility:hidden;transform:translateZ(0);height:100%}.modal__container{width:100%;height:100%;position:relative}.modal__close{position:absolute;flex-shrink:0;top:calc(57 * 100vw / var(--wiepotrDeviseWith));right:calc(57 * 100vw / var(--wiepotrDeviseWith));aspect-ratio:1;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.5);color:#fff;border:none;border-radius:50%;cursor:pointer;z-index:1110;width:calc(50 * 100vw / var(--wiepotrDeviseWith));font-size:calc(24 * 100vw / var(--wiepotrDeviseWith))}.modal__slides-box{display:grid;width:100%;height:100%;position:relative}.slide{will-change:opacity;overflow:hidden;grid-column:1/-1;grid-row:1/-1;position:absolute;inset:0;width:100%;box-sizing:border-box;display:flex;align-items:flex-end;opacity:0;pointer-events:none;transition:opacity .8s;padding:calc(50 * 100vw / var(--wiepotrDeviseWith)) calc(85 * 100vw / var(--wiepotrDeviseWith))}.slide--active{opacity:1;pointer-events:auto}.slide__bg{position:absolute;inset:0}.slide__bg img,.slide__bg picture,.slide__bg video{width:100%;display:block;-o-object-fit:cover;object-fit:cover}.slide__content{display:flex;flex-direction:column;width:100%;z-index:2;gap:calc(20 * 100vw / var(--wiepotrDeviseWith))}.slide__text-box{display:flex;gap:calc(20 * 100vw / var(--wiepotrDeviseWith));justify-content:space-between;align-items:flex-start}.slide__text{margin:0;flex-grow:1;font-size:calc(45 * 100vw / var(--wiepotrDeviseWith))}.slide__arr{aspect-ratio:63/98;flex-shrink:0;width:calc(50 * 100vw / var(--wiepotrDeviseWith))}.slide__arr svg{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.slide__btn-box{display:flex;flex-wrap:wrap;gap:calc(14 * 100vw / var(--wiepotrDeviseWith))}.slide__btn-box:has(.btn--back){display:grid;grid-template-columns:repeat(2,1fr)}.slide__btn-box:has(.btn--back) .slide__btn{width:100%}.slide__btn-box:has(.btn--inset){position:absolute;inset:0}.slide__btn{outline:0;border:none;color:inherit;font-family:inherit;text-align:center;cursor:pointer;width:-moz-fit-content;width:fit-content;font-size:calc(34 * 100vw / var(--wiepotrDeviseWith))}.slide__btn.btn--back,.slide__btn.btn--green{border-radius:calc(60 * 100vw / var(--wiepotrDeviseWith))}.slide__btn.btn--inset{position:absolute;inset:0;opacity:0;width:100%}.slide__btn.btn--green{backdrop-filter:blur(calc(5 * 100vw / var(--wiepotrDeviseWith)));-webkit-backdrop-filter:blur(calc(5 * 100vw / var(--wiepotrDeviseWith)));padding:calc(17 * 100vw / var(--wiepotrDeviseWith)) calc(38 * 100vw / var(--wiepotrDeviseWith));background:linear-gradient(180deg,#459f07 0,#193903 144.59%)}@media (max-width:48em){:root{--wiepotrDeviseWith:375}.trigger{bottom:calc(20 * 100vw / var(--wiepotrDeviseWith));width:calc(100 * 100vw / var(--wiepotrDeviseWith));right:calc(16 * 100vw / var(--wiepotrDeviseWith))}.modal__modal{width:calc(350 * 100vw / var(--wiepotrDeviseWith));aspect-ratio:3/4}.modal__close{top:calc(12 * 100vw / var(--wiepotrDeviseWith));right:calc(12 * 100vw / var(--wiepotrDeviseWith));font-size:calc(14 * 100vw / var(--wiepotrDeviseWith));width:calc(30 * 100vw / var(--wiepotrDeviseWith))}.slide{padding:calc(30 * 100vw / var(--wiepotrDeviseWith)) calc(16 * 100vw / var(--wiepotrDeviseWith))}.slide__content{gap:gap(10)}.slide__text--center{text-align:center}.slide__text{font-size:calc(14 * 100vw / var(--wiepotrDeviseWith))}.slide__arr{width:calc(17 * 100vw / var(--wiepotrDeviseWith))}.slide__btn-box:has(.btn--back){display:flex;flex-direction:column}.slide__btn-box{display:flex;flex-direction:column;gap:calc(10 * 100vw / var(--wiepotrDeviseWith))}.slide__btn{width:100%;font-size:calc(12 * 100vw / var(--wiepotrDeviseWith))}.slide__btn.btn--green{padding:calc(7 * 100vw / var(--wiepotrDeviseWith)) calc(14 * 100vw / var(--wiepotrDeviseWith))}}.slide__btn.btn--back{padding:calc(15 * 100vw / var(--wiepotrDeviseWith)) calc(36 * 100vw / var(--wiepotrDeviseWith));border:calc(2 * 100vw / var(--wiepotrDeviseWith)) solid rgba(255,255,255,.5);background:0 0}.achiev-counter{position:absolute;top:calc(40 * 100vw / var(--wiepotrDeviseWith));left:calc(57 * 100vw / var(--wiepotrDeviseWith));display:flex;gap:calc(16 * 100vw / var(--wiepotrDeviseWith));z-index:1100;pointer-events:none}.achiev-counter__badge,.achiev-overlay__body{gap:calc(8 * 100vw / var(--wiepotrDeviseWith));display:flex}.achiev-counter__img{width:calc(60 * 100vw / var(--wiepotrDeviseWith));aspect-ratio:1;-o-object-fit:contain;object-fit:contain}.achiev-counter__count{color:#fff;font-size:calc(45 * 100vw / var(--wiepotrDeviseWith));font-weight:700}.achiev-overlay,.ending-overlay{position:absolute;inset:0;backdrop-filter:blur(calc(10 * 100vw / var(--wiepotrDeviseWith)));-webkit-backdrop-filter:blur(calc(10 * 100vw / var(--wiepotrDeviseWith)));background:rgba(10,22,2,.4);display:flex;align-items:center;justify-content:center;z-index:1200;opacity:0;transition:opacity .4s;pointer-events:auto}.achiev-overlay--show,.ending-overlay--show,.ending-overlay--show .ending-overlay__card{opacity:1}.achiev-overlay--show .achiev-overlay__card{transform:scale(1)}.achiev-overlay__card{display:flex;flex-direction:column;align-items:center;transform:scale(.4);transition:transform .4s}.achiev-overlay__body{align-items:center;font-size:calc(45 * 100vw / var(--wiepotrDeviseWith))}.achiev-overlay__img{aspect-ratio:1;width:calc(60 * 100vw / var(--wiepotrDeviseWith))}.ending-overlay--show .ending-overlay__content{scale:1}.ending-overlay__card{display:flex;align-items:center;justify-content:center;align-items:center;transition:opacity .3s;width:100%;height:100%;position:relative}.ending-overlay__bg{width:100%;height:100%;position:absolute;inset:0}.ending-overlay__bg img{width:68%;height:107%;-webkit-mask-image:radial-gradient(circle at center,black 15%,rgba(0,0,0,0.1) 94%,transparent 96%);mask-image:radial-gradient(circle at center,black 15%,rgba(0,0,0,0.1) 94%,transparent 96%)}.ending-overlay__content{display:flex;flex-direction:column;gap:calc(30 * 100vw / var(--wiepotrDeviseWith));transition:scale .3s;scale:0.4}.ending-overlay__achive{margin-left:calc(134 * 100vw / var(--wiepotrDeviseWith));width:calc(646 * 100vw / var(--wiepotrDeviseWith));position:relative}.ending-overlay__img{width:calc(357 * 100vw / var(--wiepotrDeviseWith));position:absolute;aspect-ratio:1;left:calc(-172 * 100vw / var(--wiepotrDeviseWith));bottom:0}.ending-overlay__body{border-radius:calc(26 * 100vw / var(--wiepotrDeviseWith));background:rgba(255,255,255,.7);padding:calc(34 * 100vw / var(--wiepotrDeviseWith)) calc(34 * 100vw / var(--wiepotrDeviseWith)) calc(34 * 100vw / var(--wiepotrDeviseWith)) calc(186 * 100vw / var(--wiepotrDeviseWith))}.ending-overlay__body-inner{border-radius:calc(23 * 100vw / var(--wiepotrDeviseWith));padding:calc(17 * 100vw / var(--wiepotrDeviseWith));background:#fff;color:#163f26;display:flex;flex-direction:column;gap:calc(4 * 100vw / var(--wiepotrDeviseWith))}.ending-overlay__head{display:flex;flex-direction:column;gap:calc(1 * 100vw / var(--wiepotrDeviseWith));text-align:center;align-items:center}.ending-overlay__subtitle{font-size:calc(15 * 100vw / var(--wiepotrDeviseWith));font-weight:500}.ending-overlay__title{font-weight:700;font-size:calc(45 * 100vw / var(--wiepotrDeviseWith))}.ending-overlay__result{display:flex;flex-direction:column;align-items:center;text-align:center;gap:calc(8 * 100vw / var(--wiepotrDeviseWith))}.ending-overlay__result-title{font-size:calc(15 * 100vw / var(--wiepotrDeviseWith));font-weight:500}.ending-overlay__counter{display:flex;align-items:center;justify-content:center;gap:calc(30 * 100vw / var(--wiepotrDeviseWith))}.ending-overlay__badge{border-radius:calc(9 * 100vw / var(--wiepotrDeviseWith));padding:calc(8 * 100vw / var(--wiepotrDeviseWith)) calc(14 * 100vw / var(--wiepotrDeviseWith));gap:calc(2 * 100vw / var(--wiepotrDeviseWith));display:flex;align-items:center;justify-content:space-between;background:#eff6ef;display:flex;align-items:center}.ending-overlay__badge-img{width:calc(60 * 100vw / var(--wiepotrDeviseWith));aspect-ratio:1}.ending-overlay__count{font-weight:700;font-size:calc(34 * 100vw / var(--wiepotrDeviseWith))}.ending-overlay__btn-box{display:flex;align-items:center;justify-content:space-between}.ending-overlay__end{display:flex;align-items:center}.ending-overlay__end-img{position:absolute;border-radius:calc(14 * 100vw / var(--wiepotrDeviseWith));width:calc(93 * 100vw / var(--wiepotrDeviseWith));height:calc(85 * 100vw / var(--wiepotrDeviseWith));left:0;overflow:hidden}.ending-overlay__end-text{background:rgba(78,129,42,.6);color:#fff;font-weight:500;line-height:110%;border:calc(.18 * 100vw / var(--wiepotrDeviseWith)) solid #fff;border-radius:calc(17 * 100vw / var(--wiepotrDeviseWith));padding:calc(5 * 100vw / var(--wiepotrDeviseWith)) calc(10 * 100vw / var(--wiepotrDeviseWith)) calc(5 * 100vw / var(--wiepotrDeviseWith)) calc(110 * 100vw / var(--wiepotrDeviseWith));width:calc(294 * 100vw / var(--wiepotrDeviseWith));font-size:calc(22 * 100vw / var(--wiepotrDeviseWith))}.ending-overlay .btn--green{padding:calc(17 * 100vw / var(--wiepotrDeviseWith)) calc(103 * 100vw / var(--wiepotrDeviseWith))}@media (max-width:48em){.slide__btn.btn--back{padding:calc(5 * 100vw / var(--wiepotrDeviseWith)) calc(12 * 100vw / var(--wiepotrDeviseWith))}.achiev-counter{top:calc(12 * 100vw / var(--wiepotrDeviseWith));left:calc(12 * 100vw / var(--wiepotrDeviseWith));gap:calc(10 * 100vw / var(--wiepotrDeviseWith))}.achiev-counter__img,.achiev-overlay__img{width:calc(30 * 100vw / var(--wiepotrDeviseWith))}.achiev-counter__count,.achiev-overlay__body,.ending-overlay__title{font-size:calc(14 * 100vw / var(--wiepotrDeviseWith))}.ending-overlay__bg img{width:100%;height:100%;-webkit-mask-image:unset;mask-image:unset}.ending-overlay__content{gap:calc(12 * 100vw / var(--wiepotrDeviseWith))}.ending-overlay__achive{width:calc(164 * 100vw / var(--wiepotrDeviseWith));margin-left:unset;margin-top:calc(145 * 100vw / var(--wiepotrDeviseWith))}.ending-overlay__img{width:calc(174 * 100vw / var(--wiepotrDeviseWith));left:50%;transform:translateX(-50%);top:calc(-145 * 100vw / var(--wiepotrDeviseWith))}.ending-overlay__body{padding:calc(24 * 100vw / var(--wiepotrDeviseWith)) calc(6 * 100vw / var(--wiepotrDeviseWith)) calc(6 * 100vw / var(--wiepotrDeviseWith)) calc(6 * 100vw / var(--wiepotrDeviseWith));border-radius:calc(5 * 100vw / var(--wiepotrDeviseWith))}.ending-overlay__body-inner{border-radius:calc(5 * 100vw / var(--wiepotrDeviseWith));padding:calc(12 * 100vw / var(--wiepotrDeviseWith)) calc(14 * 100vw / var(--wiepotrDeviseWith)) calc(10 * 100vw / var(--wiepotrDeviseWith));gap:calc(6 * 100vw / var(--wiepotrDeviseWith))}.ending-overlay__subtitle{font-size:calc(7 * 100vw / var(--wiepotrDeviseWith))}.ending-overlay__result{gap:calc(4 * 100vw / var(--wiepotrDeviseWith))}.ending-overlay__result-title{font-size:calc(7 * 100vw / var(--wiepotrDeviseWith))}.ending-overlay__counter{gap:calc(10 * 100vw / var(--wiepotrDeviseWith))}.ending-overlay__badge{padding:calc(2 * 100vw / var(--wiepotrDeviseWith)) calc(4 * 100vw / var(--wiepotrDeviseWith));border-radius:calc(5 * 100vw / var(--wiepotrDeviseWith))}.ending-overlay__badge-img{width:calc(20 * 100vw / var(--wiepotrDeviseWith))}.ending-overlay__count{font-size:calc(10 * 100vw / var(--wiepotrDeviseWith))}.ending-overlay__btn-box{flex-direction:column;gap:calc(12 * 100vw / var(--wiepotrDeviseWith))}.ending-overlay__end{width:100%}.ending-overlay__end-img{border-radius:calc(6 * 100vw / var(--wiepotrDeviseWith));width:calc(37 * 100vw / var(--wiepotrDeviseWith));height:calc(34 * 100vw / var(--wiepotrDeviseWith))}.ending-overlay__end-text{border:calc(.25 * 100vw / var(--wiepotrDeviseWith)) solid #fff;border-radius:calc(6 * 100vw / var(--wiepotrDeviseWith));padding:calc(8 * 100vw / var(--wiepotrDeviseWith)) calc(15 * 100vw / var(--wiepotrDeviseWith)) calc(8 * 100vw / var(--wiepotrDeviseWith)) calc(50 * 100vw / var(--wiepotrDeviseWith));width:100%;font-size:calc(6 * 100vw / var(--wiepotrDeviseWith))}.ending-overlay .btn--green{padding:calc(7 * 100vw / var(--wiepotrDeviseWith)) calc(50 * 100vw / var(--wiepotrDeviseWith));width:100%}}
    `;
  document.head.appendChild(style);
}

// ========================================================== запуск скриптов ====================================================================

document.addEventListener('DOMContentLoaded', () => {
  preloadOverlayAssets();
  addResponsiveStyles();
  initModalShell();
  initGameEngine();
});
