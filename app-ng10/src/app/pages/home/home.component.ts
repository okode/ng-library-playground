import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router, private route: ActivatedRoute) { }

  goToPage1(): void {
    this.router.navigateByUrl('/vehicle-accidents/page1');
  }
}
