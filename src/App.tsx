import React from 'react';
import { useItems } from './items.store'

function App() {
  const addItem = useItems(state => state.pushToItems)
  const removeLastItem = useItems(state => state.removeLastItem)

  return (
    <>
      <h1>Item List</h1>
      <Items />

      <button onClick={() => addItem(Math.floor(Math.random()*100))}>Add item</button>
      <br />
      <br />
      <button onClick={removeLastItem}>Remove Item</button>
    </>
  );
}

const Items = () => {
  const items = useItems(state => state.items)

  return <div style={{display: 'flex', gap: '10px'}}>
    {items.map((item, key) => <h2 key={key}>{item}</h2>)}

  </div>;
}

export default App;
