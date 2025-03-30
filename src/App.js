import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './components/styles/style.css';

import store from './store/store';
import Shop from './components/Shop';
import Basket from './components/Basket';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/basket' element={<Basket/>} />
          <Route path='/' element={<Shop />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
