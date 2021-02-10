/** @format */

import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";
import { CrudService } from "../service/crud.service";

import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
@Component({
	selector: "app-blog",
	templateUrl: "./blog.component.html",
	styleUrls: ["./blog.component.css"],
})
export class BlogComponent implements OnInit {
	blogBox: FormGroup;
	constructor(
		private formbuilder: FormBuilder,
		public crudservice: CrudService
	) {
		this.blogBox = formbuilder.group({
			heading: new FormControl(),
			content: new FormControl(),
		});
	}
	public Editor = ClassicEditor;

	ngOnInit(): void {}

	post() {
		console.log(this.blogBox.value);
		this.crudservice.create_Newblog(this.blogBox.value);
	}
}

