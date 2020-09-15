const quotes = [
    "",
];

/**
 * Gets a random Piñera Quote
 * @returns {string}
 */
function randomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

module.exports = {
    randomQuote
};