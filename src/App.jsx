import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Book from './Pages/Book'
import Layout from './Pages/Layout'
import Home from './Pages/Home'
import Search from './components/Search'
import Categories from './Pages/Categories'
import Category from './Pages/Category'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='book/:id' element={<Book/>}/>
        <Route path='categories' element={<Categories/>}/>
        <Route path='category/:name' element={<Category/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    {/* <Book/> */}
    </>
  )
}

export default App
