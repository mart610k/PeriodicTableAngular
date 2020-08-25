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

  getRowOfElements(row: number): Element[] {
    let returnTable = [].constructor(18);
    switch (row) {
      case 1:
        returnTable[0] = this.elements$[0]
        returnTable[17] = this.elements$[1];
        break;
      case 2:
        returnTable[0] = this.elements$[2];
        returnTable[1] = this.elements$[3];
        for (let i = 0; i < 6; i++) {
          returnTable[12 + i] = this.elements$[i + 4];
        }
        break;
      case 3:
      returnTable[0] = this.elements$[10];
      returnTable[1] = this.elements$[11];
      for (let i = 0; i < 6; i++) {
        returnTable[12 + i] = this.elements$[i + 12];
      }
      break;
    }
    return returnTable;
  }

  logout(element: Element) {
    let classes = []

    if (element !== undefined) {
      classes.push("col");
      classes.push(this.getTestClass(element.groupBlock))
    }
    else {
      classes.push("ghost-col")
    }
    return classes;

  }
  ngOnInit() {
    return this.elementService.getElements().subscribe(data => this.elements$ = data)
  }

  onClickOnElement(elementAtomicNumber) {
    console.log(elementAtomicNumber);
  }

  getTestClass(groupBlock: string) {
    let regex = new RegExp(/ /, 'gm');
    return "style-" + groupBlock.replace(regex, "-");;
  }
}
