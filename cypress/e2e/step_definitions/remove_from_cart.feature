Feature: Remover produto do Carrinho

  Background:
    Given que estou logado na aplicação

  Scenario: Remover um produto do carrinho
    When adiciono um produto específico ao carrinho
    And navego para o carrinho
    And removo o produto  do carrinho
    Then o produto removido não deve estar mais no carrinho

  Scenario: Remover um produto e verificar se o outro permanece no carrinho
    When adiciono dois produtos específicos ao carrinho
    And navego para o carrinho
    When removo um produto específico do carrinho
    Then o outro produto deve permanecer no carrinho
