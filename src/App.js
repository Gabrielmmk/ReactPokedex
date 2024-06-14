import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Section from './components/Section/SectionMain';
import Description from './components/Description/DescriptionMain';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Section/>}/>
        <Route path='/description' element={<Description/>}/>
        <Route path='*' element={<h1>Not Found</h1>}/>
      </Routes>
    </BrowserRouter>
  )

}

export default App;
