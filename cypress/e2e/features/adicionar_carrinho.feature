Feature: Adição produtos no carrinho

  Background:
    Given o usuário está logado na aplicação
    When navega para a página de inventário

  Scenario: Adicionar um produto ao carrinho
    When adiciona um produto ao carrinho
    And vai para a página de carrinho
    Then o produto deve estar no carrinho

  Scenario: Adicionar dois produtos ao carrinho
    When adiciona dois produtos ao carrinho
    And vai para a página de carrinho
    Then os produtos devem estar no carrinho
