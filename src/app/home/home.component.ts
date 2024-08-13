import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  onSubmit(form: any): void {
    console.log('Form Submitted!', form.value);
    alert('Form Submitted! Check console for values.');
  }

  onReset(form: any): void {
    form.reset();
  }
}
