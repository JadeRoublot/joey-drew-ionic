import { Injectable } from '@angular/core';
import{Subject, Observable } from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Movie } from '../models/movie.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private dbPath ='/movies';
  moviesRef : AngularFirestoreCollection<Movie>;
  private movies?: any;
  movieSubject = new Subject<any[]>();
 
  constructor(private db: AngularFirestore) { 
    this.moviesRef = db.collection(this.dbPath);
  }

  getAllMovies() : any {
    return this.moviesRef.snapshotChanges().pipe(
      map((changes:any) => {
        return changes.map((doc:any) => {
          return ({id: doc.payload.doc.id, ...doc.payload.doc.data()})
        })
      })
    );
  }

  saveNewMovie(movie: Movie): any {
    return new Observable(obs => {
      this.moviesRef.add({...movie}).then(() => {
        obs.next();
      })
    })
  }

  get(id: any): any {
    return new Observable(obs => {
      this.moviesRef.doc(id).get().subscribe(res => {
        obs.next({id: res.id, ...res.data()});
      });
    });
  }

  update(movie: Movie) {
    return new Observable(obs => {
      this.moviesRef.doc(movie.id).update(movie);
      obs.next();
    });
  }

  delete(id: any) {
    this.moviesRef.doc(id).delete();
  }

}
