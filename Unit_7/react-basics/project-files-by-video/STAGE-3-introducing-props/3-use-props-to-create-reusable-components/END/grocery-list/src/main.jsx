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

const Item = (props) => {
  return (
    <div className='item'>
      <button className='remove-item' />
      <span className='item-name'>{props.name}</span>
      <Counter quantity={props.quantity} />
    </div>
  )
}

const Counter = (props) => {
  return (
    <div className='quantity'>
      <span className='qty-label'>QTY</span>
      <button className='increment'>+</button>
      <button className='decrement'>-</button>
      <span className='quantity-amount'>{props.quantity}</span>
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
      <Item name="Apples" quantity={5} />
      <Item name="Bananas" quantity={7} />
      <Item name="Box of Pasta" quantity={1} />
      <Item name="Cookies" quantity={12} />
    </div>
  )
}

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);