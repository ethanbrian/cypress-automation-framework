/// <reference types="cypress" />


describe('GET Request', () => {
    it('should make a GET request with originatorid, id type, and token', () => {
      cy.fixture('payment_order_response.json').then((originatorid) => {
        cy.fixture('oauth2_token.json').then((token) => {
          cy.request({
            method: 'GET',
            url: 'https://sandboxapi.zamupay.com/v1/payment-order/check-status?Id='+originatorid.message.originatorConversationId+'&IdType=OriginatorConversationId',
            headers: {
              Authorization: `Bearer ${token.token}`,
            },
          }).then((response) => {
            // Add any assertions on the response here
            cy.log('Response:', response.body);
           // Assert that the status code is in the 2xx range
            expect(response.status).to.be.oneOf([200, 201, 202]);
            // const responseBody = response.body;
            //  const remarks = responseBody.remarks;
            //  expect(remarks).to.equal('Transactions');

          });
        });
      });
    });
  });
  


  