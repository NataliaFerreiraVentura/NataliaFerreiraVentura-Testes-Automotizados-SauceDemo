Feature: Adição produtos no carrinho

  Scenario: Adicionar um produto ao carrinho
    Given o usuário está logado na aplicação
    When navega para a página de inventário
    And adiciona um produto ao carrinho
    Then o produto deve estar no carrinho

  Scenario: Adicionar dois produtos ao carrinho
    Given o usuário está logado na aplicação
    When navega para a página de inventário
    And adiciona dois produtos ao carrinho
    Then os produtos devem estar no carrinho
