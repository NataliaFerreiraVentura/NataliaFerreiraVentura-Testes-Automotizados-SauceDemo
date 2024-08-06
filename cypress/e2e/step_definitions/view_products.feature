Feature: Visualização de Produtos

  Background:
    Given que estou logado na aplicação

  Scenario: Ver lista de produtos
    Then eu devo ver a lista de produtos

  Scenario: Filtrar produtos por preço do menor para o maior
    When aplico o filtro "Price (low to high)"
    Then os produtos devem ser exibidos em ordem de preço crescente

  Scenario: Aplicar o filtro "Name (Z to A)" e verificar a ordem dos produtos
    When aplico o filtro "Name (Z to A)"
    Then os produtos devem ser exibidos em ordem alfabética "desc"

  Scenario: Verificar a quantidade de produtos na lista
    Then a lista de produtos deve conter 6 itens

  Scenario: Ordenar produtos por nome do A ao Z
    When aplico o filtro "Name (A to Z)"
    Then os produtos devem ser exibidos em ordem alfabética "asc"

  Scenario: Verificar se um filtro específico é aplicado corretamente
    When aplico o filtro "Price (low to high)"
    Then os produtos devem ser exibidos em ordem de preço crescente