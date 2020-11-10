import './App.css';
import React, { Component } from 'react';
import Cockpit from '../components/Cockpit/Cockpit';
import Assembly from '../components/Assembly/Assembly';
import HowToPlay from '../components/Cockpit/HowToPlay';

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
                        squareLength: this.props.squareLength,
                        isHowToPlay: false
                };                            
        }

  deleteLeft = (changeLightsArr, row, col) => {
        changeLightsArr.push([row, col - 1].join(''));
  }
  
  deleteRight = (changeLightsArr, row, col) => {
        changeLightsArr.push([row, col + 1].join(''));
  }
  
  deleteUp = (changeLightsArr, row, col) => {
        changeLightsArr.push([row - 1, col].join(''));
  }
  
  deleteDown = (changeLightsArr, row, col) => {
        changeLightsArr.push([row + 1, col].join(''));
  }
 
  lightHandler = (event, id, coordinates) => {
  
    const lightsArr = [...this.state.lights];
    const criticalLength = this.state.squareLength - 1;
    const changeLightsArr = [];
    const row = coordinates[0];
    const col = coordinates[1];
    
    // Logic for determing which lights to turn on or off.
    changeLightsArr.push([row, col].join(''));
    switch(row) {

      case 0:   this.deleteDown(changeLightsArr, row, col);
                        
                switch(col) {
                
                        case 0: this.deleteRight(changeLightsArr, row, col);
                                break;

                        case criticalLength: this.deleteLeft(changeLightsArr, row, col);
                                        break;

                        default: this.deleteRight(changeLightsArr, row, col);
                                 this.deleteLeft(changeLightsArr, row, col);
                                 break;
                };
                break;

      case criticalLength: this.deleteUp(changeLightsArr, row, col); 
                switch(col) {
                        case 0: this.deleteRight(changeLightsArr, row, col);
                                break;

                        case criticalLength: this.deleteLeft(changeLightsArr, row, col);
                                        break;
                
                        default: this.deleteLeft(changeLightsArr, row, col);
                                 this.deleteRight(changeLightsArr, row, col);
                                 break;                        
                        
                };
                break;

      default:  this.deleteDown(changeLightsArr, row, col);
                this.deleteUp(changeLightsArr, row, col);
                switch(col) {

                case 0: this.deleteRight(changeLightsArr, row, col);
                        break;

                case criticalLength: this.deleteLeft(changeLightsArr, row, col); 
                               break;

                default: this.deleteLeft(changeLightsArr, row, col);
                         this.deleteRight(changeLightsArr, row, col);
                         break;                        
                
                };
                break;
    }
    
    // Turn the selected lights off.
    changeLightsArr.map(el => {
      let doesLight;
      const index = lightsArr.findIndex(light => el === light.id);
      doesLight = this.state.lights[index].isLight;
      lightsArr[index].isLight = !doesLight;
      return 0;
    });

    this.setState({ lights: lightsArr });

  }

  restart = () => {
          const lightsArr = [...this.state.lights];
          lightsArr.forEach(light => Math.random() > 0.5 ? light.isLight = true : light.isLight = false);
          this.setState({ lights: lightsArr });
  }

  howToPlay = () => {
        this.setState((prevState, props) => { return { isHowToPlay: !prevState.isHowToPlay }});
        
  }

  render() {
    return (
       <div className="App">
          <Cockpit title={this.props.appTitle}
                   restart={this.restart}
                   howToPlay={this.howToPlay}/>
          <Assembly squareLen={this.props.squareLength} 
                    lightsArr={this.state.lights} 
                    clicked={this.lightHandler}/>
           { this.state.isHowToPlay ? <HowToPlay close={this.howToPlay}/> : null } 
       </div>
       );
  }
}

export default App;
