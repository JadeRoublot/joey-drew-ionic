import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.page.html',
  styleUrls: ['./movie-list.page.scss'],
})
export class MovieListPage implements OnInit {
  movies = [
     {
      id: 1 ,
       title : 'Beetlejuice',
       img : 'https://www.filmspourenfants.net/wp-content/uploads/2019/11/beetlejuice-a-333x500.jpg',
      param1 : 'Réalisateur : Tim Burton',
      param2 : 'Date de sortie : 14 décembre 1988 '
     },
     {
       id: 2 ,
       title : 'The hunchback of notre dame',
        img : 'https://www.laboiteverte.fr/wp-content/uploads/2014/01/1996-The-Hunchback-of-Notre-Dame-Poster.jpg',
      param1 : 'Réalisateurs : Gary Trousdale, Kirk Wise',
       param2 : 'Date de sortie : 27 novembre 1996'
     },
     {
       id: 3 ,
       title : 'Nightmare before christmas',
        img : 'https://m.media-amazon.com/images/M/MV5BNWE4OTNiM2ItMjY4Ni00ZTViLWFiZmEtZGEyNGY2ZmNlMzIyXkEyXkFqcGdeQXVyMDU5NDcxNw@@._V1_.jpg',
       param1 : 'Réalisateur : Henry Selick',
       param2 : 'Date de sortie : 7 décembre 1994'
     },
     {
       id: 4 ,
       title : 'Atlantis the lost empire',
        img : 'https://upload.wikimedia.org/wikipedia/en/d/de/Atlantis_The_Lost_Empire_poster.jpg',
       param1 : 'Réalisateurs : Kirk Wise, Gary Trousdale',
       param2 : 'Date de sortie : 28 novembre 2001'
     },
     {
       id: 5 ,
       title : 'Van helsing',
        img : 'https://fr.web.img6.acsta.net/medias/nmedia/18/35/19/42/18377156.jpg',
       param1 : 'Réalisateur : Stephen Sommers',
       param2 : 'Date de sortie : 5 mai 2004'
     },
     {
       id: 6 ,
       title : 'Edward scissorhands',
        img : 'https://m.media-amazon.com/images/I/91WzSC0TGOL._AC_SY679_.jpg',
       param1 : 'Réalisateur : Tim Burton',
       param2 : 'Date de sortie : 10 avril 1991'
     },
     {
       id: 7 ,
       title : 'Corpse Bride',
        img : 'https://m.media-amazon.com/images/I/71eSEXWCc2L._AC_SY606_.jpg',
       param1 : 'Réalisateurs : Tim Burton, Mike Johnson',
       param2 : 'Date de sortie : 19 octobre 2005'
     },
     {
       id: 8 ,
       title : 'Dracula untold',
       img : 'https://fr.web.img6.acsta.net/pictures/14/06/23/12/21/047909.jpg',
       param1 : 'Réalisateur : Gary Shore',
       param2 : 'Date de sortie : 1 octobre 2014'
     },
     {
       id: 9 ,
       title : 'Coraline',
        img : 'https://fr.web.img2.acsta.net/medias/nmedia/18/65/68/82/19116343.jpg',
       param1 : 'Réalisateur : Henry Selick',
       param2 : 'Date de sortie : 10 juin 2009 '
     }
   ];
  constructor() { }

  ngOnInit() {
  }

}
