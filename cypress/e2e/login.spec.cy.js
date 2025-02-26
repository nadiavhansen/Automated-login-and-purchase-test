describe('Login test', () => {

    it('Successful login test', () => {
      cy.login_test('standard_user','secret_sauce')
      cy.get('[data-test="title"]').should('contain', 'Products')
    })

    it('User doesnt match test', () => {
      cy.login_test('user','secret_sauce')
      cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
      })

    it('Password doesnt match test', () => {
      cy.login_test('standard_user','sauce')
      cy.get('[data-test="error"]').should('contain','Epic sadface: Username and password do not match any user in this service')
      })
      
  })