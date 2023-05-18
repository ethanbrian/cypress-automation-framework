function performGetRequest(url, token) {
    cy.request({
      method: 'GET',
      url: url,
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      // Assert the status code
      expect(response.status).to.eq(200);
  
      // Store the response in a JSON file in the fixtures folder
      cy.writeFile('cypress/fixtures/payment_order.json', response.body);
    });
  }
  
  module.exports = {
    performGetRequest
  };
  