import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-emotion-panel',
  templateUrl: './emotion-panel.component.html',
  styleUrls: ['./emotion-panel.component.css']
})
export class EmotionPanelComponent implements OnInit {

  @Input('value') value = 0;
  @Input('name') name = "unknown";

  constructor() { }

  ngOnInit() {
  }

}
