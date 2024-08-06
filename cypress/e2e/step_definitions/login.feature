Feature: Login
  Background:
  Given que eu navego para a página de login
  Scenario: Login com sucesso
    When insiro um usuário e uma senha válidos 
    Then o formulário de login é submetido
    Then devo ser redirecionado para a página inicial

  Scenario: Login com dados inválidos
    When insiro credenciais inválidas 
    Then o formulário de login é submetido
    Then uma mensagem de erro "Epic sadface: Username and password do not match any user in this service" deve ser exibida