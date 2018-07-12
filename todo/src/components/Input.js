import React from 'react';
import './css/Input.css'

const Input = ({ editing, contents, callback}) => {
  const className = editing ? 'active' : ''
  return (
    <input className={className} value={contents} onChange={callback} />
  )
}

export { Input }
