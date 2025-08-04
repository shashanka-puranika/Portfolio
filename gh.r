# -------------------------------------------------------------------
## R Basics: Working Directory, Projects, and Data Handling
# -------------------------------------------------------------------

# In this script, we'll walk through the basic operations in R and RStudio,
# focusing on good practices for organizing your data analysis projects.

# ===================================================================
## Section 1: Working Directory Management
# ===================================================================

# -- Check the current working directory --
# The working directory is the folder where R will look for files and save outputs.
getwd()

# -- Set the working directory --
# Method 1: Manually using the setwd() command.
# NOTE: Windows paths use backslashes (\). In R, you must either
# replace them with forward slashes (/) or use double backslashes (\\).

# This will cause an error: setwd("C:\Users\YourUser\Desktop\MyProject")
# Correct way (Option A: Forward slashes):
# setwd("C:/Users/YourUser/Desktop/MyProject")
# Correct way (Option B: Double backslashes):
# setwd("C:\\Users\\YourUser\\Desktop\\MyProject")

# Method 2: Using the RStudio menu
# Go to Session > Set Working Directory > Choose Directory...

# ===================================================================
## Section 2: Organizing Your Project
# ===================================================================
# R Projects are the best way to stay organized.
# To create one, go to File > New Project... > New Directory > New Project.
# This automatically sets your working directory to the project folder.

# -- Create sub-folders for organization --
# It's good practice to have separate folders for data, scripts, and results.
dir.create("data")
dir.create("scripts")
dir.create("results")

# ===================================================================
## Section 3: Basic R Operations and Variables
# ===================================================================

# -- R syntax: function(argument) --
print("Biotechnology") # 'print' is the function, "Biotechnology" is the argument

# -- Creating a variable (vector of numbers) --
# The '<-' is the assignment operator. It stores the values on the right
# into the variable on the left.
gene_expression <- c(2.3, 3.8, 3.9, 5.6, 9.4)

# -- Performing calculations --
mean(gene_expression) # This prints the result to the console but doesn't save it.

# -- Storing the result of a calculation in a new variable --
mean_result <- mean(gene_expression)

# ===================================================================
## Section 4: Basic Visualization
# ===================================================================

# -- Create a basic scatter plot --
plot(gene_expression)

# -- Create a histogram --
hist(gene_expression)

# -- Create a bar plot --
barplot(gene_expression)

# To save a plot, use the "Export" button in the Plots pane.

# ===================================================================
## Section 5: Basic Statistics and Data Types
# ===================================================================

# -- Get a quick statistical summary --
summary(gene_expression)

# --- R Data Types ---

# 1. Numeric (decimal or whole numbers)
x <- 24
class(x) # Check the data type

y <- -40
class(y)

# 2. Integer (whole numbers only)
# To explicitly create an integer, add 'L' after the number.
z <- 24L
class(z)

# 3. Character (text or strings)
# Must be enclosed in quotes "" or ''
var_4 <- c("gene1", "gene2", "gene3")
class(var_4)

# 4. Factor (for categorical data with defined levels)
disease_status <- c("cancer", "normal", "cancer", "normal", "cancer")
class(disease_status) # It's a character by default

# Convert character to factor
disease_status_fac <- as.factor(disease_status)
class(disease_status_fac)
levels(disease_status_fac) # See the categories ('cancer', 'normal')

# Re-leveling a factor to set a specific order (e.g., for models or plots)
disease_status_releveled <- factor(disease_status, levels = c("normal", "cancer"))
levels(disease_status_releveled) # 'normal' is now the first level (reference)

# 5. Logical (TRUE or FALSE)
age <- c(23, 25, 28)
age_check <- age < 25 # This creates a logical vector: TRUE, FALSE, FALSE
age_check

# ===================================================================
## Section 6: Importing and Manipulating a CSV File
# ===================================================================

# -- Import a CSV file --
# file.choose() opens a window to select the file interactively.
# Make sure your CSV file is in your 'data' sub-folder.
data <- read.csv(file.choose())

# Alternative (better for reproducible scripts):
# data <- read.csv("data/your_file_name.csv")

# -- Explore the imported data --
View(data)       # Open the dataset in a new tab
str(data)        # Check the structure and data types of each column

# -- Convert Character columns to Factors --
# The 'height' column is character but represents categories.
data$height_fac <- as.factor(data$height)
str(data) # A new column 'height_fac' is now a factor

# Re-level the new height factor column
data$height_fac <- factor(data$height_fac, levels = c("Tall", "Medium", "Short"))
levels(data$height_fac)

# Do the same for the 'gender' column
data$gender_fac <- as.factor(data$gender)
str(data)

# -- Convert Factor to Numeric (e.g., for modeling) --
# Let's convert gender to a numeric variable: Female = 1, Male = 0
data$gender_num <- ifelse(data$gender_fac == "Female", 1, 0)
View(data) # Check the new 'gender_num' column

# Check its class (it's numeric)
class(data$gender_num)

# If needed, you can convert it back to a factor (now with numeric levels)
data$gender_num_fac <- as.factor(data$gender_num)
class(data$gender_num_fac)
str(data)

# ===================================================================
## Section 7: Saving Your Work
# ===================================================================

# -- Save a processed data frame to a CSV file --
# We save it in the 'results' folder.
write.csv(data, file = "results/processed_patient_data.csv")

# -- Save your entire R workspace --
# This saves all objects in your Environment (variables, data frames, etc.)
# The file is saved with an .RData extension.
save.image(file = "full_workspace.RData")

# -- Save specific objects from your workspace --
save(gene_expression, disease_status, file = "results/specific_objects.RData")

# -- Load a workspace --
# First, let's clear the environment to see it work
rm(list = ls())

# Now, load the saved workspace back into R
load("full_workspace.RData")

