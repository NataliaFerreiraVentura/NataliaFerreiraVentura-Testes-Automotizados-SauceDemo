import CheckoutElements from './checkoutElement';
import { FIRST_NAME, LAST_NAME, POSTAL_CODE } from '../../support/constants';

class CheckoutPage {
  // #region Navegação
  /**
   * Navega para a página de checkout e confirma que a URL está correta.
   */
  gotoCheckout() {
    cy.get(CheckoutElements.checkoutButton).click();
    cy.url().should('include', '/checkout-step-one.html');
  }
  // #endregion

  // #region Preenchimento de Informações
  /**
   * Preenche as informações de pagamento com dados constantes.
   */
  fillPaymentInformation() {
    cy.get(CheckoutElements.firstNameInput).type(FIRST_NAME);
    cy.get(CheckoutElements.lastNameInput).type(LAST_NAME);
    cy.get(CheckoutElements.postalCodeInput).type(POSTAL_CODE);
  }
  // #endregion

  // #region Ações
  /**
   * Avança para a próxima etapa do checkout.
   */
  clickContinue() {
    cy.get(CheckoutElements.continueButton).click();
  }

  /**
   * Conclui a compra.
   */
  clickFinish() {
    cy.get(CheckoutElements.finishButton).click();
  }
  // #endregion

  // #region Verificações
  /**
   * Verifica se a visão geral da compra está visível.
   */
  verifyPurchaseOverview() {
    cy.get(CheckoutElements.overviewSection).should('be.visible');
    cy.contains('Overview').should('be.visible');
  }

  /**
   * Verifica se a mensagem de sucesso da compra está visível e contém o texto esperado.
   */
  verifySuccessMessage() {
    cy.get(CheckoutElements.successMessage)
      .should('be.visible')
      .and('contain.text', 'THANK YOU FOR YOUR ORDER');
  }
  // #endregion
}

export default new CheckoutPage();