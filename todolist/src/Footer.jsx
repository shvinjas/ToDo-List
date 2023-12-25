import React from 'react'

const Footer = ({length}) => {



  return (
    <footer>
          {length} Active {(length>1?"items":"item")}  were is in the List
    </footer>
  )
}

export default Footer