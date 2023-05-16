# Authentication Token Test Cases

## Test Case 1: Valid Token Generation
- **Description:** Verify that a valid authentication token is generated.
- **Preconditions:** User is logged in and has valid credentials.
- **Test Steps:**
  1. Send a request to generate an authentication token.
  2. Verify the response status code is 200 (OK).
  3. Verify the response body contains a valid token.
- **Expected Result:** A valid authentication token is generated successfully.

## Test Case 2: Invalid Credentials
- **Description:** Verify that an error is returned when using invalid credentials.
- **Preconditions:** User is logged in with invalid credentials.
- **Test Steps:**
  1. Send a request to generate an authentication token.
  2. Verify the response status code is 401 (Unauthorized).
  3. Verify the response body contains an error message indicating invalid credentials.
- **Expected Result:** An error message is returned indicating invalid credentials.

## Test Case 3: Expired Token
- **Description:** Verify that an error is returned when using an expired token.
- **Preconditions:** User is logged in with a token that has expired.
- **Test Steps:**
  1. Send a request using the expired token.
  2. Verify the response status code is 401 (Unauthorized).
  3. Verify the response body contains an error message indicating an expired token.
- **Expected Result:** An error message is returned indicating an expired token.

## Test Case 4: Token Revocation
- **Description:** Verify that a token is successfully revoked and cannot be used anymore.
- **Preconditions:** User is logged in with a valid token.
- **Test Steps:**
  1. Send a request to revoke the authentication token.
  2. Verify the response status code is 200 (OK).
  3. Try using the revoked token in a subsequent request.
  4. Verify the response status code is 401 (Unauthorized).
- **Expected Result:** The token is successfully revoked, and subsequent requests using the revoked token are denied.

