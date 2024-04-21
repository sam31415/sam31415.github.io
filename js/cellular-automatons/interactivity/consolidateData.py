import os
import pandas as pd
import re

# Directory containing the CSV files
directory = 'C:/Users/samue/Downloads'
# Consolidated file
like_data_file = 'C:/Users/samue/Documents/Pictures/design/20240401-gr-game-circuit-python-small/like_data.csv'

# Pattern for the CSV file names
pattern = re.compile(r'dataAutomata(\(\d+\))?\.csv')

# DataFrame to store the consolidated data
consolidated_data = pd.DataFrame()

# Check if consolidated_data.csv exists
if os.path.isfile(like_data_file):
    consolidated_data = pd.read_csv(like_data_file)

# Scan the directory for CSV files
for filename in os.listdir(directory):
    if pattern.match(filename):
        # Read the CSV file
        data = pd.read_csv(os.path.join(directory, filename))

        # Append the data to the consolidated data
        consolidated_data = consolidated_data.append(data, ignore_index=True)

        # Delete the CSV file
        os.remove(os.path.join(directory, filename))

# Save the consolidated data to a CSV file
consolidated_data.to_csv(like_data_file, index=False)