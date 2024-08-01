# Counts the number of senior citizens (people with age greater than 60) in the given details.
# 
# @param {String[]} details - An array of strings, where each string represents a person's details.
# @return {Integer} - The count of senior citizens.
def count_seniors(details)
  # Initialize a variable to store the count of senior citizens
  num_above_age_60 = 0

  # Iterate over each detail in the array
  details.each do |detail|
    # Extract the age from the detail string (assuming it's in the format "xxxxxxDDMMYYxxxxxx")
    age = detail[11, 2].to_i

    # Check if the age is greater than 60
    if age > 60
      # If the age is greater than 60, increment the count
      num_above_age_60 += 1
    end
  end

  # Return the count of senior citizens
  num_above_age_60
end