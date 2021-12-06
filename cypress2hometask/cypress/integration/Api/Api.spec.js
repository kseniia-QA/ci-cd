
describe('adminPage', () => {
  it('creates user', () => {


    cy.request({
      method: "POST",
      url: "https://petstore.swagger.io/v2/user",
      body: {
        "id": 14,
        "username": "Nick",
        "firstName": "Nikolaj",
        "lastName": "Mishowski",
        "email": "mail@gmail.com",
        "password": "password",
        "phone": "12345678",
        "userStatus": 0
      }



    }).then((response) => {
      cy.log(JSON.stringify(response.body));
      expect(response.status).to.eq(200);



    })
  })

  it(' updates new user', () => {
    cy.request({
      method: "PUT",
      url: "https://petstore.swagger.io/v2/user/Nick",
      body: {

        "id": 14,
        "username": "Nicky",
        "firstName": "Nikolaj",
        "lastName": "Mishowski",
        "email": "mail@gmail.com",
        "password": "password",
        "phone": "12345678",
        "userStatus": 0

      }

    }).then((response) => {
      cy.log(JSON.stringify(response.body));
      expect(response.status).to.eq(200);

    })
  })

  it('deletes new user', () => {
    cy.request({
      method: "DELETE",
      url: "https://petstore.swagger.io/v2/user/Nicky",
    }).then((response) => {
      cy.log(JSON.stringify(response.body));
      expect(response.status).to.eq(200);

    })
  })

  it('deletes new user', () => {

    cy.request({
      method: "GET",
      url: "https://petstore.swagger.io/v2/user/Nicky",
      failOnStatusCode: false,
    }).then((response) => {
      cy.log(JSON.stringify(response.body));
      expect(response.status).to.eq(404);
      expect(response.body.message).to.eq("User not found");

    })
  })
})
