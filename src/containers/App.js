import './App.css';
import React, { Component } from 'react';
import Cockpit from '../components/Cockpit/Cockpit';
import Assembly from '../components/Assembly/Assembly';

class App extends Component {

        constructor(props) {
                super(props);

                const lightsArr = [];
                const squareLen = this.props.squareLength;

                    for(let i = 0; i < squareLen; i++) {
                        for(let j = 0; j < squareLen; j++) {
                                lightsArr.push({ 
                                                isLight: (Math.random() > 0.5 ? true : false ), 
                                                id: `${i}${j}`, 
                                                coordinates: [i, j]
                                               });
                                }
                        }
                this.state = {
                        lights: lightsArr,
                        squareLength: this.props.squareLength
                };                            
        }

//   state = {
//      lights:    []        //[{ isLight: false, id: '00', coordinates: [0, 0] },{ isLight: true, id: '01', coordinates: [0, 1] },
//            { isLight: true, id: '02', coordinates: [0, 2]},{ isLight: true, id: '10', coordinates: [1, 0]},
//               { isLight: true, id: '11', coordinates: [1, 1]},{ isLight: false, id: '12', coordinates: [1, 2]},
//               { isLight: false, id: '20', coordinates: [2, 0] },{ isLight: true, id: '21', coordinates: [2, 1] },
//               { isLight: false, id: '22', coordinates: [2, 2] } ]
//   };

//   //initializing state;
//   initState = () => {
//         const squareLen = this.props.squareLength;
//         for(let i = 0; i < squareLen; i++) {
//                 for(let j = 0; j < squareLen; j++) {
//                         lightsArr.push({ isLight: (Math.random() > 0.5 ? true : false ), id: `${i}${j}`, coordinates: [i, j]});
//                 }
//         }
//   }
  deleteLeft = (arr, row, column) => {
        arr.push([row, column - 1].join(''));
  }
  
  deleteRight = (arr, row, column) => {
        arr.push([row, column + 1].join(''));
  }
  
  deleteUp = (arr, row, column) => {
        arr.push([row - 1, column].join(''));
  }
  
  deleteDown = (arr, row, column) => {
        arr.push([row + 1, column].join(''));
  }
 
  lightHandler = (event, id, coordinates) => {
    // Light on Off.
    console.log("id: ", id,"coordinates: ", coordinates);
    const lightArr = [...this.state.lights];
    const indexOfLight = lightArr.findIndex((light) => id === light.id);
    const doesLight = this.state.lights[indexOfLight].isLight;

    lightArr[indexOfLight].isLight = !doesLight;
    this.setState({ lights: lightArr });
    
    
    // Adjacent Lights on off.
    const lightArr02 = [...this.state.lights];
    const criticalLen = this.state.squareLength - 1;
    const arr = [];
    // Player moves.
    const row = coordinates[0];
    const column = coordinates[1];

    switch(row) {

      case 0:   this.deleteDown(arr, row, column);
                        
                switch(column) {
                
                        case 0: this.deleteRight(arr, row, column);
                                break;

                        case criticalLen: this.deleteLeft(arr, row, column);
                                        break;

                        default: this.deleteRight(arr, row, column);
                                 this.deleteLeft(arr, row, column);
                                 break;
                };
                break;

      case criticalLen: this.deleteUp(arr, row, column); 
                switch(column) {
                        case 0: this.deleteRight(arr, row, column);
                                break;

                        case criticalLen: this.deleteLeft(arr, row, column);
                                        break;
                
                        default: this.deleteLeft(arr, row, column);
                                 this.deleteRight(arr, row, column);
                                 break;                        
                        
                };
                break;

      default:  this.deleteDown(arr, row, column);
                this.deleteUp(arr, row, column);
                switch(column) {

                case 0: this.deleteRight(arr, row, column);
                        break;

                case criticalLen: this.deleteLeft(arr, row, column); 
                               break;

                default: this.deleteLeft(arr, row, column);
                         this.deleteRight(arr, row, column);
                         break;                        
                
                };
                break;
    }
    
    //
    console.log('[App.js] arr: ', arr);
    arr.map(el => {
    
      let doLight;
      const index = lightArr02.findIndex(light => el == light.id);
      doLight = this.state.lights[index].isLight;
      lightArr02[index].isLight = !doLight;
      return 0;
    });

    this.setState({ lights: lightArr02 });

  }

  render() {
    return (
       <div className="App">
          <Cockpit title={this.props.appTitle}/>
          <Assembly squareLen={this.props.squareLength}lightsArr={this.state.lights} clicked={this.lightHandler}/>
       </div>
       );
  }
}

export default App;
