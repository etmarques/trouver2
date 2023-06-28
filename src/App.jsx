import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';


// pages
import Home from '../src/pages/Home';
import Form from '../src/pages/Form';
import Matriz from '../src/pages/Matriz';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Home />} />
      <Route path='forms' element={<Form />} />
      <Route path='matriz' element={<Matriz />} />
    </Route>
  )
)

function App() {
  return (

    <RouterProvider router={router} />
    
  )
}

export default App;
