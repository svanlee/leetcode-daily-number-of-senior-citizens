// Solution in CS
public class Solution
{
    public int CountSeniors(string[] details)
    {
        // Initialize the answer variable to store the count of senior citizens
        int ans = 0;

        // Iterate over the array of details
        foreach (string detail in details)
        {
            // Extract the age from the detail string
            int age = int.Parse(detail.Substring(11, 2));

            // Check if the person is a senior citizen (age 60 or older)
            if (age > 60)
            {
                // If the person is a senior citizen, increment the answer
                ans++;
            }
        }

        // Return the total count of senior citizens
        return ans;
    }
}