import React from 'react'

export default function Arrays() {
  const cart = [
    [1,2,3],
    [4,5,6]
  ];
  return (
    <div>
      {cart.map((items) => {
        return (
          <ul>
            {items.map((subItems) => {
              return <li> {subItems} </li>;
            })}
          </ul>
        );
      })}
    </div>
  );
}
