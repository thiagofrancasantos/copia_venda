import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true,
})


export class HomeComponent {
  constructor(private router: Router){}

  goToLogin(){
    this.router.navigate(['/login']);
  }

  toggleFavorite(event: Event): void {
    const button = event.target as HTMLElement;
    button.classList.toggle('active');
  }
}
