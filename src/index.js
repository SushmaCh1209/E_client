import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/navbar';
import Home from './components/home';
import TodoList from './components/ToDoList';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Register from './components/register';
import Login from './components/login';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div>
<Router>
<Navbar/>
<TodoList/>
<Home/>
<Routes>
<Route path="/about" element={<h1>About</h1>}/>
<Route path="/register" element={<Register/>}/>
<Route path="/login" element={<Login/>}/>
</Routes>
</Router>
</div>
);