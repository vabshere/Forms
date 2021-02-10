import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore'


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(public fireservices:AngularFirestore) { }

  create_Newquestion(Record:any){
    return this.fireservices.collection('users').add(Record);
  }
  create_Newblog(Blog:any){
    return this.fireservices.collection('Blog Entries').add(Blog);
  }

}
