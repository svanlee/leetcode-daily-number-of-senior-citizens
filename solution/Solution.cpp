// Solution in CPP
#include <vector>
#include <string>

class Solution
{
public:
    int countSeniors(vector<string> &details)
    {
        // Initialize the answer variable to store the count of senior citizens
        int ans = 0;

        // Iterate over the list of details
        for (int i = 0; i < details.size(); i++)
        {
            // Extract the age from the detail string
            // Convert the characters at index 11 and 12 to integers,
            // then combine them to form the age
            int age = ((details[i][11] - '0') * 10) + (details[i][12] - '0');

            // Check if the person is a senior citizen (age 60 or older)
            // If the person is a senior citizen, increment the answer by 1
            ans += (age > 60);
        }

        // Return the total count of senior citizens
        return ans;
    }
};