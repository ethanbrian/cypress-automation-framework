describe('Forgot Password Test', () => {
    beforeEach(() => {
      // Run this before each test case
      cy.visit('https://beta.zamupay.com/authentication/account/login?ReturnUrl=%2F'); // Replace with your application URL
    });
  
    it('should successfully reset password with valid email', () => {
      cy.contains('Forgot Password').click(); // Replace with your "Forgot Password" link selector
      cy.get('#email').type('testuser@example.com'); // Replace with your email field selector
      cy.get('#reset-button').click(); // Replace with your "Reset Password" button selector
  
      // Add assertions to verify successful password reset
      cy.contains('Success message').should('be.visible'); // Replace with the success message element selector
      cy.contains('Check your email for further instructions.').should('be.visible'); // Replace with the expected success message
    });
  
    it('should display an error message for invalid email', () => {
      cy.contains('Forgot Password').click(); // Replace with your "Forgot Password" link selector
      cy.get('#email').type('invalid-email'); // Replace with an invalid email
      cy.get('#reset-button').click(); // Replace with your "Reset Password" button selector
  
      // Add assertions to verify the error message
      cy.contains('Error message').should('be.visible'); // Replace with the error message element selector
      cy.contains('Please enter a valid email address.').should('be.visible'); // Replace with the expected error message
    });
  });
  