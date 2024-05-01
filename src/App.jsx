import React from 'react';
import FormData  from './Components/FromData/FormData';
import ShowData from './Components/ShowData/ShowData';
import { Route, Routes } from 'react-router-dom';
import Updata from './Components/Update/Updata';

const App = () => {
  return (
    <div>
    <Routes>
      <Route path='/' element={<FormData />}/>
      <Route path='/showdata' element={<ShowData/>}/>
      <Route path='/update' element={<Updata/>}/>
    </Routes>
      
      
    </div>
  )
}
 
export default App
