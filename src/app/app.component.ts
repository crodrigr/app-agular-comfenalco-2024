import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CounterComponent, RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title: string = 'app-demo';
  subTible='Contador con estado se sesión!!!';
  visible: boolean = true;
  users = ["Camilo", "Juan", "Pedro", "Maria", "Alberto", "Oscar"];
  counter: number=0;


  ngOnInit(): void {   
    if (typeof window !== 'undefined' && window.localStorage) {
      this.counter=parseInt(localStorage.getItem('counter')!) || 0;      
    }
  }

  setVisible(): void {
    this.visible = !this.visible;
  }

  setCounter(counter: number): void{
      this.counter=counter;
  }

}
