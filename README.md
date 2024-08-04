# Configuração e Execução de Testes

## Objetivo

O objetivo deste conjunto de testes automatizados é validar a funcionalidade e a integridade dos principais fluxos de usuário em nosso sistema de e-commerce. Os testes cobrem os seguintes casos de uso:

1. **Login:**
   - **Usuário Válido:** Verificar se um usuário consegue fazer login com credenciais válidas.
   - **Usuário Inválido:** Verificar se um usuário é impedido de fazer login com credenciais inválidas.

2. **Visualização de Produtos:**
   - Testar a capacidade do sistema de exibir a lista de produtos após um login bem-sucedido.

3. **Adicionar ao Carrinho:**
   - Testar a funcionalidade de adicionar um ou mais produtos ao carrinho de compras.

4. **Remover do Carrinho:**
   - Testar a capacidade de remover um ou mais produtos do carrinho de compras.

5. **Finalizar Compra:**
   - Testar o fluxo completo de finalização de compra, garantindo que o processo de checkout seja concluído com sucesso.
     
## 1. Pré-Requisitos

Antes de começar, certifique-se de que você possui os seguintes itens instalados:

- **IDE de Desenvolvimento:**  
  [Visual Studio Code](https://code.visualstudio.com/)

- **Node.js:**  
  Versão 14.x ou superior. [Baixe o Node.js aqui](https://nodejs.org/)

- **npm (Node Package Manager):**  
  Geralmente é instalado junto com o Node.js.

## 2. Download dos Arquivos do Projeto

Baixe os arquivos do projeto e extraia-os em um diretório de sua escolha.

## 3. Configuração do Cypress e Cucumber

Siga os passos abaixo para configurar o Cypress e o Cucumber:

3.1 **Acesse o diretório do projeto:**

```
cd /caminho/para/seu/projeto

```

3.2 **Instale as dependências do projeto:**

```
npm install

```

3.3 **Instale o Cypress como uma dependência de desenvolvimento:**

```
npm install cypress --save-dev

```

3.4 **Instale o pré-processador Cucumber para o Cypress:**

```
npm install cypress-cucumber-preprocessor --save-dev

```

## 4. Execução dos Testes
   
Para executar os testes, utilize um dos seguintes comandos, conforme a necessidade:

* Modo Interativo (Interface Gráfica):
Executa o Cypress com a interface gráfica, ideal para desenvolvimento e depuração.

```
npx cypress open

```

* Modo Headless (Sem Interface Gráfica):
Executa o Cypress em modo headless, ideal para integrações contínuas e execução automática de testes.

```
npx cypress run

```

## 5. Tecnologias Utilizadas

- **Cypress:** [Documentação](https://www.cypress.io/docs/)
- **Cucumber:** [Documentação](https://cucumber.io/docs/guides/)
- **cypress-cucumber-preprocessor:** [Documentação](https://github.com/badeball/cypress-cucumber-preprocessor)
- **Node.js:** [Documentação](https://nodejs.org/en/docs/)
- **npm:** [Documentação](https://docs.npmjs.com/)
