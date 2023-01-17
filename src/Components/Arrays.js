import React from 'react'

export default function Arrays() {
     const name = ['pooja', 'rishita', 'sakshi'];
  return (
    
        <ul>
      {name.map(name => (
        <li key={name}>{name}</li>
      ))}
    </ul>
    
  )
}
