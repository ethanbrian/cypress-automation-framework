# Login Test Cases

## Test Case 1: Successful Login
**Objective:** To verify that a user can successfully login with valid credentials.

**Steps:**
1. Launch the application.
2. Enter a valid username in the username field.
3. Enter a valid password in the password field.
4. Click on the login button.

**Expected Result:**
- The user should be logged in and redirected to the dashboard/homepage.
- A welcome message should be displayed indicating a successful login.

## Test Case 2: Invalid Credentials
**Objective:** To verify that the application displays an error message for invalid login credentials.

**Steps:**
1. Launch the application.
2. Enter an invalid username in the username field.
3. Enter an invalid password in the password field.
4. Click on the login button.

**Expected Result:**
- The application should display an error message indicating invalid credentials.
- The user should not be logged in and should remain on the login page.

## Test Case 3: Empty Username
**Objective:** To verify that the application prompts for a username when the username field is left empty.

**Steps:**
1. Launch the application.
2. Leave the username field empty.
3. Enter a valid password in the password field.
4. Click on the login button.

**Expected Result:**
- The application should display an error message indicating that a username is required.
- The user should not be logged in and should remain on the login page.

## Test Case 4: Empty Password
**Objective:** To verify that the application prompts for a password when the password field is left empty.

**Steps:**
1. Launch the application.
2. Enter a valid username in the username field.
3. Leave the password field empty.
4. Click on the login button.

**Expected Result:**
- The application should display an error message indicating that a password is required.
- The user should not be logged in and should remain on the login page.

## Test Case 5: Forgot Password
**Objective:** To verify that the user can reset their password using the "Forgot Password" functionality.

**Steps:**
1. Launch the application.
2. Click on the "Forgot Password" link.
3. Enter the registered email address in the provided field.
4. Click on the "Reset Password" button.

**Expected Result:**
- The application should display a success message indicating that a password reset email has been sent to the user's email address.
- The user should receive an email with instructions to reset their password.

