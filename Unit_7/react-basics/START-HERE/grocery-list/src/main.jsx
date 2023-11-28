import { createRoot } from "react-dom/client";
import { StrictMode, useState } from "react";

const Header = (props) => {
  console.log(props);
  return (
    <header>
      <h1>{props.title}</h1>
      <span className="total-items"> Items: {props.itemTotal} </span>
    </header>
  );
};

//Item component is now able to send data back to its parent app component 
//through the callback function
const Item = (props) => {
  console.log(props.removeItem)
  return (
    <div className="item">
      <button className="remove-item" onClick={ () => props.removeItem(props.id)}/>
      <span className="item-name">{props.name}</span>
      <Counter />
    </div>
  );
};

const Counter = () => {
  const [quantity, setQuantity] = useState(0);
  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="quantity">
      <span className="qty-label">QTY</span>
      <button className="increment" onClick={incrementQuantity}>
        +
      </button>
      <button className="decrement" onClick={decrementQuantity}>
        -
        </button>
      <span className="quantity-amount">{quantity}</span>
    </div>
  );
};

//the app component will return a div
const App = () => {
  const [items, setItems] = useState([
    {
      name: "Apples",
      id: 1,
    },
    {
      name: "Bananas",
      id: 2,
    },
    {
      name: "Box of Pasta",
      id: 3,
    },
    {
      name: "Cookies",
      id: 4,
    },
  ])

  const handleRemoveItem = (id) => {
    setItems( prevItems => prevItems.filter(i => i.id !== id))
  }
  
  return (
    <div className="grocery-list">
      <Header title="Grocery List" 
      itemTotal={items.length} />

      {/* Grocery List */}
      {items.map((item) => (
        <Item 
        name={item.name} 
        id= {item.id}
        key={item.id} 
        removeItem = {handleRemoveItem} />
      ))}
    </div>
  );
};
//pass html dom element to createRoot to create a React root for the div element
const root = createRoot(document.getElementById("root"));

//call render method on root variable
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
