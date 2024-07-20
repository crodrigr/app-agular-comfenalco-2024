import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements OnInit {
  

  counter: number=0;

  @Input() title: string="";

  @Output() counterEmmit : EventEmitter<number>=new EventEmitter();
  
  ngOnInit(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      this.counter=parseInt(localStorage.getItem('counter')!) || 0;      
    }
    console.log('creando componente');
  }

  setCounter():void{
    this.counter=this.counter+1;
    localStorage.setItem('counter',this.counter.toString());
    this.counterEmmit.emit(this.counter);    
  }

}
