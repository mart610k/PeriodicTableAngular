import { Component, OnInit, Input } from '@angular/core';
import { Element } from "../element";
@Component({
  selector: 'app-atomic-banner',
  templateUrl: './atomic-banner.component.html',
  styleUrls: ['./atomic-banner.component.css']
})
export class AtomicBannerComponent implements OnInit {

  @Input() element : Element;
  constructor() {
   }

  ngOnInit(): void {
  }

}
