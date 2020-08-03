describe('Sample Tests', () => {
  it('Loads the homepage', () => {
    cy.visit('/')
    cy.get('h1').contains('Welcome to the-internet')
    cy.get('ul li a').its('length').should('be.at.least', 44)
  })

  it('can login', () => {
    cy.fixture('auth').then((auth) => {
      cy.login(auth.testUser, auth.testPass)
    })
    // cy.getCookie('session').should('exist')
    cy.get('div#flash').should('contain.text', 'You logged into a secure area!')
    cy.get('h2').should('contain.text', 'Secure Area')
    cy.get('a.button[href="/logout"]').should('be.visible')
  })
})
