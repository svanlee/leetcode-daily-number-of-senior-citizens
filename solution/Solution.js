// Solution in JS
/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function (details) {
    const passengers = details.filter(d => { // Filter the array of details to get senior citizens
        return Number(d.slice(11, 13)) > 60 // Extract the age from the detail string and check if it's greater than 60
    })

    return passengers.length // Return the count of senior citizens
};