import { Component, OnInit,EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';


@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.css']
})
export class AccordionItemComponent implements OnInit {
  @Input() isOpened = false;
  @Output() toggle = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  
  close(){
      this.toggle.emit() 
    }
  
}
