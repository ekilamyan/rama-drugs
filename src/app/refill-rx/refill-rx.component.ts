import { Component, ElementRef } from '@angular/core';
import { ScreenSizeService } from '../shared/services/screen-size-service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTimepickerModule } from '@angular/material/timepicker';
import { FooterComponent } from '../footer/footer.component';
import { provideNativeDateAdapter } from '@angular/material/core';
@Component({
  selector: 'app-refill-rx',
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatTimepickerModule,
    MatIcon,
    FooterComponent,
  ],
  templateUrl: './refill-rx.component.html',
  providers: [provideNativeDateAdapter()],
  styleUrl: './refill-rx.component.scss'
})
export class RefillRxComponent {
  public contactForm: FormGroup;
  public screenWidth: number = 0;

  constructor(private fb: FormBuilder, private screenSizeService: ScreenSizeService, private el: ElementRef) {

    this.contactForm = this.fb.group({
      name: ['', Validators.nullValidator],
      lastName: ['', Validators.nullValidator],
      email: [null, Validators.nullValidator],
      phone: ['', Validators.nullValidator],
      listOfRX: ['', Validators.nullValidator],
      date: [null, Validators.nullValidator],
      time: [null, Validators.nullValidator],
      specialInst: ['', Validators.nullValidator]
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
