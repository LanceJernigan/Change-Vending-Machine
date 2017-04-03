import React from 'react'

import Card from '../Card/'

const vendingStyles = {
  display: 'inline-block',
  background: 'rgba(0, 0, 0, .05)',
  color: 'rgba(0, 0, 0, .7)',
  borderRadius: '3px',
  margin: '4px',
  padding: '10px 15px',
}

const VendingLimits = ({limit, use = true, toggleLimit}) => {
  return (
    <div>
      <h3 style={{margin: '20px 15px 10px', color: 'rgba(0, 0, 0, .6)', fontWeight: '100'}} >Vending Limits</h3>
      <Card>
        <div style={{width: '100%'}}>
          {limit.map( coin => (<p style={Object.assign(vendingStyles, {opacity: (use ? '1' : '.3')})} key={coin.value}>{coin.value} x {coin.amount}</p>))}
        </div>
        <button style={{cursor: 'pointer', marginLeft: 'auto', padding: '10px 15px', boxSizing: 'border-box', outline: 'none', border: 'none', fontSize: '15px', background: '#fff', color: 'rgba(0, 0, 0, .7)', borderRadius: '3px', boxShadow: '0 1px 2px rgba(0, 0, 0, .2)'}} onClick={toggleLimit}>Vending Limit: {use ? 'On' : 'Off'}</button>
      </Card>
    </div>
  )
}

export default VendingLimits