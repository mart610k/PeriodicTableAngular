import { Component, OnInit } from '@angular/core';
import { Element } from "../element";
import { ElementGetterService } from "../element-getter.service";

@Component({
  selector: 'app-periodic-table',
  templateUrl: './periodic-table.component.html',
  styleUrls: ['./periodic-table.component.css']
})
export class PeriodicTableComponent implements OnInit {

  elements$: Element[] = [];
  constructor(private elementService: ElementGetterService) {
  }

  ngOnInit() {


    return this.elementService.getElements().subscribe(data => this.elements$ = data)
  }
}
