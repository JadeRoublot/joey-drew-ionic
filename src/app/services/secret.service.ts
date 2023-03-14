import { Injectable } from '@angular/core';
import{Subject, Observable } from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Secret } from '../models/secret.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SecretService {

  private dbPath ='/secrets';
  secretsRef : AngularFirestoreCollection<Secret>;
  private secrets?: any;
  secretSubject = new Subject<any[]>();

  constructor(private db: AngularFirestore) { 
    this.secretsRef = db.collection(this.dbPath);
  }

  
  getAllSecrets() : any {
    return this.secretsRef.snapshotChanges().pipe(
      map((changes:any) => {
        return changes.map((doc:any) => {
          return ({id: doc.payload.doc.id, ...doc.payload.doc.data()})
        })
      })
    );
  }
  get(id: any): any {
    return new Observable(obs => {
      this.secretsRef.doc(id).get().subscribe(res => {
        obs.next({id: res.id, ...res.data()});
      });
    });
  }

  delete(id: any) {
    this.secretsRef.doc(id).delete();
  }
}
