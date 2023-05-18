
  const { performGetRequest } = require('../../support/apiutils');

describe('Being able to retrieve transactional routes in zamupay', () => {
  it('should perform a GET request ', () => {
    cy.getToken().then((token) => {
      const url = 'https://sandboxapi.zamupay.com/v1/transaction-routes/assigned-routes';
      performGetRequest(url, token);
    });
  });
});

  