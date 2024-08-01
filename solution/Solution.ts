// Solution in TS
/**
 * Counts the number of senior citizens (people with age greater than 60) in the given details.
 * 
 * @param {string[]} details - An array of strings, where each string represents a person's details.
 * @return {number} - The count of senior citizens.
 */
function countSeniors(details: string[]): number {
    // Initialize a variable to store the count of senior citizens
    let numAboveAge60: number = 0;

    // Iterate over each detail in the array
    for (let i = 0; i < details.length; i++) {
        // Extract the age from the detail string (assuming it's in the format "xxxxxxDDMMYYxxxxxx")
        const age: number = Number(details[i].substring(11, 13));

        // Check if the age is greater than 60
        if (age > 60) {
            // If the age is greater than 60, increment the count
            numAboveAge60++;
        }
    }

    // Return the count of senior citizens
    return numAboveAge60;
}