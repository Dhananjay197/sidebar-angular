import { Component } from '@angular/core';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  tiles: Tile[] = [
    {text: 'One', cols: 6, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 2, rows: 5, color: 'lightgreen'},
    {text: 'Three', cols: 2, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: 'orange'},
    {text: 'Four', cols: 2, rows: 1, color: 'yellow'},
    {text: 'Four', cols: 3, rows: 1, color: 'grey'},
    {text: 'Four', cols: 3, rows: 1, color: 'red'},
  ];
}
