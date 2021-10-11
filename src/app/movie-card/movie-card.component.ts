import { Component, OnInit , Input, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input() movieItem : object;
  @Output() sendMovie = new EventEmitter<object>();

  hello : string = "Hello from child";

  constructor() { }

  ngOnInit(): void {
  }

  sendDataToParent(){
    console.log(this.movieItem)
    this.sendMovie.emit(this.movieItem);
  }
}
