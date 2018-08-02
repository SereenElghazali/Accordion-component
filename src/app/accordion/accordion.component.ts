import { Component, OnInit, AfterContentInit } from '@angular/core';
import { QueryList } from '@angular/core';
import { ContentChildren } from '@angular/core';
import { AccordionItemComponent } from 'src/app/accordion-item/accordion-item.component';


@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements AfterContentInit {

  @ContentChildren(AccordionItemComponent) accordionItem: QueryList<AccordionItemComponent>;
  items: AccordionItemComponent[];
  ngAfterContentInit() {
    this.items = this.accordionItem.toArray();
    // Open the first Item
    this.items[0].isOpened = true;
    this.items.forEach((i) => {
     
      i.toggle.subscribe(() => {
        // Open the item
        this.openItem(i);
      });
     
    });

  }
  openItem(item: AccordionItemComponent) {
    
    if(!item.isOpened){
        // close other groups
        this.accordionItem.toArray().forEach((i) => i.isOpened = false);
          
        item.isOpened = true;
    }
    else{
      item.isOpened = false;
    }
    
    
  }

  

}
