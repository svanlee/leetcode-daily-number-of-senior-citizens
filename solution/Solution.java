// Solution in JAVA
class Solution {
    public int countSeniors(String[] details) {
        // Initialize the answer variable to store the count of senior citizens
        int ans = 0;
        
        // Iterate over the array of details
        for (String detail : details) {
            // Extract the age from the detail string
            int age = Integer.parseInt(detail.substring(11, 13));
            
            // Check if the person is a senior citizen (age 60 or older)
            if (age > 60) {
                // If the person is a senior citizen, increment the answer
                ans++;
            }
        }
        
        // Return the total count of senior citizens
        return ans;
    }
}