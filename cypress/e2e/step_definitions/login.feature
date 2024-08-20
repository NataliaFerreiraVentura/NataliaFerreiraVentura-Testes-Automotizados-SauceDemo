Feature: Login

  Background:
  Given que esteja na  página de login
  Scenario: Login com sucesso
    When o usuario  preenche o formulario de  "login"
    And clica no botão Login
    Then será redirecionado para a página inicial

  Scenario: Login com dados inválidos
    When o usuario  preenche o formulario de "login" com usuario e senha inválidos
    And clica no botão Login
    Then uma mensagem de erro "Epic sadface: Username and password do not match any user in this service" será exibida