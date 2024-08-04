Feature: Finalizar Compra

  Scenario: Finalizar a compra com sucesso
    Given o usuário está logado na aplicação
    When adiciona produtos ao carrinho
    And navega para o carrinho
    And prossegue para o checkout
    And preenche as informações de pagamento
    And clica no botão em continuar
    Then as informações da compra devem ser exibidas
    And finaliza a compra
    And a mensagem de sucesso deve ser exibida
