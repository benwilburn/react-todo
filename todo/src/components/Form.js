import React from 'react';

const Form = ({buttonText, children, callback}) => (
  <form onSubmit={callback}>
    {children}
    <button>{buttonText}</button>
  </form>
)

export { Form }
