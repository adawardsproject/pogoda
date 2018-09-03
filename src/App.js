import React  from 'react';
import Navigation from './components/Navigation';
import Weather from './components/Weather';
import Forecast from './components/Forecast';
import Map from './components/Map';

import Articles from './components/Articles';
import BottomNav from './components/BottomNav';
import Test from './components/Test';

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    sunUp:undefined,
    sunDown:undefined,
    description: undefined,
    error: undefined
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <Weather/>
        <Forecast />
        <Map />
        <Articles />
        <BottomNav />

      </div>
    );
  }
}

export default App;
