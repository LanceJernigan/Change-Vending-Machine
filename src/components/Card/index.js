import React from 'react'

const styles = {
  background: '#f4f5f7',
  boxShadow: '0 1px 2px rgba(0, 0, 0, .3)',
  borderRadius: '3px',
  margin: '5px',
  padding: '15px',
  boxSizing: 'border-box',
  display: 'flex',
  flexWrap: 'wrap'
};

const Card = ({children, style = {}, className = ''}) => <div className={className} style={Object.assign({...styles}, style)}>{children}</div>

export default Card