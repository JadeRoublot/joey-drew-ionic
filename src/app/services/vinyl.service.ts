import { Injectable } from '@angular/core';
import{Subject, Observable } from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Vinyl } from '../models/vinyl.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VinylService {

  constructor() { }
}
