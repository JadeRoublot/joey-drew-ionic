import { Injectable } from '@angular/core';
import{Subject, Observable } from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Secret } from '../models/secret.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SecretService {

  constructor() { }
}
