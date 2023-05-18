const fs = require('fs');

function performGetRequest(url, token) {
  cy.request({
    method: 'GET',
    url: url,
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then((response) => {
    // Store the response in a JSON file in the fixtures folder
    fs.writeFile('cypress/fixtures/payment_order.json', JSON.stringify(response.body), (err) => {
      if (err) throw err;
    });
  });
}

module.exports = {
  performGetRequest
};
