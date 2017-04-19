import checkLimit from './helpers/checkLimit/'
import orderLimit from './helpers/orderLimit/'

// Our default list of coins

    const defaultCoins = [
      {
        value: 100,
      },
      {
        value: 50,
      },
      {
        value: 20,
      },
      {
        value: 10,
      },
      {
        value: 5,
      },
      {
        value: 2,
      },
      {
        value: 1,
      },
    ];
    
/*
 *  getChange() - Used to get change for a passed value of coins (can be limited to specific coins by passing a limit)
 *
 *    params - val (number) - The base value for retrieving coins
 *             limit (array) - Used to limit types of coins and amounts of coins
 *
 *    returns - (array) - Change calculated based on the coins we have and the value we started with
 */

    const getChange = (_val, limit = null, max = false) => {
      
      // Make sure our value is a number or NaN for type checking below
      let val = parseInt(_val, 10);
      
      // Return an empty array of coins if our value is NaN or an invalid amount
      if (Number.isNaN(val) || val <= 0) {
        console.warn('getChange expects the first parameter to be a number');
        return [];
      }
      
      // Set our coin limit based on what we are passed if it's valid
      if (Array.isArray(limit)) {
        
        // Set our limit to what we're passed if it is valid and to our default if it is not
        limit = checkLimit(limit) ?
          max ?
            limit.filter(coin => (coin.value < max)) :
            limit :
          defaultCoins
      }
        
      // Set our coin limit if we aren't passed one
      if (limit === null)
        limit = defaultCoins;

      limit = orderLimit(limit);
      
      // Reduce our limit of coins into an array of coins for our change
      return limit.reduce((change, c, i) => {
        
        // Set initial amount of coins based on our limit - true if we don't have a limited supply
        let amount = c.hasOwnProperty('amount') ? c.amount : true
        
        // Set initial coin so we can calculate total number of current coin we need to return
        let coin = {
          value: c.value,
          amount: 0
        }
        
        // If our value is greater than the coin we are checking and we haven't run out of that coin
        while(val >= coin.value && amount) {
          
          // Add one to our coin's amount
          coin.amount += 1;
          // Update our val so we know how much we have left when searching for coins
          val -= coin.value;
          
          // Reduce our coin's amount if we have a limited number of coins
          if (amount !== true)
            amount--;
        };
        
        // If we need to return any of this coin, add it to our change array
        if (coin.amount > 0)
          change.push(coin)
        
        // If we are on our last coin but don't have enough to finish
        if (val && i === (limit.length - 1) && ! amount && change.length) {
          change = getChange(_val, limit, change.shift().value)
        }
        
        // Return the array with our change in it
        return change;
      }, [])
    }

export default getChange