import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
      <span className='total-items'>Items: {props.itemTotal}</span>
    </header>
  )
}

const Item = () => {
  return (
    <div className='item'>
      <button className='remove-item' />
      <span className='item-name'>Apples</span>
      <Counter />
    </div>
  )
}

const Counter = () => {
  return (
    <div className='quantity'>
      <span className='qty-label'>QTY</span>
      <button className='increment'>+</button>
      <button className='decrement'>-</button>
      <span className='quantity-amount'>15</span>
    </div>
  )
}

const App = () => {
  return (
    <div className='grocery-list'>
      <Header 
        title='My Grocery List' 
        itemTotal={1}
      />

      {/* Grocery List */}
      <Item />
    </div>
  )
}

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);