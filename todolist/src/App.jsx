import React from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import './App.css'
import { useState } from 'react';

const App = () => {

  const [items, setItems] = useState([


    {
      id: 1,
      checked: true,
      item: "practice coding"
    },
    {
      id: 2,
      checked: false,
      item: "playing Cricket"
    },
    {
      id: 3,
      checked: false,
      item: "swimming"
    }
  ]);

  const handleChange = (id) => {
    const listItems = items.map((data) => data.id === id ? { ...data, checked: !data.checked } : data)
    setItems(listItems)
    localStorage.setItem("todo_list", JSON.stringify(listItems))
  }


  const handleDelete = (id) => {
    const listItems = items.filter((data) => data.id !== id)
    setItems(listItems);

  }


  return (
    <div>
      <Header title="Iskus" />

      <Content

        items={items} handleChange={handleChange} handleDelete={handleDelete} />

      <Footer

        length={items.length}

      />


    </div>
  )
}

export default App