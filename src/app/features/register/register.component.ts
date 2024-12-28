import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // ReactiveFormsModule deve estar aqui
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.http.post('http://localhost:3030/register', this.registerForm.value).subscribe({
        next: (response) => {
          console.log('Registration successful:', response);
          alert('Usuário registrado com sucesso!');
          this.navigateToLogin();
        },
        error: (err) => {
          console.error('Registration failed:', err);
          alert('Erro ao registrar o usuário.');
        },
      });
    }
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}

