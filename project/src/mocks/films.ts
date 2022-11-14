import Film from '../types/film';

const films: Film[] = [
  {
    id: 1,
    title: 'Fantastic Beasts: The Crimes of Grindelwald',
    genre: 'Drama',
    releaseDate: 2014,
    smallCardSrcImage: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    posterSrcImage: 'img/the-grand-budapest-hotel-poster.jpg',
    srcVideo: 'video/sample-10s.mp4',
    srcPreviewVideo: 'video/sample-10s.mp4',
    duration: 210,
    description: 'Very fantastic beasts',
    director: 'Fantastic Beast',
    rating: 8.9,
    similarFilms: [],
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe'],
    srcBgImage: 'img/bg-the-grand-budapest-hotel.jpg'
  },
  {
    id: 2,
    title: 'Bohemian Rhapsody',
    genre: 'Biopic',
    releaseDate: 2015,
    smallCardSrcImage: 'img/bohemian-rhapsody.jpg',
    posterSrcImage: 'img/the-grand-budapest-hotel-poster.jpg',
    srcVideo: 'video/sample-10s.mp4',
    srcPreviewVideo: 'video/sample-10s.mp4',
    duration: 200,
    description: 'sex, drugs, roc\'n\'roll',
    director: 'Freddy',
    rating: 8.9,
    similarFilms: [],
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe'],
    srcBgImage: 'img/bg-the-grand-budapest-hotel.jpg'
  },
  {
    id: 3,
    title: 'Macbeth',
    genre: 'Drama',
    releaseDate: 2016,
    smallCardSrcImage: 'img/macbeth.jpg',
    posterSrcImage: 'img/the-grand-budapest-hotel-poster.jpg',
    srcVideo: 'video/sample-10s.mp4',
    srcPreviewVideo: 'video/sample-10s.mp4',
    duration: 150,
    description: 'Oh, pretty woman',
    director: 'woman',
    rating: 8.9,
    similarFilms: [],
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe'],
    srcBgImage: 'img/bg-the-grand-budapest-hotel.jpg'
  },
  {
    id: 4,
    title: 'Aviator',
    genre: 'Drama',
    releaseDate: 2003,
    smallCardSrcImage: 'img/aviator.jpg',
    posterSrcImage: 'img/the-grand-budapest-hotel-poster.jpg',
    srcVideo: 'video/sample-10s.mp4',
    srcPreviewVideo: 'video/sample-10s.mp4',
    duration: 170,
    description: 'He is flying',
    director: 'atacking helicopter',
    rating: 8.9,
    similarFilms: [],
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe'],
    srcBgImage: 'img/bg-the-grand-budapest-hotel.jpg'
  },
  {
    id: 5,
    title: 'We need to talk about Kevin',
    genre: 'Comedy',
    releaseDate: 2011,
    smallCardSrcImage: 'img/we-need-to-talk-about-kevin.jpg',
    posterSrcImage: 'img/the-grand-budapest-hotel-poster.jpg',
    srcVideo: 'video/sample-10s.mp4',
    srcPreviewVideo: 'video/sample-10s.mp4',
    duration: 250,
    description: 'We really need to do this',
    director: 'Kevin',
    rating: 8.9,
    similarFilms: [],
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe'],
    srcBgImage: 'img/bg-the-grand-budapest-hotel.jpg'
  },
  {
    id: 6,
    title: 'What We Do in the Shadows',
    genre: 'Comedy',
    releaseDate: 2019,
    smallCardSrcImage: 'img/what-we-do-in-the-shadows.jpg',
    posterSrcImage: 'img/the-grand-budapest-hotel-poster.jpg',
    srcVideo: 'video/sample-10s.mp4',
    srcPreviewVideo: 'video/sample-10s.mp4',
    duration: 210,
    description: 'What?',
    director: 'Waititi',
    rating: 8.9,
    similarFilms: [],
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe'],
    srcBgImage: 'img/bg-the-grand-budapest-hotel.jpg'
  },
  {
    id: 7,
    title: 'Revenant',
    genre: 'Comedy',
    releaseDate: 2019,
    smallCardSrcImage: 'img/revenant.jpg',
    posterSrcImage: 'img/the-grand-budapest-hotel-poster.jpg',
    srcVideo: 'video/sample-10s.mp4',
    srcPreviewVideo: 'video/sample-10s.mp4',
    duration: 210,
    description: 'Leo is Revenant',
    director: 'Titanik',
    rating: 8.9,
    similarFilms: [],
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe'],
    srcBgImage: 'img/bg-the-grand-budapest-hotel.jpg'
  },
  {
    id: 8,
    title: 'Johnny English',
    genre: 'Comedy',
    releaseDate: 2019,
    smallCardSrcImage: 'img/johnny-english.jpg',
    posterSrcImage: 'img/the-grand-budapest-hotel-poster.jpg',
    srcVideo: 'video/sample-10s.mp4',
    srcPreviewVideo: 'video/sample-10s.mp4',
    duration: 210,
    description: 'Johnny English is veri cool',
    director: 'Freddy British',
    rating: 8.9,
    similarFilms: [],
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe'],
    srcBgImage: 'img/bg-the-grand-budapest-hotel.jpg'
  }
];

for (let i = 0; i < films.length; i++) {
  films[i].similarFilms = films.slice(0, 3);
}

export default films;
