
  const { performGetRequest } = require('../../support/apiutils');

describe('My Test', () => {
  it('should perform a GET request and store the response', () => {
    cy.getToken().then((token) => {
      const url = 'https://sandboxapi.zamupay.com/v1/transaction-routes/assigned-routes';
      performGetRequest(url, token);
    });
  });
});

  