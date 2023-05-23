import { v4 as uuidv4 } from 'uuid';

describe('Api Endpoints for zamupay', () => {
  it('should send a payment order request with token', () => {

    const id = uuidv4();
    // Login to generate a token
    cy.login();

    // Data for the POST request
const data = {
    ShortCode : "12344",
    Amount : "1",
    PhoneNumber : "254701973394",
    AccountNo : "4000000",
    TransactionDesc : "Test",
    originatorConversationId: id,
    CallBackUrl : "https://eniufy8w35ok.x.pipedream.net/"
}
    // Send the POST request with the token
    cy.expresspostrequest(data);
  });
});
