import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import BaseLayout from './assets/layout'
import Home from './assets/pages/Home'
import Store from './assets/pages/Store'
import Detail from './assets/pages/Detail'
import { GlobalContextProvider } from './context/GlobalContext'
import NotFound from './assets/components/NotFound'
import Cart from './assets/pages/Cart'
import PaymentForm from './assets/pages/Pay'


function App() {

  return (
    <>
      <GlobalContextProvider>
        <BrowserRouter>
          <BaseLayout>
            <Routes>
              <Route exact path='/' element={<Home/>}/>
              <Route exact path='/store' element={<Store/>}/>
              <Route exact path='/detail/:id' element={<Detail/>}/>
              <Route exact path='*' element={<NotFound/>}/>
              <Route exact path='/cart' element={<Cart/>}/>
              <Route exact path='/pay' element={<PaymentForm/>}/>
            </Routes>
          </BaseLayout>
        </BrowserRouter>
      </GlobalContextProvider>
    </>
  )
};

export default App
