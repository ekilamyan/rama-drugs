import { Component, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIcon } from "@angular/material/icon";
import { FooterComponent } from '../footer/footer.component';
import { ScreenSizeService } from '../shared/services/screen-size-service';

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
  public screenWidth: number = 0;

  constructor(private fb: FormBuilder, private screenSizeService: ScreenSizeService, private el: ElementRef) {

    this.contactForm = this.fb.group({
      name: ['', Validators.nullValidator],
      lastName: ['', Validators.nullValidator],
      email: [null, Validators.nullValidator],
      subject: ['', Validators.nullValidator],
      message: ['', Validators.nullValidator]
    });
 
  }

  ngOnInit(): void {
    this.screenSizeService.getScreenWidth().subscribe(width => {
      this.screenWidth = width;
    });
  }

  ngAfterViewInit(): void {
    const elements = this.el.nativeElement.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      {
        threshold: 0.15
      }
    );

    elements.forEach((el: Element) => observer.observe(el));
  }

}
