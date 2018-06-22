import {Component,Input} from '@angular/core';

/**
 * @title Basic cards
 */
@Component({
  selector: 'card-sample',
  templateUrl: 'card-component.html',
  styleUrls: ['card-overview-example.css'],
})
export class CardComponent {

@Input()
card :any;



}
