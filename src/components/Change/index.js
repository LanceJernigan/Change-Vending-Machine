import React from 'react'

import Card from '../Card/'

const coinStyles = {
  display: 'inline-block',
  background: '#fff',
  boxShadow: '0 1px 2px rgba(0, 0, 0, .2)',
  color: 'rgba(0, 0, 0, .7)',
  borderRadius: '3px',
  margin: '4px',
  padding: '10px 15px',
}

const Change = ({value, change, takeChange = false}) => {
  
  if (value && change !== null) {
    if (change.length) {
      return (
        <Card style={{justifyContent: 'flex-start'}}>
          <h3 style={{margin: '0 0 15px 0', color: 'rgba(0, 0, 0, .75)'}}>Change</h3>
          <div style={{width: '100%'}}>
            {change.map( coin => (<p style={coinStyles} key={coin.value}>{coin.value} x {coin.amount}</p>))}
          </div>
          {takeChange ? <button tabIndex="0" style={{cursor: 'pointer', margin: '15px 0 0 auto', padding: '10px 15px', boxSizing: 'border-box', outline: 'none', border: 'none', fontSize: '15px', background: '#fff', color: 'rgba(0, 0, 0, .7)', borderRadius: '3px', boxShadow: '0 1px 2px rgba(0, 0, 0, .2)'}} onClick={takeChange}>Take Change</button> : null}
        </Card>
      )
        
    }
    return <Card><p>There are not enough coins to process this transaction</p></Card>
  }

  return null
  
}

export default Change