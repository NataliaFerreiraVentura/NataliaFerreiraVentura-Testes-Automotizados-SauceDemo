Feature: Visualização de Produtos

  Background:
    Given o usuário está logado na aplicação 
    And navega para a página de inventário

  Scenario: Usuário vê a lista de produtos
    Then o usuário deve ver a lista de produtos

  Scenario: Usuário filtra produtos por preço do menor para o maior
    When  aplica o filtro "Price (low to high)"
    Then os produtos devem ser exibidos em ordem de preço crescente

  Scenario: Usuário aplica o filtro "Name (Z to A)" e verifica a ordem dos produtos
    When seleciona a opção "Name (Z to A)" no filtro de ordenação
    Then os produtos devem ser exibidos em ordem alfabética decrescente
