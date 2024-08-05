Feature: Remover produto do Carrinho

  Background:
    Given o usuário está logado na aplicação

  Scenario: Remover um produto do carrinho
    When adiciona um produto específico ao carrinho
    And navega para o carrinho
    And remove o produto específico do carrinho
    Then o produto removido não deve estar mais no carrinho

 Scenario: Remover um produto e verificar se o outro permanece no carrinho
    Given adiciona dois produtos específicos ao carrinho
    And navega para o carrinho
    When remove o produto específico do carrinho
    Then o outro produto deve permanecer no carrinho