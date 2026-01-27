import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIcon } from "@angular/material/icon";
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-contact-us',
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIcon,
    FooterComponent,
],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  public contactForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.contactForm = this.fb.group({
      name: ['', Validators.nullValidator],
      lastName: ['', Validators.nullValidator],
      email: [null, Validators.nullValidator],
      subject: ['', Validators.nullValidator],
      message: ['', Validators.nullValidator]
    });
 
  }

}
