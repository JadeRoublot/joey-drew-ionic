export class Movie {
    id?: string;
    title: string;
    releaseDate: string;
    productor: string;
    realisator: string;
    synopsis: string;
    musicComposeur: string;
    link: string;
    affiche: string;
    nature: boolean;
    
  
    constructor() {
        this.title = '';
        this.releaseDate ='';
        this.productor = '';
        this.realisator = '';
        this.synopsis = '';
        this.musicComposeur = '';
        this.link = '';
        this.affiche = '';
        this.nature = false;
       
    }
}