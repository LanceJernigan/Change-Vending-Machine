import React from 'react'

import Card from '../Card/'

const vendingStyles = {
  display: 'inline-block',
  borderRadius: '3px',
  margin: '4px',
  padding: '10px 15px',
}

const VendingLimits = ({limit, use = true, toggleLimit}) => {
  return (
    <div>
      <h3 style={{margin: '20px 15px 10px', fontWeight: '100', color: (use ? 'rgba(0, 0, 0, .6)' : 'rgba(0, 0, 0, .35)')}} >Vending Limits</h3>
      <Card style={{background: (use ? '#f4f5f7' : '#f6f7f9')}}>
        <div style={{width: '100%'}}>
          {limit.map( coin => (<p style={Object.assign({...vendingStyles}, {background: (use ? '#fff' : '#fafafa'), boxShadow: (use ? '0 1px 2px rgba(0, 0, 0, .2)' : '0 1px 2px rgba(0, 0, 0, .1)'), color: (use ? 'rgba(0, 0, 0, .7)' : 'rgba(0, 0, 0, .35)')})} key={coin.value}>{coin.value} x {coin.amount}</p>))}
        </div>
        <button style={{cursor: 'pointer', margin: '15px 0 0 auto', padding: '10px 15px', boxSizing: 'border-box', outline: 'none', border: 'none', fontSize: '15px', background: '#fff', color: 'rgba(0, 0, 0, .7)', borderRadius: '3px', boxShadow: '0 1px 2px rgba(0, 0, 0, .2)'}} onClick={toggleLimit}>Vending Limit: {use ? 'On' : 'Off'}</button>
      </Card>
    </div>
  )
}

export default VendingLimits