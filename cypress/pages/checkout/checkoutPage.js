import CheckoutElements from './checkoutElement'
import { FIRST_NAME, LAST_NAME, POSTAL_CODE } from '../../support/constants';

class Checkoutpage {
    //*region Navegação
    gotoCheckout(){
    cy.get(CheckoutElements.checkoutButton).click(); 
    cy.url().should('include', '/checkout-step-one.html')
   }
    //#endregion

    // #region Preenchimento de Informações
    fillPaymentInformation() {
        cy.get(CheckoutElements.firstNameInput).type(FIRST_NAME);
        cy.get(CheckoutElements.lastNameInput).type(LAST_NAME);
        cy.get(CheckoutElements.postalCodeInput).type(POSTAL_CODE);
    }
    // #endregion

    // #region Ação de Continuar
     clickContinue() {
        cy.get(CheckoutElements.continueButton).contains('CONTINUE').click();
    }
    clickFinish(){
        cy.get(CheckoutElements.finishButton).contains('FINISH').click(); 
    }
    // #endregion

    // #region Verificações
    verifyPurchaseOverview() {
        cy.get(CheckoutElements.overviewSection).should('be.visible');
        cy.contains('Overview').should('be.visible');
    }

    verifySuccessMessage() {
        cy.get(CheckoutElements.successMessage).should('be.visible')
            .and('contain.text', 'THANK YOU FOR YOUR ORDER');
    }
    // #endregion
}
export default new Checkoutpage()