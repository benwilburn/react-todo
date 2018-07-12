import React from 'react';
import { Button } from './'

const ListItem = ({ children, onDelete, onEdit }) => (
  <li style={{ marginTop: '1rem' }}>
    {children}
    <Button
      callback={onEdit}
      text={'Edit'}
      type={'Edit'}
    />
    <Button
      callback={onDelete}
      text={'Delete'}
      type={'Delete'}
    />
  </li>
)

export { ListItem }
