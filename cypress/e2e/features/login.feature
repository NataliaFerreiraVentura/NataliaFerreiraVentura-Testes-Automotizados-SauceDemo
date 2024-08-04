Feature: Login

  Background: 
    Given que o usuário navega para a página de login

  Scenario: Login com sucesso
    When o nome de usuário e a senha válidos são inseridos
    And clica no botão "LOGIN"
    Then deve ser redirecionado para a página inicial

  Scenario: Login com dados inválidos
    When credenciais inválidas são inseridas
    And clica no botão "LOGIN"
    Then uma mensagem de erro "Epic sadface: Username and password do not match any user in this service" deve ser exibida
