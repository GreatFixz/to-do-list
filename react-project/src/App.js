import React, { useState } from 'react'
import { render } from 'react-dom';
import TodoList from './components/TodoList'
import './app.css';

export default function App() {
    return(
      <TodoList />
    )
  }