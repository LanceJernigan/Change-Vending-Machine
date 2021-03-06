import React from 'react';
import getChange from '../../utils/getChange/'

import Card from '../Card'
import Change from '../Change'
import VendingLimits from '../VendingLimits'

const defaultCoins = [
  {
    value: 100,
    amount: 11,
  },
  {
    value: 50,
    amount: 24,
  },
  {
    value: 20,
    amount: 0,
  },
  {
    value: 10,
    amount: 99,
  },
  {
    value: 5,
    amount: 200,
  },
  {
    value: 2,
    amount: 11
  },
  {
    value: 1,
    amount: 23,
  },
];

class App extends React.Component {
  
  constructor(props) {
    super(props)
    
    this.state = {
      useLimit: true,
      limit: defaultCoins,
      value: '',
      change: []
    }
  }
  
  updateValue = val => {
    const value = parseInt(val, 10)
    this.setState({
      ...this.state,
      value: Number.isNaN(value) ? '' : value,
      change: Number.isNaN(value) ? [] : getChange(value, this.state.useLimit ? this.state.limit : null) 
    })
  }
  
  takeChange = () => {
    
    if (! this.state.useLimit) {
      this.setState({
        ...this.state,
        value: '',
        change: []
      })
      
      return
    }
    
    let limit = this.state.limit.map( coin => {
      
      let c = this.state.change.find( _c => _c.value === coin.value)
      
      if (c) {
        coin = {
          ...coin,
          amount: coin.amount - c.amount
        }
      }
      
      return coin
      
    })
    
    this.setState({
      limit: limit,
      change: [],
      value: ''
    })
  }
  
  toggleLimit = () => this.setState({...this.state, useLimit: ! this.state.useLimit})
  
  render() {
    return (
      <div className="App" style={{maxWidth: '500px', margin: 'auto', fontFamily: 'helvetica'}}>
        <Card>
          <h1 style={{margin: '0 0 5px 0', color: 'rgba(0, 0, 0, .8)'}}>Amount</h1>
          <p style={{margin: '0 0 20px 0', width: '100%', color: 'rgba(0, 0, 0, .7)'}}>Enter the amount of change you would like to withdraw.</p>
          <input type='number' value={this.state.value} style={{width: '100%', padding: '10px 15px', boxSizing: 'border-box', outline: 'none', border: 'none', fontSize: '20px', background: '#fff', color: 'rgba(0, 0, 0, .8)', borderRadius: '3px', boxShadow: '0 1px 2px rgba(0, 0, 0, .2)'}} onChange={e => this.updateValue(e.currentTarget.value)} onKeyPress={e => e.which === 13 ? this.takeChange() : null } />
        </Card>
        <Change value={this.state.value} change={this.state.change} takeChange={this.takeChange} />
        <VendingLimits limit={this.state.limit} use={this.state.useLimit} toggleLimit={this.toggleLimit} />
      </div>
    )
  }
  
}

export default App