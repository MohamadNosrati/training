import React from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from '../pages/Home';
import Index from './products/ProductsIndex';
import ProductsIndex from './products/ProductsIndex';
import ProductsCreate from './products/ProductsCreate';
import EditProduct from './products/EditProduct';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/admin/products" element={<ProductsIndex/>}/>
      <Route path="/admin/products/create" element={<ProductsCreate/>}/>
      <Route path="/admin/products/:id/edit" element={<EditProduct/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;


