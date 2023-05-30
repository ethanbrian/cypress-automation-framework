describe('Login Test', () => {
    beforeEach(() => {
      // Run this before each test case
      cy.visit('https://beta.zamupay.com/authentication/account/login'); // Replace with your application URL
    });
  
    it('should successfully login with valid credentials for the super user', () => {
      cy.get('#Username').type('authoriser'); // Replace with your username field selector
      cy.get('#Password').type('Abcd.12345!'); // Replace with your password field selector
      cy.get('.btn').click(); // Replace with your login button selector
  
      // Add assertions to verify successful login
      cy.url().should('include', '/dashboard'); // Replace with the expected URL after successful login
      cy.get('#welcome-message').should('contain', 'Welcome, Your Name'); // Replace with the welcome message element selector and expected text
    });

    it('should successfully login with valid credentials for the customer admin', () => {
        cy.get('#Username').type('Kajohn'); // Replace with your username field selector
        cy.get('#Password').type('Abc.123!!!'); // Replace with your password field selector
        cy.get('.btn').click(); // Replace with your login button selector
    
        cy.get('div').find('li').should('be.visible'); // Replace with the error message element selector
        cy.get('div').find('li').invoke('text').then((text) => {
        const regex = /Invalid login attempt (\d+) attempts remaining/; // Replace with the appropriate regex pattern
        const matches = text.match(regex);
        if (matches) {
        const numAttempts = matches[1]; // Captured number of attempts
        cy.log(`Number of attempts: ${numAttempts}`);
        } else {
        cy.log('Invalid login attempt not found');
        }
    });
      });
  
    it('should display an error message for invalid credentials the super user', () => {
      cy.get('#username').type('authoriser'); // Replace with an invalid username
      cy.get('#password').type('Abcd.123456!'); // Replace with an invalid password
      cy.get('#login-button').click(); // Replace with your login button selector
  
      // Add assertions to verify the error message
      cy.get('#error-message').should('be.visible'); // Replace with the error message element selector
      cy.get('#error-message').should('contain', 'Invalid credentials'); // Replace with the expected error message
    });

    it('should display an error message for invalid credentials the customer admin', () => {
        cy.get('#username').type('Kajohn'); // Replace with an invalid username
        cy.get('#password').type('Abc.12!!!'); // Replace with an invalid password
        cy.get('#login-button').click(); // Replace with your login button selector
    

        cy.get('div').find('li').should('be.visible'); // Replace with the error message element selector
        cy.get('div').find('li').invoke('text').then((text) => {
        const regex = /Invalid login attempt (\d+) attempts remaining/; // Replace with the appropriate regex pattern
        const matches = text.match(regex);
        if (matches) {
        const numAttempts = matches[1]; // Captured number of attempts
        cy.log(`Number of attempts: ${numAttempts}`);
        } else {
        cy.log('Invalid login attempt not found');
        }
    });

      });
  });
  