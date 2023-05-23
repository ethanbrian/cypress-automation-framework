import { v4 as uuidv4 } from 'uuid';

describe('Api Endpoints for zamupay', () => {
  it('should send a payment order request with token', () => {

    const id = uuidv4();
    // Login to generate a token
    cy.login();

    // Data for the POST request
const data = {
  originatorConversationId: id,
  paymentNotes: 'Transactions',
  paymentOrderLines: [
    {
      recipient: {
        name: "Anne E",
        address: "Nairobi",
        emailAddress: "anne.sagini@pycs.co.ke",
        phoneNumber: "+254727363872",
        idType: "National ID",
        idNumber: "10038422",
        financialInstitution: "Mpesa",
        primaryAccountNumber: "+254790883713",
        mccmnc: "63902",
        ccy: 404,
        country : "KE",
        purpose: "TEST"
      },
      transaction: 
      {
        routeId: "10f4c83c-90b6-ed11-ad49-0ee00e897f52",
        ChannelType: 20,
        customerAccountNo :"000123",
        amount: 100,
        reference: "Testing",
        systemTraceAuditNumber:id
      }

    }
  ]
}
    // Send the POST request with the token
    cy.paymentOrderRequest(data);
  });
});
