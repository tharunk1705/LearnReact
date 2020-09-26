import React from 'react';
import Main from './Components/MainComponent';
import './App.css';
import { DISHES } from './shared/dishes';
import { BrowserRouter } from 'react-router-dom';
import { Provider} from 'react-redux';
import { ConfigureStore}  from './redux/configureStore';

const store = ConfigureStore();

class App extends React.Component {
  

  render(){
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
  
}

export default App;
