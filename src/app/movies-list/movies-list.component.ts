import { Component, OnInit, ViewChild } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent implements OnInit {
  moviesList: Array<object> = [
    {
      adult: false,
      backdrop_path: '/t9nyF3r0WAlJ7Kr6xcRYI4jr9jm.jpg',
      genre_ids: [878, 28],
      id: 580489,
      original_language: 'en',
      original_title: 'Godzilla vs. Kong',
      overview:
        'In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.',
      popularity: 517.859,
      poster_path:
        'https://image.tmdb.org/t/p/w500/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg',
      release_date: '2021-03-24',
      title: 'Godzilla vs. Kong',
      video: false,
      vote_average: 7.9,
      vote_count: 7048,
    },
    {
      adult: false,
      backdrop_path: '/8Y43POKjjKDGI9MH89NW0NAzzp8.jpg',
      genre_ids: [35, 28, 12, 878],
      id: 550988,
      original_language: 'en',
      original_title: 'Free Guy',
      overview:
        'A bank teller called Guy realizes he is a background character in an open world video game called Free City that will soon go offline.',
      popularity: 8075.543,
      poster_path:
        'https://image.tmdb.org/t/p/w500/xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg',
      release_date: '2021-08-11',
      title: 'Free Guy',
      video: false,
      vote_average: 7.9,
      vote_count: 2393,
    },
    {
      adult: false,
      backdrop_path: '/VuukZLgaCrho2Ar8Scl9HtV3yD.jpg',
      genre_ids: [878, 28],
      id: 335983,
      original_language: 'en',
      original_title: 'Venom',
      overview:
        'Investigative journalist Eddie Brock attempts a comeback following a scandal, but accidentally becomes the host of Venom, a violent, super powerful alien symbiote. Soon, he must rely on his newfound powers to protect the world from a shadowy organization looking for a symbiote of their own.',
      popularity: 4019.429,
      poster_path:
        'https://image.tmdb.org/t/p/w500/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg',
      release_date: '2018-09-28',
      title: 'Venom',
      video: false,
      vote_average: 6.8,
      vote_count: 11583,
    },
    {
      adult: false,
      backdrop_path: '/aO9Nnv9GdwiPdkNO79TISlQ5bbG.jpg',
      genre_ids: [28, 12],
      id: 568620,
      original_language: 'en',
      original_title: 'Snake Eyes: G.I. Joe Origins',
      overview:
        "After saving the life of their heir apparent, tenacious loner Snake Eyes is welcomed into an ancient Japanese clan called the Arashikage where he is taught the ways of the ninja warrior. But, when secrets from his past are revealed, Snake Eyes' honor and allegiance will be tested – even if that means losing the trust of those closest to him.",
      popularity: 4019.003,
      poster_path:
        'https://image.tmdb.org/t/p/w500/uIXF0sQGXOxQhbaEaKOi2VYlIL0.jpg',
      release_date: '2021-07-22',
      title: 'Snake Eyes: G.I. Joe Origins',
      video: false,
      vote_average: 6.9,
      vote_count: 602,
    },
    {
      adult: false,
      backdrop_path: '/owraiceOKtSOa3t8sp3wA9K2Ox6.jpg',
      genre_ids: [16, 28, 12, 878],
      id: 703771,
      original_language: 'en',
      original_title: 'Deathstroke: Knights & Dragons - The Movie',
      overview:
        'The assassin Deathstroke tries to save his family from the wrath of H.I.V.E. and the murderous Jackal.',
      popularity: 3433.852,
      poster_path:
        'https://image.tmdb.org/t/p/w500/vFIHbiy55smzi50RmF8LQjmpGcx.jpg',
      release_date: '2020-08-04',
      title: 'Deathstroke: Knights & Dragons - The Movie',
      video: false,
      vote_average: 7,
      vote_count: 261,
    },
    {
      adult: false,
      backdrop_path: '/umAoDwLZMBrYeCDfbJYFRMuXWAr.jpg',
      genre_ids: [878],
      id: 681887,
      original_language: 'en',
      original_title: 'Cosmic Sin',
      overview:
        "In the year 2524, four centuries after humans started colonizing the outer planets, retired General James Ford gets called back into service when a hostile alien fleet attacks soldiers on a remote planet. The threat against mankind soon escalates into an interstellar war as Ford and a team of elite soldiers try to stop the imminent attack before it's too late.",
      popularity: 2777.645,
      poster_path:
        'https://image.tmdb.org/t/p/w500/6Wm7P6y22UZA40QuPYHyWyJ6leI.jpg',
      release_date: '2021-03-12',
      title: 'Cosmic Sin',
      video: false,
      vote_average: 4.5,
      vote_count: 323,
    },
    {
      adult: false,
      backdrop_path: '/vkIJ2QgcKMJRvi6pBW4Tr2kgLdy.jpg',
      genre_ids: [80, 53],
      id: 637534,
      original_language: 'fr',
      original_title: 'BAC Nord',
      overview:
        'A police brigade working in the dangerous northern neighborhoods of Marseille, where the level of crime is higher than anywhere else in France.',
      popularity: 2523.805,
      poster_path:
        'https://image.tmdb.org/t/p/w500/nLanxl7Xhfbd5s8FxPy8jWZw4rv.jpg',
      release_date: '2021-08-18',
      title: 'The Stronghold',
      video: false,
      vote_average: 7.7,
      vote_count: 397,
    },
    {
      adult: false,
      backdrop_path: '/dIibeeq4QMay5bTJ2vjr72IFFRo.jpg',
      genre_ids: [14, 12, 35],
      id: 589754,
      original_language: 'ru',
      original_title: 'Последний богатырь: Корень зла',
      overview:
        'Peace and tranquility have set in Belogorie. The evil was defeated and Ivan is now enjoying his well-deserved fame. He is surrounded by his family, friends and small wonders from the modern world that help him lead a comfortable life. Luckily, he has his Magic Sword to cut a gap between the worlds to get some supplies quite regularly. But when an ancient evil rises and the existence of the magic world is put to danger, Ivan has to team up with his old friends and his new rivals. They will set out on a long journey beyond the known world to find a way to defeat the enemies and to return peace to Belogorie.',
      popularity: 2290.683,
      poster_path:
        'https://image.tmdb.org/t/p/w500/5VJSIAhSn4qUsg5nOj4MhQhF5wQ.jpg',
      release_date: '2021-01-01',
      title: 'The Last Warrior: Root of Evil',
      video: false,
      vote_average: 7.1,
      vote_count: 46,
    },
    {
      adult: false,
      backdrop_path: '/kTOheVmqSBDIRGrQLv2SiSc89os.jpg',
      genre_ids: [16, 35, 10751],
      id: 639721,
      original_language: 'en',
      original_title: 'The Addams Family 2',
      overview:
        'The Addams get tangled up in more wacky adventures and find themselves involved in hilarious run-ins with all sorts of unsuspecting characters.',
      popularity: 2112.639,
      poster_path:
        'https://image.tmdb.org/t/p/w500/xYLBgw7dHyEqmcrSk2Sq3asuSq5.jpg',
      release_date: '2021-10-01',
      title: 'The Addams Family 2',
      video: false,
      vote_average: 7.8,
      vote_count: 189,
    },
    {
      adult: false,
      backdrop_path: '/5PQhNs4M3RxIqaNAdBI6mXlXyYh.jpg',
      genre_ids: [27, 14, 9648],
      id: 839436,
      original_language: 'en',
      original_title: 'Dragon Fury',
      overview:
        'A group of soldiers are taken to the mountains of Wales to investigate a strange beast.',
      popularity: 1854.392,
      poster_path:
        'https://image.tmdb.org/t/p/w500/6WcJ4cV2Y3gnTYp5zHu968TYmTJ.jpg',
      release_date: '2021-06-15',
      title: 'Dragon Fury',
      video: false,
      vote_average: 6,
      vote_count: 16,
    },
    {
      adult: false,
      backdrop_path: '/vQ9YlITvVFdbFXYX6qwTNgIP85u.jpg',
      genre_ids: [16, 28],
      id: 843241,
      original_language: 'en',
      original_title: 'Luca',
      overview:
        'Luca and his best friend Alberto experience an unforgettable summer on the Italian Riviera. But all the fun is threatened by a deeply-held secret: they are sea monsters from another world just below the water’s surface.',
      popularity: 951.238,
      poster_path:
        'https://image.tmdb.org/t/p/w500/jTswp6KyDYKtvC52GbHagrZbGvD.jpg',
      release_date: '2021-06-17',
      title: 'Luca',
      video: false,
      vote_average: 8,
      vote_count: 4757,
    },
    {
      adult: false,
      backdrop_path: '/cinER0ESG0eJ49kXlExM0MEWGxW.jpg',
      genre_ids: [28, 12, 14],
      id: 566525,
      original_language: 'en',
      original_title: 'Cruella',
      overview:
        'In 1970s London amidst the punk rock revolution, a young grifter named Estella is determined to make a name for herself with her designs. She befriends a pair of young thieves who appreciate her appetite for mischief, and together they are able to build a life for themselves on the London streets. One day, Estella’s flair for fashion catches the eye of the Baroness von Hellman, a fashion legend who is devastatingly chic and terrifyingly haute. But their relationship sets in motion a course of events and revelations that will cause Estella to embrace her wicked side and become the raucous, fashionable and revenge-bent Cruella.',
      popularity: 712.898,
      poster_path:
        'https://image.tmdb.org/t/p/w500/wToO8opxkGwKgSfJ1JK8tGvkG6U.jpg',
      release_date: '2021-05-26',
      title: 'Cruella',
      video: false,
      vote_average: 8.3,
      vote_count: 5612,
    },
  ];

  @ViewChild(MovieCardComponent) childComponent;

  dataFromChild ;

  constructor() {}

  ngOnInit(): void {
    // this.dataFromChild = this.movieCardComponent.hello; xxxxxxxx
  }

  ngAfterViewInit(){
    console.log(this.childComponent.hello)
  }

  receiveMovie(movieItem) {
    console.log('PARENT COMPONENT', movieItem);
  }
}
