Feature: Login

  Scenario: Usuário faz login com sucesso
    Given o usuário está na página de login
    When o usuário insere o nome de usuário e a senha
    And o usuário clica no botão "LOGIN"
    Then o usuário deve ser redirecionado para a página inicial
