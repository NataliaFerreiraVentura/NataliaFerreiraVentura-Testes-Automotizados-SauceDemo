import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

const produto1 = "Sauce Labs Backpack";
const produto2 = "Sauce Labs Bike Light";
const firstName = "John";
const lastName = "Doe";
const postalCode = "12345";

Given("o usuário está logado na aplicação", () => {
  cy.visit('https://www.saucedemo.com/v1/');
  cy.get('#user-name').type('standard_user');
  cy.get('#password').type('secret_sauce');
  cy.get('#login-button').click();
  // Verifica se o login foi bem-sucedido
  cy.url().should('include', '/inventory.html');
});

When("adiciona produtos ao carrinho", () => {
  // Adiciona o primeiro produto
  cy.contains(produto1)
    .parents('.inventory_item')
    .find('button')
    .should('have.text', 'ADD TO CART')
    .click();
});

When("vai para o carrinho", () => {
  cy.get("a.shopping_cart_link.fa-layers.fa-fw").click();
});

When("prossegue para o checkout", () => {
    cy.get('.btn_action').click(); // Verifique o seletor do botão de checkout
});

When("preenche as informações de pagamento", () => {
  cy.get('input#first-name').type(firstName);
  cy.get('input#last-name').type(lastName);
  cy.get('input#postal-code').type(postalCode);

});

When("clica no botão em continuar", () => {
    cy.get('.btn_primary').contains('CONTINUE').click(); 
});

Then("as informações da compra devem ser exibidas", () => {
  cy.contains('Overview').should('be.visible');
});

When("finaliza a compra", () => {
    cy.get('.btn_action').contains('FINISH').click(); // Verifique o seletor do botão de finalizar compra
});

Then("a mensagem de sucesso deve ser exibida", () => {
  cy.contains('THANK YOU FOR YOUR ORDER').should('be.visible'); // Verifica se a mensagem de sucesso é exibida
});
