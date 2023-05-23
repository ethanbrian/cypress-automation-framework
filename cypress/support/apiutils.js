function performGetRequest(url, token) {
    cy.request({
      method: 'GET',
      url: url,
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      // Assert the status code
      // Assert that the status code is in the 2xx range
    expect(response.status).to.be.oneOf([200, 201, 202]);
  
      // Store the response in a JSON file in the fixtures folder
      cy.writeFile('cypress/fixtures/payment_order.json', response.body);
    });
  }
  
  module.exports = {
    performGetRequest
  };
  