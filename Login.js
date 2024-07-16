describe("Log in", function() {
    it("sing in", function() {
     cy.visit("https://home.openweathermap.org/users/sign_in")
     cy.get('.new_user > :nth-child(3) > #user_email').type('valentinkaraman40@gmail.com')
     cy.get('#user_password').type('1234567890')
     cy.get('#user_remember_me').click()
     cy.get('.new_user > .btn').click()
    })
  })