import checkLimit from '../'

describe('checkLimit', () => {
  it('should return a function', () => {
    expect(typeof checkLimit).toBe('function');
  })
  
  it('should return true if all items have a value property', () => {
    const limit = [
      {
        value: 10,
      },
      {
        value: 20,
      },
    ]
    
    expect(checkLimit(limit)).toBe(true)
  })
  
  it('should return false if not all items have a value property', () => {
    const limit = [
      {
        value: 10,
      },
      {
        amount: 3,
      },
    ]
    
    expect(checkLimit(limit)).toBe(false)
  })
})