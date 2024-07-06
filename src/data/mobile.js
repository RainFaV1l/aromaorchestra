export default [
    {
      id: 1,
      name: 'Главная',
      sublist: [
          {
            name: 'Популярные товары',
            route: '/#popular'
          },
          {
              name: 'Наши преимущества',
              route: '/#benefits'
          },
          {
              name: 'Отзывы',
              route: '/#reviews'
          },
          {
              name: 'Контакты',
              route: '/#contacts'
          },
      ],
      isOpen: false,
    },
    {
        id: 2,
        name: 'О нас',
        sublist: [
            {
                name: 'О бренде',
                route: '/about#about'
            },
            {
                name: 'Наша гордость',
                route: '/about#benefits'
            },
        ],
        isOpen: false,
    },
    {
        id: 3,
        name: 'Каталог',
        sublist: [
            {
                name: 'Свечи',
                route: '/catalog#candles'
            },
            {
                name: 'Диффузоры',
                route: '/catalog#diffusers'
            },
        ],
        isOpen: false,
    },
    {
        id: 4,
        name: 'Корзина',
        sublist: [
            {
                name: 'Корзина',
                route: '/cart#cart'
            },
            {
                name: 'Оформление',
                route: '/cart#order'
            },
        ],
        isOpen: false,
    },
    {
        id: 5,
        name: 'Избранное',
        route: '/favorites',
    },
]