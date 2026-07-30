import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit, OnDestroy {
  portalName = 'Student Course Portal';
  isPortalActive = true;
  message = '';
  searchTerm = '';

  onEnrollClick() {
    this.message = 'Enrollment opened!';
  }

  ngOnInit() {
    // Simulate fetching available courses count
    const coursesAvailable = 12;
    console.log('HomeComponent initialised — ' + coursesAvailable + ' courses loaded');
  }

  ngOnDestroy() {
    console.log('HomeComponent destroyed');
  }
}