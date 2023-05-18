// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', () => {
  const clientId = Cypress.env('CLIENT_ID');
  const clientSecret = Cypress.env('CLIENT_SECRET');
  const scope = Cypress.env('SCOPE');

  // Make the OAuth2 login request
  cy.request({
    method: 'POST',
    url: 'https://auth.zamupay.com/connect/token',
    form: true,
    body: {
      grant_type: 'client_credentials',
      client_id: clientId,
      client_secret: clientSecret,
      scope: scope,
    },
  }).then((response) => {
    // Save the access token to the .env file
    const token = response.body.access_token;
    cy.writeFile('cypress/fixtures/oauth2_token.json', { token: token });
  });
});


Cypress.Commands.add('paymentOrderRequest', (data) => {
  // Read the token from the JSON file
  cy.fixture('oauth2_token').then((token) => {
    // Make the POST request with the token
    cy.request({
      method: 'POST',
      url: 'https://sandboxapi.zamupay.com/v1/payment-order/new-order',
      headers: {
        Authorization: `Bearer ${token.token}`,
      },
      body: data,
    }).then((response) => {
      // Assert on the response status code
      expect(response.status).to.equal(202);

       // Store the response in a JSON file in the fixtures folder
       cy.writeFile('cypress/fixtures/payment_order_response.json', JSON.stringify(response.body));
    });
  });
});


Cypress.Commands.add('getToken', () => {
  return cy.fixture('oauth2_token.json').its('token');
});







  

  