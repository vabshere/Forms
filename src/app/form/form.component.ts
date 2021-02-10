import { Component, OnInit } from '@angular/core';
import { FormArray } from "@angular/forms";
import { CrudService } from "../service/crud.service";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
	choice:string = "mcq";
	mcq:string = "mcq";
	file:string ="file";
	text:string ="text";
	questionBox: FormGroup;
	constructor(public crudservice: CrudService, private qfb: FormBuilder) {
		this.questionBox = qfb.group({
			question: this.qfb.array([
				this.qfb.group({
					questionNo: "1",
					questionBody: "",
					optionOne: "1",
					optionTwo: "1",
					optionThree: "1",
					optionFour: "1",
					answer: "1",
				}),
			]),
		});
	}

	ngOnInit(): void {

		this.questionBox.get("question")?.valueChanges.subscribe(data=>{
			console.log(data);
		})

		this.questionBox.get("question")?.setValue([
			{
				questionNo: ["342342"],
				questionBody: [""],
				optionOne: ["1"],
				optionTwo: ["1"],
				optionThree: ["1"],
				optionFour: ["1"],
				answer: ["1"],
			},
		]);
		console.log(this.questionBox.get("question")?.value);
	}

	get question() {
		return this.questionBox.get("question") as FormArray;
	}
	submit() {
		this.crudservice
			.create_Newquestion(Object.assign({}, this.question))
	}

	getValues(val: any) {
		if (val.value.first !== "") {
			console.warn(val.value);
		}
	}
	done() {
		const questionlen = this.question.length;
		const newquestion = this.qfb.group({
			questionNo: questionlen + 1,
			questionBody: "",
			optionOne: "1",
			optionTwo: "1",
			optionThree: "1",
			optionFour: "1",
			answer: "1",
		});
		this.question.push(newquestion);
	}

	up(change:any){
		const id = change.target.id;
		// console.log(id);


		if (this.questionBox.get("question") != null){
 
			// this.questionBox.get("question").value[id].questionBody += "1";
		}
	}
	changefile(event:Event){
		this.choice="file";
		console.log(this.file);
	}
	//  var questions: string ;
}

