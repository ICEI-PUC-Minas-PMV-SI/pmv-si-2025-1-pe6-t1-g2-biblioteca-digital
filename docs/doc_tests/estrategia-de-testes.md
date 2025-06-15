# Estratégia de Testes - Biblioteca Digital

## 1. Técnicas de Teste Utilizadas

### 1.1 Teste de Partição de Equivalência

- **Descrição**: Dividir o domínio de entrada em classes de equivalência válidas e inválidas
- **Justificativa**: Permite reduzir o número de casos de teste mantendo a cobertura, identificando comportamentos similares
  - **Exemplo**: No cadastro de usuário, dividimos em classes válidas (email correto) e inválidas (email incorreto)

### 1.2 Análise de Valor Limite

- **Descrição**: Testar os valores nos limites das partições de equivalência
- **Justificativa**: Erros frequentemente ocorrem nos limites das condições
  - **Exemplo**: Testar senha com 7 caracteres (limite inferior) e 21 caracteres (limite superior)

### 1.3 Tabela de Decisão

- **Descrição**: Testar combinações de condições e ações
- **Justificativa**: Garante cobertura de todas as combinações possíveis de condições
  - **Exemplo**: Testar diferentes combinações de status de empréstimo e reserva

### 1.4 Teste de Transição de Estado

- **Descrição**: Testar mudanças de estado do sistema
- **Justificativa**: Garante que as transições entre estados ocorrem corretamente
  - **Exemplo**: Testar transições de status de um livro (disponível → emprestado → disponível)

## 2. Níveis de Teste

### 2.1 Testes Unitários

- **Objetivo**: Testar componentes individuais do sistema
- **Escopo**: Funções, métodos e classes isoladas
  - **Exemplos**:
    - Validação de formato de email
    - Cálculo de multa por atraso
    - Formatação de datas

### 2.2 Testes de Integração

- **Objetivo**: Testar a interação entre componentes
- **Escopo**: Módulos e subsistemas
  - **Exemplos**:
    - Integração entre autenticação e controle de acesso
    - Integração entre reserva e notificação
    - Integração com banco de dados

### 2.3 Testes de Sistema

- **Objetivo**: Testar o sistema como um todo
- **Escopo**: Funcionalidades completas
  - **Exemplos**:
    - Fluxo completo de empréstimo
    - Processo de reserva
    - Geração de relatórios

## 3. Ferramentas de Teste

### 3.1 Testes Unitários e de Integração

#### Backend (Python)

- **Pytest**
  - Framework de testes unitários
  - Suporte a fixtures e parametrização
  - Geração de relatórios de cobertura
- **Pytest-cov**
  - Plugin para análise de cobertura de código
- **Pytest-mock**
  - Plugin para simulação de objetos

#### Frontend Web (React)

- **Jest**
  - Framework de testes JavaScript
  - Suporte a snapshots
  - Mocking de módulos
- **React Testing Library**
  - Testes de componentes React
  - Foco em comportamento do usuário

#### Mobile (Android/iOS)

- **Appium**
  - Testes automatizados para Android
  - Suporte a gestos e interações
- **XCUITest** (iOS)
  - Framework nativo para testes iOS
  - Integração com Xcode

### 3.2 Testes de API

- **Postman**
  - Testes de endpoints REST
  - Automação de testes
  - Coleções de testes

### 3.3 Testes de Web

#### Web

- **Cypress**
  - Testes end-to-end (fluxo completo ponta a ponta da aplicação)

### 3.4 Testes de Performance

#### Web e API

- **JMeter**
  - Testes de carga e stress
  - Simulação de múltiplos usuários
  - Análise de tempo de resposta
  - Testes de concorrência

- **K6**
  - Testes de performance modernos
  - Scripts em JavaScript

## 4. Estratégia de Execução

### 4.1 Ambiente de Desenvolvimento

- Execução de testes unitários e de integração
- Análise de cobertura de código

### 4.2 Ambiente de Homologação

- Testes de sistema
- Testes de performance
- Testes de segurança

## 5. Relatórios

### 5.1 Relatórios

- Relatório de execução de testes
- Relatório de bugs

## 6. Processo de Teste

1. **Planejamento**
   - Definição de escopo
   - Seleção de técnicas

2. **Preparação**
   - Configuração de ambiente
   - Criação de dados de teste
   - Preparação de scripts

3. **Execução**
   - Execução de testes
   - Registro de resultados
   - Análise de falhas

4. **Análise**
   - Avaliação de resultados
   - Identificação de tendências
   - Propostas de melhorias