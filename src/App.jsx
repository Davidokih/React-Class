import './App.css'
import Hero from './components/Hero';
import Slider from './components/Slider'
import Page1 from './components/Pages/Page1';
import Page2 from './components/Pages/Page2';
import Page3 from './components/Pages/Page3';
import Page4 from './components/Pages/Page4';
import Page5 from './components/Pages/Page5';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page from './RecatRedux/Page';
import Cart from './components/Pages/Cart';
import ProductPage from './components/Pages/ProductPage';

const App = () => {
const greeting = "hello"
  return (
    <div>
      <BrowserRouter>
        <Header prop={ greeting} />
         {/* <Hero /> */}
        {/* <Slider /> */ }
        {/* <Page /> */}
        <Routes>
       
          <Route path='/' element={ <Page1 />} />
          <Route path='/page2' element={ <Page2 />} />
          <Route path='/page3/:id' element={ <Page3 />} />
          <Route path='/page4/:id' element={ <Page4 />} />
          <Route path='/page5' element={ <Page5 />} />
          <Route path='/cart' element={ <Cart />} />
          <Route path='/product' element={ <ProductPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
