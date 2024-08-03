Feature: Login

  Scenario: Usuário faz login com sucesso
    Given o usuário está na página de login
    When o usuário insere o nome de usuário e a senha
    And o usuário clica no botão "LOGIN"
    Then o usuário deve ser redirecionado para a página inicial

  Scenario: Usuário tenta fazer login com credenciais inválidas
    Given o usuário está na página de login
    When o usuário insere credenciais inválidas
    And o usuário clica no botão "LOGIN"
    Then o usuário deve ver uma mensagem de erro "Epic sadface: Username and password do not match any user in this service"