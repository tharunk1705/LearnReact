import React from 'react';
import Main from './Components/MainComponent';
import './App.css';
import { DISHES } from './shared/dishes';
import { BrowserRouter } from 'react-router-dom';

class App extends React.Component {

  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Main/>
        </div>
      </BrowserRouter>
      
    );
  }
  
}

export default App;
