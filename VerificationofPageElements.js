describe("Log in", function() {
  it("sing in", function() {
   cy.visit("https://openweathermap.org/")
   cy.get('.search-container > input').type('USA')
   cy.get('.button-round').click()
   cy.get('.grid-5-4 > :nth-child(1) > .mobile-padding')
  })
})
