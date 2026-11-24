import { useState } from "react";
import Item from "./Item";

export default function GroceryList({ items, onDeleteItem , onToggleItem, onClearItems }) { 
  const [sortBy, setSortBy] = useState('input');

  let sortedItems;

switch (sortBy) {
  case 'name':
    sortedItems = [...items].sort((a, b) => a.name.localeCompare(b.name));
    break;
  case 'checked':
    sortedItems = [...items].sort((a, b) => a.checked - b.checked);
    break;
  default:
    sortedItems = items;
}

  return (
    <>
    <div className="list">
      <ul>
        {sortedItems.map(item => (
          <Item key={item.id} item={item} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />
        ))}
        
      </ul>
    </div>
    <div className="actions">
      <select value ={sortBy} onChange ={(e) => setSortBy(e.target.value)}>
        <option value="input">Sort by input order</option>
        <option value="name">Sort by item name</option>
        <option value="checked">Sort by check status</option>
      </select>
      <button onClick={onClearItems}> Clear List</button>
    </div>
    </>
  );
}