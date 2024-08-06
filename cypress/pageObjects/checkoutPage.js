import { generateRandomName, generateRandomSurname, generateRandomZipCode } from '../support/dataGerators'
class CheckoutPage {

  // #region Navegação
    gotoCheckout() {
      cy.get('.btn_action').click();
      cy.url().should('include', '/checkout-step-one.html')
    }
  // #endregion

  // #region Preenchimento de Informações
    fillPaymentInformation() {
      const randomName = generateRandomName()
      const randomSurname = generateRandomSurname()
      const randomZipCode = generateRandomZipCode()

      cy.get('input#first-name').type(randomName)
      cy.get('input#last-name').type(randomSurname)
      cy.get('input#postal-code').type(randomZipCode)
    }
  // #endregion

  // #region Ações
   clickContinue() {
    cy.get('.btn_primary').click()
    }
  
   clickFinish() {
    cy.get('.btn_action').click()
    }
  // #endregion
  
  // #region Verificações
  
    verifyPurchaseOverview() {
    cy.get('.summary_info').should('be.visible')
    cy.contains('Overview').should('be.visible')
    }

    verifySuccessMessage() {
      cy.get('.complete-header').should('be.visible').and('contain.text', 'THANK YOU FOR YOUR ORDER')
    }
  // #endregion
}

export default new CheckoutPage();