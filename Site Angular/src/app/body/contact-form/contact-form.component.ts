import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HeaderComponent } from 'src/app/header/header.component';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss', '../../header/header.component.scss']
})
export class ContactFormComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) { }
  form!: FormGroup;
  question!: string;
  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      email: [null],
      name: [null],
      question: []
    });
  }

  public sendQuestion(): void {
    const data = this.form.getRawValue();
    if (data.question === '' || data.name === null || data.email === null) {
      window.alert("All the fildes are required!");
    }
    else
    {
      window.alert("You're question has been sent!");
    }
  }
}
