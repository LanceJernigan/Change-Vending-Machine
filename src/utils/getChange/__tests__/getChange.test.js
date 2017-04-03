import getChange from '../';

describe('getChange', () => {
  it('should return a function', () => {
    expect(typeof getChange).toBe('function')
  })
  
  it('should return an empty array if passed an invalid amount', () => {
    const val = 'invalid';
    const change = getChange(val);
    
    expect(change).toEqual([])
  })
  
  it('should return a list of coins if passed a valid amount', () => {
    const val = 125;
    const change = getChange(val);
    
    expect(Array.isArray(change))
  })
  
  it('should only return specific coins if passed a limit as the second parameter', () => {
    const val = 40;
    const limit = [
      {
        value: 20,
      },
    ];
    const change = getChange(val, limit);
    
    expect(change).toEqual([{value: 20, amount: 2}])
  })
  
  it('should only return select number of specific coin if amount of coin is surpassed', () => {
    const val = 40;
    const limit = [
      {
        value: 20,
        amount: 1,
      },
      {
        value: 10,
      }
    ];
    const change = getChange(val, limit);
    
    expect(change).toEqual([{value: 20, amount: 1}, {value: 10, amount: 2}])
  })
  
  it('should return an empty array if there are not enough coins to provide accurate change', () => {
    const val = 40;
    const limit = [
      {
        value: 10,
        amount: 3,
      },
    ];
    const change = getChange(val, limit);
    
    expect(change).toEqual([])
  })

})