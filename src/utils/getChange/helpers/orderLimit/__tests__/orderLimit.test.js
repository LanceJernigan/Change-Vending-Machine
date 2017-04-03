import orderLimit from '../'

describe('orderLimit', () => {
  it('should return a function', () => {
    expect(typeof orderLimit).toBe('function');
  })
  
  it('should order items from highest to lowest', () => {
    const limit = [
      {
        value: 10,
      },
      {
        value: 20,
      },
    ]
    
    expect(orderLimit(limit)).toEqual([{value: 20}, {value: 10}]);
  })
})