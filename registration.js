
describe('My Test Suite', () => {
    beforeEach(() => {
      cy.intercept('POST', '/your/captcha/endpoint', (req) => {
        req.reply({ captchaPassed: true });
      });
    });
    it('should perform some actions without CAPTCHA', () => {
     cy.visit("https://home.openweathermap.org/users/sign_in")
     cy.contains("Create an Account.").click()
     cy.get('#user_username').type('Валентин')
     cy.get('#user_email').type('valantinekaraman@gmail.com')
     cy.get('#user_password').type('1234567890')
     cy.get('#user_password_confirmation').type('1234567890')
     cy.get('#agreement_is_age_confirmed').click()
     cy.get('#agreement_is_accepted').click()
     cy.contains("Create Account").click()
    });
  });