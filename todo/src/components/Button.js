import React from 'react'

const Button = ({ callback, type, text }) => {
  let theme
  switch (type){
    case 'Edit':
      theme = 'blue'
      break
    case 'Delete':
      theme = 'red'
      break
    default:
      theme = 'grey'
      break
  }
  return (
    <span
      style={{
        height: '1.5rem',
        border: `solid ${theme} 1px`,
        borderRadius: '10%',
        backgroundColor: theme,
        color: 'white',
        marginLeft: '1rem'
      }}
      onClick={callback}
    >
      {text}
    </span>
  )
}

export { Button }
