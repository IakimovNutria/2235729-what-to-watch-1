import Film from '../types/film';

const films: Film[] = [
  {
    id: 1,
    name: 'Fantastic Beasts: The Crimes of Grindelwald',
    genre: 'Drama',
    released: 2014,
    previewImage: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    posterImage: 'img/the-grand-budapest-hotel-poster.jpg',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    runTime: 210,
    description: 'Very fantastic beasts',
    director: 'Fantastic Beast',
    rating: 8.9,
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe'],
    backgroundImage: 'img/bg-the-grand-budapest-hotel.jpg',
    backgroundColor: 'green',
    isFavorite: false,
    scoresCount: 1700
  },
  {
    id: 2,
    name: 'Bohemian Rhapsody',
    genre: 'Biopic',
    released: 2015,
    previewImage: 'img/bohemian-rhapsody.jpg',
    posterImage: 'img/the-grand-budapest-hotel-poster.jpg',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    runTime: 200,
    description: 'sex, drugs, roc\'n\'roll',
    director: 'Freddy',
    rating: 8.9,
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe'],
    backgroundImage: 'img/bg-the-grand-budapest-hotel.jpg',
    backgroundColor: 'green',
    isFavorite: false,
    scoresCount: 1600
  },
  {
    id: 3,
    name: 'Macbeth',
    genre: 'Drama',
    released: 2016,
    previewImage: 'img/macbeth.jpg',
    posterImage: 'img/the-grand-budapest-hotel-poster.jpg',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    runTime: 150,
    description: 'Oh, pretty woman',
    director: 'woman',
    rating: 8.9,
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe'],
    backgroundImage: 'img/bg-the-grand-budapest-hotel.jpg',
    backgroundColor: 'green',
    isFavorite: false,
    scoresCount: 1500
  },
  {
    id: 4,
    name: 'Aviator',
    genre: 'Drama',
    released: 2003,
    previewImage: 'img/aviator.jpg',
    posterImage: 'img/the-grand-budapest-hotel-poster.jpg',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    runTime: 170,
    description: 'He is flying',
    director: 'atacking helicopter',
    rating: 8.9,
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe'],
    backgroundImage: 'img/bg-the-grand-budapest-hotel.jpg',
    backgroundColor: 'green',
    isFavorite: false,
    scoresCount: 1400
  },
  {
    id: 5,
    name: 'We need to talk about Kevin',
    genre: 'Comedy',
    released: 2011,
    previewImage: 'img/we-need-to-talk-about-kevin.jpg',
    posterImage: 'img/the-grand-budapest-hotel-poster.jpg',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    runTime: 250,
    description: 'We really need to do this',
    director: 'Kevin',
    rating: 8.9,
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe'],
    backgroundImage: 'img/bg-the-grand-budapest-hotel.jpg',
    backgroundColor: 'blue',
    isFavorite: false,
    scoresCount: 1300
  },
  {
    id: 6,
    name: 'What We Do in the Shadows',
    genre: 'Comedy',
    released: 2019,
    previewImage: 'img/what-we-do-in-the-shadows.jpg',
    posterImage: 'img/the-grand-budapest-hotel-poster.jpg',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    runTime: 210,
    description: 'What?',
    director: 'Waititi',
    rating: 8.9,
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe'],
    backgroundImage: 'img/bg-the-grand-budapest-hotel.jpg',
    backgroundColor: 'blue',
    isFavorite: false,
    scoresCount: 1200
  },
  {
    id: 7,
    name: 'Revenant',
    genre: 'Comedy',
    released: 2019,
    previewImage: 'img/revenant.jpg',
    backgroundImage: 'img/the-grand-budapest-hotel-poster.jpg',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    runTime: 210,
    description: 'Leo is Revenant',
    director: 'Titanik',
    rating: 8.9,
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe'],
    posterImage: 'img/the-grand-budapest-hotel-poster.jpg',
    backgroundColor: 'red',
    isFavorite: false,
    scoresCount: 1000
  },
  {
    id: 8,
    name: 'Johnny English',
    genre: 'Comedy',
    released: 2019,
    previewImage: 'img/johnny-english.jpg',
    posterImage: 'img/the-grand-budapest-hotel-poster.jpg',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    runTime: 210,
    description: 'Johnny English is veri cool',
    director: 'Freddy British',
    rating: 8.9,
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe'],
    backgroundImage: 'img/bg-the-grand-budapest-hotel.jpg',
    backgroundColor: 'yellow',
    isFavorite: false,
    scoresCount: 1100
  }
];

export default films;
