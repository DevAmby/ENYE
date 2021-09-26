import React from 'react'

const CharacterItem = ({ item }) => {
    console.log ( item )
    return (
        <div className='card'>
      <div className='card-inner'>
        
        <div className='card-back'>
          <h1>{item.FirstName}</h1>
          <ul>
            <li>
              <strong>First Name:</strong> {item.FirstName}
            </li>
            <li>
              <strong>Last Name:</strong> {item.LastName}
            </li>
            <li>
              <strong>Gender:</strong> {item.Gender}
            </li>
            
            <li>
              <strong>Credit Card Number:</strong> {item.CreditCardNumber}
            </li>
            <li>
              <strong>Credit Card Type:</strong> {item.CreditCardType}
            </li>
    
            <li>
              <strong>User Name:</strong> {item.UserName}
            </li>
            <li>
              <strong>Last Login:</strong> {item.LastLogin}
            </li>

            <li>
              <strong>Payment Method:</strong> {item.PaymentMethod}
            </li>
          </ul>
        </div>
      </div>
    </div>
    )

    
}


export default CharacterItem


   