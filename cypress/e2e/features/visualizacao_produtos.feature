Feature: Visualização de Produtos

  Scenario: Usuário vê a lista de produtos
    Given o usuário está logado na aplicação
    When o usuário navega para a página de inventário
    Then o usuário deve ver a lista de produtos

  Scenario: Usuário verifica a presença do produto Sauce Labs Backpack
    Given o usuário está logado na aplicação
    When o usuário navega para a página de inventário
    Then o usuário deve ver o produto "Sauce Labs Backpack"
    And o usuário deve ver a descrição do produto

  Scenario: Usuário filtra produtos por preço do menor para o maior
    Given o usuário está logado na aplicação
    When o usuário navega para a página de inventário
    And o usuário aplica o filtro "Price (low to high)"
    Then os produtos devem ser exibidos em ordem de preço crescente

   Scenario: Usuário aplica o filtro "Name (Z to A)" e verifica a ordem dos produtos
    Given o usuário está logado na aplicação
    When o usuário navega para a página de inventário
    And o usuário seleciona a opção "Name (Z to A)" no filtro de ordenação
    Then os produtos devem ser exibidos em ordem alfabética decrescente 