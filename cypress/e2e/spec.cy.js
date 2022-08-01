/// <reference types="cypress" />
describe('page', () => {
  const blue = 'rgb(0, 0, 255)'

  it('passes when IntersectionObserver\'s `root` is `document`', () => {
    cy.viewport(500, 100)

    cy.visit('index.html')
    cy.get('#last-paragraph').scrollIntoView({ duration: 3000 });
    cy.get('#last-paragraph').should('have.css', 'color', blue);
  })

  it('fails when IntersectionObserver\'s `root` is `null`', () => {
    cy.viewport(500, 100)

    cy.visit('index.html?noroot')
    cy.get('#last-paragraph').scrollIntoView({ duration: 3000 });
    cy.get('#last-paragraph').should('have.css', 'color', blue);
  })

})
