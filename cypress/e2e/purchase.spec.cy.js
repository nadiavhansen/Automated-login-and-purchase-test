describe('E2E Test for purchasing', () => {

    it('Product purchase flow', () => {
      cy.login_test('standard_user','secret_sauce')
      cy.get('[data-test="title"]').should('contain', 'Products')

      cy.contains('Sauce Labs Onesie').click()
      cy.get('.btn_primary').click()
      cy.get('[data-test="back-to-products"]').click()

      cy.contains('Sauce Labs Bike Light').click()
      cy.get('.btn_primary').click()
      cy.get('[data-test="back-to-products"]').click()

      cy.contains('Sauce Labs Bolt T-Shirt').click()
      cy.get('.btn_primary').click()
      cy.get('[data-test="back-to-products"]').click()

      cy.get('[data-test="shopping-cart-badge"]').should('have.text', '3')
      cy.get('[data-test="shopping-cart-badge"]').click()
      cy.verifying_products_test()

      cy.get('[data-test="checkout"]').click()
      cy.get('[data-test="firstName"]').type('Nadia')
      cy.get('[data-test="lastName"]').type('Hansen')
      cy.get('[data-test="postalCode"]').type('02554')
      cy.get('[data-test="continue"]').click()

      cy.verifying_products_test()

      cy.get('[data-test="total-label"]').should('have.text','Total: $36.69')
      cy.get('[data-test="finish"]').click()
      cy.get('[data-test="complete-header"]').should('have.text','Thank you for your order!')
    })

    it('Sorting products low to high', () => {
        cy.login_test('standard_user','secret_sauce')
        cy.get('[data-test="title"]').should('contain', 'Products')
  
        //sorting
        cy.get('[data-test="product-sort-container"]').select('Price (low to high)')
        cy.get(':nth-child(1) > [data-test="inventory-item-description"]').should('contain','Sauce Labs Onesie')
        cy.get(':nth-child(2) > [data-test="inventory-item-description"]').should('contain','Sauce Labs Bike Light')
        cy.get(':nth-child(3) > [data-test="inventory-item-description"]').should('contain','Sauce Labs Bolt T-Shirt')
  
      })


  })