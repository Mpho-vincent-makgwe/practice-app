import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [HomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit the form', () => {
    const form = fixture.nativeElement.querySelector('form');
    const nameInput = form.querySelector('input[name="name"]');
    const emailInput = form.querySelector('input[name="email"]');

    nameInput.value = 'John Doe';
    emailInput.value = 'john@example.com';
    nameInput.dispatchEvent(new Event('input'));
    emailInput.dispatchEvent(new Event('input'));

    spyOn(console, 'log');
    spyOn(window, 'alert');

    form.dispatchEvent(new Event('submit'));

    expect(console.log).toHaveBeenCalledWith('Form Submitted!', { name: 'John Doe', email: 'john@example.com' });
    expect(window.alert).toHaveBeenCalledWith('Form Submitted! Check console for values.');
  });
});
