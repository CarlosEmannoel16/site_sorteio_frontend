import './App.css';

import { Home } from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import { Register } from './pages/Register/Register';
import { Login } from './pages/Login/Login';
import { MainPage } from './pages/MainPage/MainPage';
import { UserContextProvider } from './context/ContextUser';
import { BrowserRouter } from 'react-router-dom';

function App() {


  return (
    <>
      <UserContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/main' element={
              <MainPage />
            }>

            </Route>
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </>
  );
}

export default App;
