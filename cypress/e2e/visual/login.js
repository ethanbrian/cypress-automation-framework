describe('Login and Redirect to Dashboard', () => {
  it('should successfully login and redirect to the dashboard', () => {
    // Visit the login page
    cy.visit('https://beta.zamupay.com/authentication/account/login?ReturnUrl=%2F'); // Replace '/login' with the actual login page URL
    
    // Enter username and password
    cy.get('#Username').type('authoriser');
    cy.get('#Password').type('Abcd.12345!');
    
    // Submit the login form
    cy.get('button[type="submit"]').click();
    
    // Assert that the user is redirected to the dashboard
    cy.url().should('include', '/dashboard'); // Replace '/dashboard' with the actual dashboard URL
    
    // Add any other assertions or tests for the dashboard page as needed
  });
});
