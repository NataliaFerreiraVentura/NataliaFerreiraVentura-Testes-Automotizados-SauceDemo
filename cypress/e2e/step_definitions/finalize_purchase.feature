Feature: Finalizar compra

  Background:
    Given que estou logado na aplicação

  Scenario: Finalizar a compra com um produto
    When adiciono um produto ao carrinho
    And navego para o carrinho
    And prossigo para o checkout
    And preencho as informações de pagamento
    And clico no botão Continuar
    Then as informações da compra devem ser exibidas corretamente
    And a compra deve ser finalizada com sucesso
    And uma mensagem de sucesso deve ser exibida
  
  Scenario: Finalizar a compra com dois produtos
    When adiciono o Produto A ao carrinho
    And adiciono o Produto B ao carrinho
    And navego para o carrinho
    And prossigo para o checkout
    And preencho as informações de pagamento
    And clico no botão Continuar
    Then as informações da compra devem ser exibidas corretamente
    And a compra deve ser finalizada com sucesso
    And uma mensagem de sucesso deve ser exibida
