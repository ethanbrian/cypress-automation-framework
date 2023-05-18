

function performGetRequestWithUUID(url, token, uuid) {
  cy.request({
    method: 'GET',
    url: `${url}?uuid=${uuid}&idtype=originatorConversationId`,
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then((response) => {
    // Assert the status code
    expect(response.status).to.eq(200);

    // Store the response in a JSON file in the fixtures folder
    cy.writeFile('cypress/fixtures/payment_originator.json', JSON.stringify(response.body));
  });
}

module.exports = {
  performGetRequestWithUUID
};
