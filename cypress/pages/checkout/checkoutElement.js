// Seletores da Página de Checkout
const CheckoutElements = {
  // #region Botões de Ação
  /**
   * Botão para acessar a página de checkout.
   */
  checkoutButton: '.btn_action',

  /**
   * Botão para continuar para a próxima etapa do checkout.
   */
  continueButton: '.btn_primary',

  /**
   * Botão para finalizar a compra.
   */
  finishButton: '.btn_action',
  // #endregion

  // #region Campos de Entrada
  /**
   * Campo para inserir o primeiro nome.
   */
  firstNameInput: 'input#first-name',

  /**
   * Campo para inserir o sobrenome.
   */
  lastNameInput: 'input#last-name',

  /**
   * Campo para inserir o código postal.
   */
  postalCodeInput: 'input#postal-code',
  // #endregion

  // #region Seções e Mensagens
  /**
   * Seção que exibe a visão geral da compra.
   */
  overviewSection: '.summary_info',

  /**
   * Mensagem de sucesso exibida após a conclusão da compra.
   */
  successMessage: '.complete-header',
  // #endregion
};

export default CheckoutElements;