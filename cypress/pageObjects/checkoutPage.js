import { FIRST_NAME, LAST_NAME, POSTAL_CODE } from '../support/constants'

class CheckoutPage {

  // #region Navegação
    gotoCheckout() {
      cy.get('.btn_action').click();
      cy.url().should('include', '/checkout-step-one.html')
    }
  // #endregion

  // #region Preenchimento de Informações
    fillPaymentInformation() {
      cy.get('input#first-name').type(FIRST_NAME)
      cy.get('input#last-name').type(LAST_NAME)
      cy.get('input#postal-code').type(POSTAL_CODE)
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