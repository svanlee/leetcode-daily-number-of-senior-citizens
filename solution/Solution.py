# Solution in PY
from typing import List


class Solution:
    def countSeniors(self, details: List[str]) -> int:
        # Initialize a counter for senior citizens
        count = 0
        
        # Iterate over the list of details
        for people in details:
            # Extract the age from the detail string (assuming it's in the format "xx" where xx is the age)
            age = int(people[11:13])
            
            # Check if the person is a senior citizen (age 60 or older)
            if age > 60:
                # If the person is a senior citizen, increment the counter
                count += 1
        
        # Return the total count of senior citizens
        return count