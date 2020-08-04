// Use this file to keep track of common API routes (e.g. login, search) that you would like to use with cy.wait()
// Examples: 
// cy.wait('@getProducts')
// cy.wait('@login').its('status').should('eql', '200')

beforeEach(() => {
  cy.server() // This initial command is required to use routes

  // cy.route('GET', '/products?*').as('getProducts')
  // cy.route('POST', '/login').as('login')
})
