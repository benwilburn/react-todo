import React from 'react';
import { ListItem } from '../components'

const List = ({ onDelete, onEdit, items }) => (
  <ul>
    {items.map(item =>
      <ListItem
        onEdit={() => onEdit(item)}
        onDelete={() => onDelete(item)}
        key={item.toString()}
      >
        {item}
      </ListItem>
    )}
  </ul>
)

export { List }
