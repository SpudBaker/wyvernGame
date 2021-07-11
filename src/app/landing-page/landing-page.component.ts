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

  gameModel : any;

  constructor() { }

  ngOnInit(): void {
    this.gameModel = {
      marker: {
        horizontal: 1,
        vertical: 1
      },
      target: {
        horizontal: 6,
        vertical: 6
      },
      vertical: {
        '1': {
            '1': EdgeState.Border,
            '2': EdgeState.Border,
            '3': EdgeState.Border,
            '4': EdgeState.Border,
            '5': EdgeState.Border,
            '6': EdgeState.Border,
            '7': EdgeState.Border
          },
        2: {
            1: EdgeState.Unknown,
            2: EdgeState.Unknown,
            3: EdgeState.Unknown,
            4: EdgeState.Unknown,
            5: EdgeState.Unknown,
            6: EdgeState.Unknown,
            7: EdgeState.Unknown
          },
        3: {
            1: EdgeState.Unknown,
            2: EdgeState.Unknown,
            3: EdgeState.Unknown,
            4: EdgeState.Unknown,
            5: EdgeState.Unknown,
            6: EdgeState.Unknown,
            7: EdgeState.Unknown
          },
        4: {
            1: EdgeState.Unknown,
            2: EdgeState.Unknown,
            3: EdgeState.Unknown,
            4: EdgeState.Unknown,
            5: EdgeState.Unknown,
            6: EdgeState.Unknown,
            7: EdgeState.Unknown
          },
        5: {
            1: EdgeState.Unknown,
            2: EdgeState.Unknown,
            3: EdgeState.Unknown,
            4: EdgeState.Unknown,
            5: EdgeState.Unknown,
            6: EdgeState.Unknown,
            7: EdgeState.Unknown
          },
        6: {
            1: EdgeState.Unknown,
            2: EdgeState.Unknown,
            3: EdgeState.Unknown,
            4: EdgeState.Unknown,
            5: EdgeState.Unknown,
            6: EdgeState.Unknown,
            7: EdgeState.Unknown
          },
        7: {
            1: EdgeState.Border,
            2: EdgeState.Border,
            3: EdgeState.Border,
            4: EdgeState.Border,
            5: EdgeState.Border,
            6: EdgeState.Border,
            7: EdgeState.Border
          }  
      },
      horizontal: {
        1: {
            1: EdgeState.Border,
            2: EdgeState.Unknown,
            3: EdgeState.Unknown,
            4: EdgeState.Unknown,
            5: EdgeState.Unknown,
            6: EdgeState.Unknown,
            7: EdgeState.Border
          },
        2: {
            1: EdgeState.Border,
            2: EdgeState.Unknown,
            3: EdgeState.Unknown,
            4: EdgeState.Unknown,
            5: EdgeState.Unknown,
            6: EdgeState.Unknown,
            7: EdgeState.Border
          },
        3: {
            1: EdgeState.Border,
            2: EdgeState.Unknown,
            3: EdgeState.Unknown,
            4: EdgeState.Unknown,
            5: EdgeState.Unknown,
            6: EdgeState.Unknown,
            7: EdgeState.Border
          },
        4: {
            1: EdgeState.Border,
            2: EdgeState.Unknown,
            3: EdgeState.Unknown,
            4: EdgeState.Unknown,
            5: EdgeState.Unknown,
            6: EdgeState.Unknown,
            7: EdgeState.Border
          },
        5: {
            1: EdgeState.Border,
            2: EdgeState.Unknown,
            3: EdgeState.Unknown,
            4: EdgeState.Unknown,
            5: EdgeState.Unknown,
            6: EdgeState.Unknown,
            7: EdgeState.Border
          },
        6: {
            1: EdgeState.Border,
            2: EdgeState.Unknown,
            3: EdgeState.Unknown,
            4: EdgeState.Unknown,
            5: EdgeState.Unknown,
            6: EdgeState.Unknown,
            7: EdgeState.Border
          },
        7: {
            1: EdgeState.Border,
            2: EdgeState.Unknown,
            3: EdgeState.Unknown,
            4: EdgeState.Unknown,
            5: EdgeState.Unknown,
            6: EdgeState.Unknown,
            7: EdgeState.Border
          }
      }
    }
  }

  edgeClick(orientation: string, h:number, v: number){
    const sh= h.toString();
    const sv = v.toString();
    switch(this.gameModel[orientation][sh][sv]) {
      case EdgeState.Unknown: {
        this.gameModel[orientation][sh][sv] = EdgeState.Wall;
        break;
      }
      case EdgeState.Wall:
        this.gameModel[orientation][sh][sv] = EdgeState.Unknown;
        break;
    }
  }

  squareClick(h:number, v: number){
    this.gameModel.target.horizontal = h;
    this.gameModel.target.vertical = v;
  }

  getgameModelClassName(orientation: string, h: number, v:number):string{
    return this.gameModel[orientation][h][v];
  }

  getCornerState(h: number, v:number): string {
    try{
      if(this.gameModel.horizontal[h][v] === EdgeState.Wall) { 
        return EdgeState.Border
      } 
    } catch {}
    try{
      if(this.gameModel.horizontal[h-1][v] === EdgeState.Wall) { 
        return EdgeState.Border
      }
    } catch {}
    try{
      if(this.gameModel.vertical[h][v] === EdgeState.Wall) { 
        return EdgeState.Border
      }
    } catch {}
    try{
      if(this.gameModel.vertical[h][v-1] === EdgeState.Wall) { 
        return EdgeState.Border
      }
    } catch {}
    return EdgeState.Unknown;
  }
}
