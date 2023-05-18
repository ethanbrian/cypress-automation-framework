const { performGetRequestWithUUID } = require('../../support/apiutilsoriginator');

describe('My Test', () => {
  beforeEach(() => {
    // Read the UUID from the JSON file
    cy.fixture('uuid.json').then((uuidData) => {
      const uuid = uuidData.message.originatorConversationId;

      // Read the token from the JSON file
      cy.fixture('oauth2_token.json').then((token) => {
        const token = token.token;

        // Make the GET request with the UUID and token
        performGetRequestWithUUID('https://sandboxapi.zamupay.com/v1/payment-order/check-status', token, uuid);
      });
    });
  });

  it('should assert the response status code', () => {
    // Assert the response status code
    cy.fixture('payment_order_originator.json').then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
