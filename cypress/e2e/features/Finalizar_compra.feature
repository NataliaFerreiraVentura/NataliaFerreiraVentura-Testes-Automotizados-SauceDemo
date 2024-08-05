Feature: Finalizar compra

  Background:
    Given o usuário está logado na aplicação

  Scenario: Finalizar a compra com um produto
    When o usuário adiciona um produto ao carrinho
    And o usuário navega para o carrinho
    And o usuário prossegue para o checkout
    And o usuário preenche as informações de pagamento
    And o usuário clica no botão "Continuar"
    Then as informações da compra devem ser exibidas corretamente
    And a compra deve ser finalizada com sucesso
    And uma mensagem de sucesso deve ser exibida
  
  Scenario: Finalizar a compra com dois produtos
    When o usuário adiciona o Produto A ao carrinho
    And o usuário adiciona o Produto B ao carrinho
    And o usuário navega para o carrinho
    And o usuário prossegue para o checkout
    And o usuário preenche as informações de pagamento
    And o usuário clica no botão "Continuar"
    Then as informações da compra devem ser exibidas corretamente
    And a compra deve ser finalizada com sucesso
    And uma mensagem de sucesso deve ser exibida