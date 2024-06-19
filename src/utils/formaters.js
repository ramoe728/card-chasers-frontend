/**
 * Formats a number as a currency string in USD.
 * 
 * @param {number} price - The price to format.
 * @returns {string} - The formatted price in USD.
 */
const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
};

export default formatPrice;