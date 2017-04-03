/*
 *  checkLimit() - Used to test that our limit contains only valid objects with a value property
 *
 *    params - limit (array) - list of coins to check against
 *
 *    returns - (boolean) - whether all items in list contain a value property
 */
 
    const checkLimit = limit => limit.reduce((valid, coin) => (valid ? coin.hasOwnProperty('value') : false), true);
 
    export default checkLimit;