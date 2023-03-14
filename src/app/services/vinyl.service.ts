import { Injectable } from '@angular/core';
import{Subject, Observable } from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Vinyl } from '../models/vinyl.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VinylService {

  private dbPath ='/vinyls';
  vinylsRef : AngularFirestoreCollection<Vinyl>;
  private vinyls?: any;
  vinylSubject = new Subject<any[]>();

  constructor(private db: AngularFirestore) { 
    this.vinylsRef = db.collection(this.dbPath);
  }

  getAllVinyls() : any {
    return this.vinylsRef.snapshotChanges().pipe(
      map((changes:any) => {
        return changes.map((doc:any) => {
          return ({id: doc.payload.doc.id, ...doc.payload.doc.data()})
        })
      })
    );
  }

  saveNewVinyl(vinyl: Vinyl): any {
    return new Observable(obs => {
      this.vinylsRef.add({...vinyl}).then(() => {
        obs.next();
      })
    })
  }
  get(id: any): any {
    return new Observable(obs => {
      this.vinylsRef.doc(id).get().subscribe(res => {
        obs.next({id: res.id, ...res.data()});
      });
    });
  }

  update(vinyl: Vinyl) {
    return new Observable(obs => {
      this.vinylsRef.doc(vinyl.id).update(vinyl);
      obs.next();
    });
  }

  delete(id: any) {
    this.vinylsRef.doc(id).delete();
  }
}
