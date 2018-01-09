import { Word } from './../DTO/Word';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {
  wordsArr: Word[] = [
    {id: 1, en: 'word'},
    {id: 2, en: 'books'},
  ];
  delete(w) {
    const index = this.wordsArr.indexOf(w);
    if (index > -1) {
      this.wordsArr.splice(index, 1);
    }
  }
  constructor() {
  }

  ngOnInit() {
  }

}
