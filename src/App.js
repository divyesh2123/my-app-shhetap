import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import store from './store/store';
import Counter from './Counter';
import News from './News';

function App() {
  return (
    <Provider store={store}>
   
  
   <News/>
    </Provider>
  );
}

export default App;
