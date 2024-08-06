Feature: Adição de Produtos no Carrinho

  Background:
    Given que estou logado na aplicação e na página de inventário

  Scenario: Adicionar um produto ao carrinho
    When adiciono um produto ao carrinho
    And vou para a página de carrinho
    Then o produto deve estar no carrinho

  Scenario: Adicionar dois produtos ao carrinho
    When adiciono o Produto A ao carrinho
    And adiciono o Produto B ao carrinho
    And vou para a página de carrinho
    Then os produtos A e B devem estar no carrinho
  