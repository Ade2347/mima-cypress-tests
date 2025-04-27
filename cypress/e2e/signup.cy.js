
describe('Sign up tests', () => {
    it('Signup without referral code', () => {
        cy.visit('/');
        cy.get('.Header2_header__nav__btn__wRKfY div:nth-child(2)>button').should('be.visible').click()
        cy.get('#fullname').should('exist').and('be.visible').type('John Doe')
        cy.get('#businessname').should('exist').and('be.visible').type('my test company')
        cy.get('#businessemail').should('exist').and('be.visible').type('test@example.com')

    });
    it('Signup without referral code', () => {
        cy.get('.Header2_header__nav__btn__wRKfY div:nth-child(2)>button').should('be.visible').click()
        cy.get('#fullname').should('exist').and('be.visible').type('John Doe')
        cy.get('#businessname').should('exist').and('be.visible').type('my test company')
        cy.get('#businessemail').should('exist').and('be.visible').type('test@example.com')

    });
});
            