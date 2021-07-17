import { Component } from '@angular/core';
import * as Globals from '../../globals';



@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})

export class LandingPageComponent {

  public EdgeState = Globals.EdgeState;
  public gameModel = new Globals.GameModel();
  public Orientation = Globals.Orientation;

  constructor() {}

  edgeClick(orientation: Globals.Orientation, h:number, v: number){
    switch (orientation){
      case this.Orientation.Horizontal: {
        switch(this.gameModel.horizontalEdges[h][v]) {
          case this.EdgeState.Unknown: {
            this.gameModel.horizontalEdges[h][v] = this.EdgeState.Wall;
            this.checkIfValidRouteExists();
            break;
          }
          case this.EdgeState.Wall:
            this.gameModel.horizontalEdges[h][v] = this.EdgeState.Unknown;
            this.checkIfValidRouteExists();
            break;
          }
        }
        break;
      case this.Orientation.Vertical:{
        switch(this.gameModel.verticalEdges[h][v]) {
          case this.EdgeState.Unknown: {
            this.gameModel.verticalEdges[h][v] = this.EdgeState.Wall;
            this.checkIfValidRouteExists();
            break;
          }
          case Globals.EdgeState.Wall:
            this.gameModel.verticalEdges[h][v] = this.EdgeState.Unknown;
            this.checkIfValidRouteExists();
            break;
          }
        }
        break;
      }
  }

  squareClick(h:number, v: number){
    this.gameModel.target.horizontal = h;
    this.gameModel.target.vertical = v;
    this.checkIfValidRouteExists();
  }

  getCornerState(h: number, v:number): string {
    try{
      if(this.gameModel.horizontalEdges[h][v] === this.EdgeState.Wall) { 
        return Globals.EdgeState.Border
      } 
    } catch {}
    try{
      if(this.gameModel.horizontalEdges[h-1][v] === this.EdgeState.Wall) { 
        return Globals.EdgeState.Border
      }
    } catch {}
    try{
      if(this.gameModel.verticalEdges[h][v] === this.EdgeState.Wall) { 
        return Globals.EdgeState.Border
      }
    } catch {}
    try{
      if(this.gameModel.verticalEdges[h][v-1] === this.EdgeState.Wall) { 
        return Globals.EdgeState.Border
      }
    } catch {}
    return Globals.EdgeState.Unknown;
  }

  checkIfValidRouteExists(){
   
    let count = 1;

    while (count > 0) {
      count =0;
      // squares.filter(element => element.state === SquareState.reachableNotChecked);
      // squares.forEach(element => {
        if (this.gameModel){
        // has it got the target? - if so exit and mark status as true
        // mark as reachable checked
        // find adjacent squares and mark as reachableNotChecked if appropriate
        // keep track of how many squares are marked, if none update 'changes' variable 
        }; 
    }


  }

}
