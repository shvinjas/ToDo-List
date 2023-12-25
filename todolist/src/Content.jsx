import React from 'react'
import { FaTrashAlt } from "react-icons/fa";


const Content = ({ items, handleChange, handleDelete }) => {


  return (

    <main>
      {(items.length) ? (
        <ul>
          {items.map((data) => (
            <li className="item" key={data.id}>
              <input type="checkbox" checked={data.checked} onChange={() => handleChange(data.id)}></input>
              <label style={(data.checked) ? { textDecoration: "line-through" } : null} onDoubleClick={() => handleChange(data.id)}>{data.item}</label>
              <FaTrashAlt role="button" tabIndex="0" onClick={() => handleDelete(data.id)} />


            </li>
          ))}
        </ul>
      ) : (<p>Your List is Empty</p>)
      }

    </main>
  )
}

export default Content