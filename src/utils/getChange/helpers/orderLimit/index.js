/*
 *  orderLimit() - Used to order our coins from highest value to lowest for quicker, less resource intensive calculating
 *
 *    params - limit (array) - list of coins to check against
 *
 *    returns - (array) - limit sorted by coins value from highest to lowest
 */
    
    const orderLimit = limit => limit.sort((a, b) => (a.value < b.value ? 1 : a.value > b.value ? -1 : 0));
    
    export default orderLimit