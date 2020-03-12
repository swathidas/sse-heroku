import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'button-component',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() name: string;

  constructor() { }

  ngOnInit() { }
  public onClickHandler(event) {
    let compInstance = `.component${event.target.innerText}`;
    document.querySelector(compInstance).classList.toggle('hide');
  }
}
