import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {from } from 'rxjs';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import { QueComponent } from './que/que.component';
import { QuesComponent } from './ques/ques.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database'
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';

import {CrudService} from './service/crud.service';
import { BlogComponent } from './blog/blog.component'
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";
import { FormComponent } from './form/form.component';
@NgModule({
	declarations: [
		AppComponent,
		// QueComponent,
		QuesComponent,
		BlogComponent,
		FormComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		AngularFireModule.initializeApp(environment.firebaseConfig),
		AngularFireDatabaseModule,
		AngularFirestoreModule,
		CKEditorModule,
	],
	providers: [CrudService],
	bootstrap: [AppComponent],
})
export class AppModule {}
