Feature: Remover produto do Carrinho

  Scenario: Remover um produto do carrinho
    Given o usuário está logado na aplicação
    When adiciona um produto específico ao carrinho
    And navega para o carrinho
    And remove o produto específico do carrinho
    Then o produto removido não deve estar mais no carrinho

