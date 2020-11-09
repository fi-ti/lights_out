import './App.css';
import React, { Component } from 'react';
import Cockpit from '../components/Cockpit/Cockpit';
import Assembly from '../components/Assembly/Assembly';

class App extends Component {

  state = {
    lights: [{ isLight: false, id: '00', coordinates: [0, 0] },{ isLight: true, id: '01', coordinates: [0, 1] },
             { isLight: true, id: '02', coordinates: [0, 2]},{ isLight: true, id: '10', coordinates: [1, 0]},
             { isLight: true, id: '11', coordinates: [1, 1]},{ isLight: false, id: '12', coordinates: [1, 2]},
             { isLight: false, id: '20', coordinates: [2, 0] },{ isLight: true, id: '21', coordinates: [2, 1] },
             { isLight: false, id: '22', coordinates: [2, 2] } ]
  };

  lightHandler = (event, id, coordinates) => {
    // Light on Off.
    const lightArr = [...this.state.lights];
    const indexOfLight = lightArr.findIndex((light) => id === light.id);
    const doesLight = this.state.lights[indexOfLight].isLight;

    lightArr[indexOfLight].isLight = !doesLight;
    this.setState({ lights: lightArr });
    
    // Adjacent Lights on off.
    const lightArr02 = [...this.state.lights];
    //
    const arr = [];
    switch(coordinates[0]) {
      case 0: switch(coordinates[1]) {
                case 0: arr.push([coordinates[0] + 1, coordinates[1]].join(''));
                        arr.push([coordinates[0], coordinates[1] + 1].join(''));
                        break;

                case 1: arr.push([coordinates[0] + 1, coordinates[1]].join(''));
                        arr.push([coordinates[0], coordinates[1] - 1].join(''));
                        arr.push([coordinates[0], coordinates[1] + 1].join(''));
                        break;

                case 2: arr.push([coordinates[0] + 1, coordinates[1]].join(''));
                        arr.push([coordinates[0], coordinates[1] - 1].join(''));
                        break;                        
                        
      };
      break;

      case 1: switch(coordinates[1]) {
                case 0: arr.push([coordinates[0] - 1, coordinates[1]].join(''));
                        arr.push([coordinates[0] + 1, coordinates[1]].join(''));
                        arr.push([coordinates[0] - 1, coordinates[1] + 1].join(''));
                        break;

                case 1: arr.push([coordinates[0] + 1, coordinates[1]].join(''));
                        arr.push([coordinates[0], coordinates[1] - 1].join(''));
                        arr.push([coordinates[0], coordinates[1] + 1].join(''));
                        arr.push([coordinates[0] - 1, coordinates[1]].join(''));
                        break;

                case 2: arr.push([coordinates[0] + 1, coordinates[1]].join(''));
                        arr.push([coordinates[0] - 1, coordinates[1]].join(''));
                        arr.push([coordinates[0], coordinates[1] - 1].join(''));
                        break;                        
                
      };
      break;

      case 2: switch(coordinates[1]) {
                case 0: arr.push([coordinates[0] - 1, coordinates[1]].join(''));
                        arr.push([coordinates[0], coordinates[1] + 1].join(''));
                        break;

                case 1: arr.push([coordinates[0] - 1, coordinates[1]].join(''));
                        arr.push([coordinates[0], coordinates[1] - 1].join(''));
                        arr.push([coordinates[0], coordinates[1] + 1].join(''));
                        break;

                case 2: arr.push([coordinates[0] - 1, coordinates[1]].join(''));
                        arr.push([coordinates[0], coordinates[1] - 1].join(''));
                        break;                        
                
      };
      break;
    }
    
    //

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
          <Assembly lightsArr={this.state.lights} clicked={this.lightHandler}/>
       </div>
       );
  }
}

export default App;
