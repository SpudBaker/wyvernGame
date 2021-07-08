import { Component, OnInit } from '@angular/core';

enum EdgeState {
  Border = 'edgeBorder',
  Opening = 'edgeOpening',
  Unknown = 'edgeUnknown',
  Wall = 'edgeWall'
}

enum EdgeType {
  Horizontal = 'Horizontal',
  Vertical = 'Vertical'
}

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})

export class LandingPageComponent implements OnInit {

  edgeModel : any;

  constructor() { }

  ngOnInit(): void {
    this.edgeModel = {
      vertical: {
        one: {
            one: EdgeState.Border,
            two: EdgeState.Border,
            three: EdgeState.Border,
            four: EdgeState.Border,
            five: EdgeState.Border,
            six: EdgeState.Border,
            seven: EdgeState.Border
          },
        two: {
            one: EdgeState.Unknown,
            two: EdgeState.Unknown,
            three: EdgeState.Unknown,
            four: EdgeState.Unknown,
            five: EdgeState.Unknown,
            six: EdgeState.Unknown,
            seven: EdgeState.Unknown
          },
        three: {
            one: EdgeState.Unknown,
            two: EdgeState.Unknown,
            three: EdgeState.Unknown,
            four: EdgeState.Unknown,
            five: EdgeState.Unknown,
            six: EdgeState.Unknown,
            seven: EdgeState.Unknown
          },
        four: {
            one: EdgeState.Unknown,
            two: EdgeState.Unknown,
            three: EdgeState.Unknown,
            four: EdgeState.Unknown,
            five: EdgeState.Unknown,
            six: EdgeState.Unknown,
            seven: EdgeState.Unknown
          },
        five: {
            one: EdgeState.Unknown,
            two: EdgeState.Unknown,
            three: EdgeState.Unknown,
            four: EdgeState.Unknown,
            five: EdgeState.Unknown,
            six: EdgeState.Unknown,
            seven: EdgeState.Unknown
          },
        six: {
            one: EdgeState.Unknown,
            two: EdgeState.Unknown,
            three: EdgeState.Unknown,
            four: EdgeState.Unknown,
            five: EdgeState.Unknown,
            six: EdgeState.Unknown,
            seven: EdgeState.Unknown
          },
        seven: {
            one: EdgeState.Border,
            two: EdgeState.Border,
            three: EdgeState.Border,
            four: EdgeState.Border,
            five: EdgeState.Border,
            six: EdgeState.Border,
            seven: EdgeState.Border
          }  
      },
      horizontal: {
        one: {
            one: EdgeState.Border,
            two: EdgeState.Unknown,
            three: EdgeState.Unknown,
            four: EdgeState.Unknown,
            five: EdgeState.Unknown,
            six: EdgeState.Unknown,
            seven: EdgeState.Border
          },
        two: {
            one: EdgeState.Border,
            two: EdgeState.Unknown,
            three: EdgeState.Unknown,
            four: EdgeState.Unknown,
            five: EdgeState.Unknown,
            six: EdgeState.Unknown,
            seven: EdgeState.Border
          },
        three: {
            one: EdgeState.Border,
            two: EdgeState.Unknown,
            three: EdgeState.Unknown,
            four: EdgeState.Unknown,
            five: EdgeState.Unknown,
            six: EdgeState.Unknown,
            seven: EdgeState.Border
          },
        four: {
            one: EdgeState.Border,
            two: EdgeState.Unknown,
            three: EdgeState.Unknown,
            four: EdgeState.Unknown,
            five: EdgeState.Unknown,
            six: EdgeState.Unknown,
            seven: EdgeState.Border
          },
        five: {
            one: EdgeState.Border,
            two: EdgeState.Unknown,
            three: EdgeState.Unknown,
            four: EdgeState.Unknown,
            five: EdgeState.Unknown,
            six: EdgeState.Unknown,
            seven: EdgeState.Border
          },
        six: {
            one: EdgeState.Border,
            two: EdgeState.Unknown,
            three: EdgeState.Unknown,
            four: EdgeState.Unknown,
            five: EdgeState.Unknown,
            six: EdgeState.Unknown,
            seven: EdgeState.Border
          },
        seven: {
            one: EdgeState.Border,
            two: EdgeState.Unknown,
            three: EdgeState.Unknown,
            four: EdgeState.Unknown,
            five: EdgeState.Unknown,
            six: EdgeState.Unknown,
            seven: EdgeState.Border
          }
      }
    }
  }

  edgeClick(e: MouseEvent, orientation: string, h:string, v: string){
    switch(this.edgeModel[orientation][h][v]) {
      case EdgeState.Unknown: {
        this.edgeModel[orientation][h][v] = EdgeState.Wall;
        break;
      }
      case EdgeState.Wall:
        this.edgeModel[orientation][h][v] = EdgeState.Unknown;
        break;
    }
  }

}
