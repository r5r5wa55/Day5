
import './App.css'
import { Provider } from 'react-redux';
import store from './store/store';
import Header from './component/Header';
import Home from './page/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './page/About';

function App() {
 

  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />}/> 
          <Route path="/about" element={<About />}/> 
        </Routes>
      </BrowserRouter>
    </Provider>
   
    </>
  )
}

export default App
