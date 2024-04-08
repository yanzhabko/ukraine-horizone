import Castle from "@/images/icons/castle.svg";
import Scales from "@/images/icons/scales.svg";
import Dice from "@/images/icons/dice.svg";
import Cart from "@/images/icons/cart.svg";
import ANIGMA from "../images/servers/anigma.png";

export const headerLinks = [
  { href: "/", title: "Головна", icon: Castle },
  { href: "/rules", title: "Правила", icon: Scales },
  { href: "/servers", title: "Сервери", icon: Dice },
  { href: "/shop", title: "Магазин", icon: Cart },
];

export const serversMinecraft = [
  {
    nameServer: "anigma",
    category: "TechnoMagic",
    image: ANIGMA,
  },
];

export const rules = [
  {
    name: "Основні",
    descriptions: [
      {
        title:
          "Будь-хто, хто зареєструвався, автоматично погоджується з цим збірником правил і зобов'язується дотримуватися їх",
      },
      {
        title:
          "Адміністрація грального проекту має повне право заблокувати ваш обліковий запис за порушенням будь-якого пункту цього збірника правил.",
      },
      {
        title:
          "Всі гроші, які ви виплатили за послуги Донату, вважаються добровільним пожертвуванням на розвиток проекту. Повернути кошти, витрачені на послуги Донату або Онлайн-магазин, неможливо ні за яких умов",
      },
      {
        title:
          "Ні за яких умов адміністратор не зобов'язаний повертати вам те, що ви втратили внаслідок якої-небудь ситуації (баг, відкат, вайп, крадіжка, очищення і т.п.).",
      },
      {
        title:
          "Ні за яких умов адміністратор не зобов'язаний повертати вам втрачені речі, які ви придбали за пожертви або добули під час грального процесу.",
      },
      {
        title:
          "Продаж Донат-послуг можлива лише на нашому сайті в Особистому кабінеті та Онлайн-магазині. Поповнення Донат-рахунку можливе лише з нашого сайту! Ми не здійснюємо поповнення іншими способами та на інших ресурсах Інтернету!",
      },
      {
        title:
          "Адміністрація має право коригувати цей збірник правил без будь-яких повідомлень.",
      },
    ],
  },
  {
    name: "Правила поведінки гравців на сервері.",
    descriptions: [
      {
        title:
          "Гравець не має права матюкатися (включаючи і закамуфльований мат), ображати кого-небудь, понижувати гідність і т.п. (обмежений мат в локальному чаті не заборонений).",
        warning:
          "Покарання: Попередження, вилучення з сервера, мут від 6 годин або блокування облікового запису від 1 доби (в залежності від вагомості порушення)",
      },
      {
        title: "Гравець не має права ображати проект і його адміністрацію.",
        warning:
          "Покарання: Блокування облікового запису від 3 діб до постійного (в залежності від вагомості порушення)",
      },
      {
        title:
          "Гравець зобов'язаний спілкуватися між гравцями проекту виключно на українській мові (випадкове написання слова не за тією розкладкою або використання непереводимих слів не вважається порушенням).",
        warning:
          "Покарання: Попередження, вилучення з сервера або мут від 3 годин (в залежності від вагомості порушення)",
      },
      {
        title:
          "Гравець не має права руйнувати (гриферити) чужі будівлі (виключення - додавання власником до привату або відсутність привату зовсім).",
        warning:
          "Покарання: Блокування облікового запису від 3 діб (при зловживанні та наявності вагомих доказів виняток ігнорується)",
      },
      {
        title:
          "Заборонено використання сторонніх програм, модів, трейнерів, читів, багів тощо, а також поширення інформації про них.",
        warning: "Покарання: Перманентне блокування облікового запису",
      },
      {
        title: "Заборонено створювати мультиаккаунти з метою:",
        warning:
          "Покарання: Перманентне блокування мультиакаунтів + ​​видалення можливостей, отриманих за допомогою мультиакаунтів",
      },
      {
        title: "Порушення правил проекту.",
        warning:
          "Покарання: Перманентне блокування мультиакаунтів (при зловживанні дається блокування по IP)",
      },
      {
        title: "Заборонено різке обрізання дерев.",
        warning:
          "Покарання: Попередження з проханням самостійно обрізати дерева, якщо це не допомогло, блокування облікового запису на 12 годин (якщо порушник відсутній в мережі, блокування надається без попередження і дерева обрізаються адміністрацією)",
      },
      {
        title:
          "Заборонено використовувати/продавати/роздавати/обмінюватися/зберігати предмети, які були добуті нечесним шляхом (дюп/баг), слід негайно їх знищити.",
        warning: "Покарання: Постійне блокування облікового запису",
      },
      {
        title:
          "Заборонена побудова безглуздих споруд, наприклад: цифри, слова, будинок у повітрі без опор (виключення - красиві, на думку адміністрації, споруди), стовп 1х1 висотою більше 16 блоків та інше подібне.",
        warning:
          "Покарання: Попередження з проханням видалити споруду самостійно, якщо це не допомогло, блокування облікового запису на 1 добу (якщо порушник відсутній в мережі, блокування надається без попередження і споруда видаляється адміністрацією)",
      },
      {
        title:
          "Заборонено встановлювати свою або використовувати чужу точку дому або варпа, якщо телепортування на цю точку може призвести до смерті гравця або завдання йому шкоди.",
        warning:
          "Покарання: Блокування облікового запису на 3 доби + видалення точки телепортації",
      },
      {
        title:
          "Заборонено безглузде розливання води, лави та іншого, посадка дерев, які заважають чужому привату, а також розлив рідин над чужим приватом та інше, що може завдати шкоди іншому гравцю.",
        warning:
          "Покарання: Блокування облікового запису на 3 доби + видалення дерев/розлитої рідини/іншого подібного",
      },
      {
        title: "Заборонений торгівля ресурсами між гравцями за реальні гроші.",
        warning:
          "Покарання: Постійне блокування облікових записів (дві сторони)",
      },
      {
        title:
          "Заборонено умисне вбивство гравця, а також завдання йому шкоди будь-яким способом в захищеній від PvP території (розповсюджується на умисне видалення регіону з метою вбивства).",
        warning: "Покарання: Блокування облікового запису на 3 доби",
      },
      {
        title:
          "Заборонений спам, капс (повідомлення, на 70% і більше складені з букв у верхньому регістрі), флуд (також флуд командами, наприклад, за допомогою /me, /call і т.п.), провокація інших гравців на флуд.",
        warning:
          "Покарання: Попередження, вилучення з сервера, мут на 3 години або блокування облікового запису на 6 годин (в залежності від вагомості порушення)",
      },
      {
        title: "Заборонений расизм, нацизм, розпал міжнаціональної ворожнечі.",
        warning: "Покарання: Блокування облікового запису на 3 доби",
      },
      {
        title:
          "Заборонене згадування та реклама сторонніх проектів, сайтів (дозволені особисті посилання в помірній кількості в локальному чаті).",
        warning:
          "Покарання: Мут на 1 добу (при згадуванні) або блокування облікового запису на 3 доби (при рекламі)",
      },
      {
        title:
          "Заборонено прохання про щось від адміністрації проекту, а також заважання їй і відволікання її від роботи.",
        warning:
          "Покаранняание: Попередження, вилучення з сервера, мут на 1 годину або блокування облікового запису на 3 години (в залежності від вагомості порушення)",
      },
      {
        title: "Заборонено сперечання дій та поступків адміністрації в грі.",
        warning: "Покарання: Блокування облікового запису на 3 доби",
      },
      {
        title:
          "Заборонено проникати на чужу територію, потрапляння на яку можливе лише за допомогою компаса, телепортації за координатами, бага і т.д. (розповсюджується також на регіони з прапорцем `entry`).",
        warning:
          "Покарання: Телепортація на спавн та попередження, при повторному порушенні блокування облікового запису на 6 годин",
      },
      {
        title: "Заборонено образа родичів, батьків.",
        warning: "Покарання: Блокування облікового запису на 3 доби",
      },
      {
        title: "Заборонено образа родичів, батьків.",
        warning:
          "Покарання: Попередження з проханням самостійно прибрати ями, якщо це не допомогло, блокування облікового запису на 1 добу (якщо порушника немає в мережі, блокування надається без попередження і ями прибираються адміністрацією)",
      },
      {
        title:
          "Заборонено гравцям, які купили послугу налаштування чату, встановлювати префікси, що нагадують префікси адміністрації або містять нецензурні слова та образи (всі кольори префіксів, доступні в особистому кабінеті, дозволені).",
        warning:
          "Покарання: Прохання про зміну префікса, якщо воно не допомогло, блокування облікового запису на 1 добу + видалення префікса",
      },
      {
        title:
          "Заборонено гравцям використовувати дуже складні RedStone схеми, фабрики, машини, механізми і т.д., які надмірно навантажують серверну машину.",
        warning:
          "Покарання: Блокування облікового запису на 3 доби + знищення джерела навантаження",
      },
      {
        title:
          "Заборонено гравцям видаавати себе за адміністрацію, коли такими не є.",
        warning: "Покарання: Блокування облікового запису на 3 доби",
      },
      {
        title:
          "Заборонено встановлювати образливі, нецензурні та інші подібні скини і плащі.",
        warning:
          "Покарання: Прохання про зміну скина або плаща, якщо воно не допомогло, блокування облікового запису на 1 добу + видалення скина або плаща",
      },
      {
        title:
          "Заборонено використання ніків, на 90% і більше складених з цифр, ніків, схожих на ніки адміністрації або містять нецензурну лексику або образи.",
        warning: "Покаранняание: Постійне блокування облікового запису",
      },
      {
        title:
          "Заборонено гравцям VIP, Premium і Deluxe встановлювати свої варпи, розширені прапори та блоки, доступні тільки їм, для інших гравців, які не мають на це можливостей.",
        warning:
          "Покарання: Блокування облікового запису на 3 доби (з обох сторін) + видалення прапорців/варпів/блоків.",
      },
      {
        title:
          "Заборонено створювати привати, які заважають ігровому процесу інших гравців (великий приват висотою в пару блоків, приват над чужим приватом і т.д.).",
        warning:
          "Покарання: Блокування облікового запису на 3 доби + видалення привату.",
      },
      {
        title:
          "Заборонено вводити адміністрацію в оману, давати хибні свідчення, поширювати неправдиву/непідтверджену ігрову інформацію.",
        warning: "Блокування облікового запису на 3 доби.",
      },
      {
        title:
          "Заборонено проводити масові роздачі з великою кількістю ресурсів.",
        warning:
          "Покарання: Постійне блокування облікового запису (організатор) або блокування облікового запису на 3 доби + конфіскація речей з роздачі (учасник)",
      },
      {
        title: "Заборонено обманювати анти-AFK систему.",
        warning:
          "Покарання: Блокування облікового запису на 1 добу + знищення анти-AFK машини (при наявності)",
      },
      {
        title:
          "Заборонено порушувати правила офіційних PvP арен та івентів, проводжених адміністрацією.",
        warning: "Покарання: Блокування облікового запису на 3 години",
      },
      {
        title: "Заборонено залишати відкритими ями після роботи кар'єру.",
        warning:
          "Покарання: Попередження з проханням закрити ями самостійно, якщо це не допомогло, блокування облікового запису на 1 добу (якщо порушника немає в мережі, блокування надається без попередження і ями закриваються адміністрацією)",
      },
      {
        title:
          "Заборонено встановлення надмірної кількості в одному регіоні (регіони, розташовані поруч один з одним зі схожим списком учасників, вважаються за один регіон).",
        warning:
          "Покарання: Знищення всіх зайвих механізмів (при зловживанні накладається блокування на 3 доби)",
      },
      {
        title:
          "Заборонено будувати безкоштовні зарядки та майданчики досвіду, до яких можуть мати доступ гравці, які не є у їх приваті.",
        warning:
          "Покарання: Знищення доступу до зарядок або майданчиків, якщо це неможливо, їх знищення",
      },
      {
        title:
          "Заборонено здійснювати дії, спрямовані на порушення економіки сервера.",
        warning:
          "Покарання: Блокування облікового запису на 3 доби + усунення можливості повторення цих дій",
      },
      {
        title:
          "Заборонено спрямоване встановлення механізмів і будівництво будинка в одному чанку, які можуть перевантажити його і спричинити лаги.",
        warning:
          "Покарання: Прохання перенести частину механізмів / перебудувати будинок (це може бути виконано адміністрацією), щоб уникнути перевантаження конкретного чанка; якщо це ігнорується, чанк регенерується",
      },
      {
        title:
          "Заборонено встановлення публічної точки дому або варпа на території, яка може спричинити лаги або краші для гравців через високе навантаження.",
        warning:
          "Покарання: Прохання прибрати точку телепортації (це може бути виконано адміністрацією) або перенести її на менш навантажену територію (при зловживанні накладається блокування на 1 добу)",
      },
      {
        title:
          "Заборонено Deluxe гравцям використовувати можливість необмежено перебувати в AFK з метою завантаження чужих регіонів, окрім своїх (не забороняється завантажувати чужі регіони, якщо при цьому одночасно не захоплюються свої).",
        warning:
          "Покарання: Блокування облікового запису на 3 доби (якщо завантаження відбувається проти волі або без відома Deluxe гравця, то блокування отримує одна сторона, інакше - обидві) + регенерація чужих завантажуваних регіонів",
      },
    ],
  },
  {
    name: "Права і обов'язки модераторів / хелперів",
    descriptions: [
      {
        title:
          "Кожен модератор/хелпер зобов'язаний вміти давати звіт про свої дії будь-якому членові адміністрації.",
      },
      {
        title:
          "Модератор/хелпер сервера не має права блокувати/мішати/втручатися/телепортувати і т.п. гравця, до якого відчуває ненависть, зло та подібне.",
      },
      {
        title:
          "Модератор/хелпер сервера не має права зловживати своїми правами на користь себе, на користь друзів або на користь третьої особи.",
      },
      {
        title:
          "Модератор/хелпер сервера не має права без вагомої на те причини телепортувати гравця до себе.",
      },
      {
        title:
          "Модератор/хелпер сервера не має права блокувати гравця без вагомої на те причини.",
      },
      {
        title:
          "Модератор/хелпер сервера не має права кікати гравця з сервера і мутити його без причини на це.",
      },
      {
        title:
          "Модератор/хелпер сервера зобов'язаний контролювати гральний процес і вчасно запобігати різним інцидентам, які можуть призвести до порушення цього збірника правил.",
      },
      {
        title:
          "Модератор/хелпер сервера може бути знятий з посади, якщо він відсутній в грі більше тижня без сповіщення про це адміністрації.",
      },
      {
        title:
          "Модератор/хелпер сервера не має права ігнорувати укази адміністрації сервера без вагомої на те причини.",
      },
      {
        title:
          "Модератор/хелпер сервера зобов'язаний бути комунікабельним, грамотним, вихованим та толерантним щодо всіх гравців.",
      },
      {
        title:
          "Модератор/хелпер сервера може бути знятий в будь-який момент з посади без попереджень з боку адміністрації.",
      },
      {
        title:
          "Модератор/хелпер сервера має повне право видавати блокування гравцю на підставі логів без надання скріншотів, відеозаписів та доказів.",
      },
      {
        title:
          "Модератор/хелпер зобов'язаний вказувати посилання на відповідний пункт цих правил або адекватну причину блокування.",
      },
      {
        title:
          "Модератор/хелпер сервера не має права передавати своє майно кому-небудь після переходу на інший сервер.",
      },
      {
        title:
          "Модератор/хелпер сервера не має права втручатися в гральний процес інших гравців без вагомої на те причини.",
      },
    ],
  },
  {
    name: "",
    descriptions: [
      {
        title:
          "Модератор/хелпер має повне право змінювати тривалість блокування на свій розсуд, але не більше дворазового збільшення/зменшення рекомендованих термінів, зазначених у правилах.",
      },
      {
        title:
          "У разі порушення кількох пунктів правил тривалості блокувань можуть сумуватися. Адміністратор має повне право змінювати тривалість блокування на власний розсуд, незалежно від правил сайту.",
      },
      {
        title:
          "Адміністратор має повне право змінювати тривалість блокування на власний розсуд, незалежно від правил сайту.",
      },
    ],
  },
];

export const news = [
  {
    title: "Update 2023",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nobis voluptates eaque reiciendis dicta labore, autem quia magni quas saepe veritatis minus at dolor unde mollitia cumque iure repellendus iusto.",
    image:
      "https://www.minecraft.net/content/dam/games/minecraft/key-art/Vanilla-PMP_Collection-Carousel-0_Update-Aquatic_1280x768.jpg",
  },
  {
    title: "Update 2024",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nobis voluptates eaque reiciendis dicta labore, autem quia magni quas saepe veritatis minus at dolor unde mollitia cumque iure repellendus iusto.",
    image:
      "https://www.minecraft.net/content/dam/games/minecraft/key-art/Vanilla-PMP_Collection-Carousel-0_Update-Aquatic_1280x768.jpg",
  },
  {
    title: "Update 2025",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nobis voluptates eaque reiciendis dicta labore, autem quia magni quas saepe veritatis minus at dolor unde mollitia cumque iure repellendus iusto.",
    image:
      "https://www.minecraft.net/content/dam/games/minecraft/key-art/Vanilla-PMP_Collection-Carousel-0_Update-Aquatic_1280x768.jpg",
  },
  {
    title: "Update 2026",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nobis voluptates eaque reiciendis dicta labore, autem quia magni quas saepe veritatis minus at dolor unde mollitia cumque iure repellendus iusto.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nobis voluptates eaque reiciendis dicta labore, autem quia magni quas saepe veritatis minus at dolor unde mollitia cumque iure repellendus iustoLorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nobis voluptates eaque reiciendis dicta labore, autem quia magni quas saepe veritatis minus at dolor unde mollitia cumque iure repellendus iustoLorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nobis voluptates eaque reiciendis dicta labore, autem quia magni quas saepe veritatis minus at dolor unde mollitia cumque iure repellendus iustoLorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nobis voluptates eaque reiciendis dicta labore, autem quia magni quas saepe veritatis minus at dolor unde mollitia cumque iure repellendus iusto Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nobis voluptates eaque reiciendis dicta labore, autem quia magni quas saepe veritatis minus at dolor unde mollitia cumque iure repellendus iusto Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nobis voluptates eaque reiciendis dicta labore, autem quia magni quas saepe veritatis minus at dolor unde mollitia cumque iure repellendus iustoLorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nobis voluptates eaque reiciendis dicta labore, autem quia magni quas saepe veritatis minus at dolor unde mollitia cumque iure repellendus iusto Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nobis voluptates eaque reiciendis dicta labore, autem quia magni quas saepe veritatis minus at dolor unde mollitia cumque iure repellendus iusto Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nobis voluptates eaque reiciendis dicta labore, autem quia magni quas saepe veritatis minus at dolor unde mollitia cumque iure repellendus iusto Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nobis voluptates eaque reiciendis dicta labore, autem quia magni quas saepe veritatis minus at dolor unde mollitia cumque iure repellendus iusto Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nobis voluptates eaque reiciendis dicta labore, autem quia magni quas saepe veritatis minus at dolor unde mollitia cumque iure repellendus iusto",
    image:
      "https://www.minecraft.net/content/dam/games/minecraft/key-art/Vanilla-PMP_Collection-Carousel-0_Update-Aquatic_1280x768.jpg",
  },
  {
    title: "Update 2026",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nobis voluptates eaque reiciendis dicta labore, autem quia magni quas saepe veritatis minus at dolor unde mollitia cumque iure repellendus iusto.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nobis voluptates eaque reiciendis dicta labore, autem quia magni quas saepe veritatis minus at dolor unde mollitia cumque iure repellendus iustoLorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nobis voluptates eaque reiciendis dicta labore, autem quia magni quas saepe veritatis minus at dolor unde mollitia cumque iure repellendus iustoLorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nobis voluptates eaque reiciendis dicta labore, autem quia magni quas saepe veritatis minus at dolor unde mollitia cumque iure repellendus iustoLorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nobis voluptates eaque reiciendis dicta labore, autem quia magni quas saepe veritatis minus at dolor unde mollitia cumque iure repellendus iusto Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nobis voluptates eaque reiciendis dicta labore, autem quia magni quas saepe veritatis minus at dolor unde mollitia cumque iure repellendus iusto Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nobis voluptates eaque reiciendis dicta labore, autem quia magni quas saepe veritatis minus at dolor unde mollitia cumque iure repellendus iustoLorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nobis voluptates eaque reiciendis dicta labore, autem quia magni quas saepe veritatis minus at dolor unde mollitia cumque iure repellendus iusto Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nobis voluptates eaque reiciendis dicta labore, autem quia magni quas saepe veritatis minus at dolor unde mollitia cumque iure repellendus iusto Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nobis voluptates eaque reiciendis dicta labore, autem quia magni quas saepe veritatis minus at dolor unde mollitia cumque iure repellendus iusto Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nobis voluptates eaque reiciendis dicta labore, autem quia magni quas saepe veritatis minus at dolor unde mollitia cumque iure repellendus iusto Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nobis voluptates eaque reiciendis dicta labore, autem quia magni quas saepe veritatis minus at dolor unde mollitia cumque iure repellendus iusto",
    image:
      "https://www.minecraft.net/content/dam/games/minecraft/key-art/Vanilla-PMP_Collection-Carousel-0_Update-Aquatic_1280x768.jpg",
  },
  {
    title: "Update 2026",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nobis voluptates eaque reiciendis dicta labore, autem quia magni quas saepe veritatis minus at dolor unde mollitia cumque iure repellendus iusto.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nobis voluptates eaque reiciendis dicta labore, autem quia magni quas saepe veritatis minus at dolor unde mollitia cumque iure repellendus iustoLorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nobis voluptates eaque reiciendis dicta labore, autem quia magni quas saepe veritatis minus at dolor unde mollitia cumque iure repellendus iustoLorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nobis voluptates eaque reiciendis dicta labore, autem quia magni quas saepe veritatis minus at dolor unde mollitia cumque iure repellendus iustoLorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nobis voluptates eaque reiciendis dicta labore, autem quia magni quas saepe veritatis minus at dolor unde mollitia cumque iure repellendus iusto Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nobis voluptates eaque reiciendis dicta labore, autem quia magni quas saepe veritatis minus at dolor unde mollitia cumque iure repellendus iusto Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nobis voluptates eaque reiciendis dicta labore, autem quia magni quas saepe veritatis minus at dolor unde mollitia cumque iure repellendus iustoLorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nobis voluptates eaque reiciendis dicta labore, autem quia magni quas saepe veritatis minus at dolor unde mollitia cumque iure repellendus iusto Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nobis voluptates eaque reiciendis dicta labore, autem quia magni quas saepe veritatis minus at dolor unde mollitia cumque iure repellendus iusto Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nobis voluptates eaque reiciendis dicta labore, autem quia magni quas saepe veritatis minus at dolor unde mollitia cumque iure repellendus iusto Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nobis voluptates eaque reiciendis dicta labore, autem quia magni quas saepe veritatis minus at dolor unde mollitia cumque iure repellendus iusto Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nobis voluptates eaque reiciendis dicta labore, autem quia magni quas saepe veritatis minus at dolor unde mollitia cumque iure repellendus iusto",
    image:
      "https://www.minecraft.net/content/dam/games/minecraft/key-art/Vanilla-PMP_Collection-Carousel-0_Update-Aquatic_1280x768.jpg",
  },
];
