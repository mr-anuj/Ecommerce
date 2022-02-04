// import logo from './logo.svg';
import './App.css';

import MyRoute from "./MyRoute";
import store from "./store"
import{Provider} from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <MyRoute/>
    </Provider>
  );
}

export default App;
