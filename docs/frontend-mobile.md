# Front-end Móvel

Este projeto tem como objetivo o desenvolvimento da interface móvel de uma aplicação utilizando o framework React em conjunto com a plataforma Expo Dev, que facilita a criação, o teste e a publicação de apps para dispositivos Android e iOS. A aplicação busca proporcionar uma experiência de usuário fluida, moderna e responsiva, integrando-se facilmente com APIs e serviços backend.

## Projeto da Interface
A interface móvel da aplicação foi desenvolvida visando garantir uma experiência de usuário moderna, responsiva e intuitiva. O design visual segue uma abordagem limpa e funcional, com foco na usabilidade e acessibilidade para diferentes perfis de usuários, como alunos, professores, bibliotecários e gestores. As páginas do aplicativo foram organizadas de forma lógica e fluida, com telas específicas para login, buscar livros, meus empréstimos, reservar um livro e histórico de empréstimos. Foram utilizadas bibliotecas de componentes visuais que seguem os padrões do Material Design, garantindo familiaridade e consistência na navegação. As interações foram pensadas para serem simples e eficientes, reduzindo a curva de aprendizado e otimizando a realização de tarefas. O uso da Expo Dev permitiu acelerar o processo de desenvolvimento, facilitando testes em dispositivos reais e garantindo compatibilidade com o sistema operacional Android, além de possibilitar futura expansão para iOS, caso necessário.

### Wireframes
<img src="https://github.com/user-attachments/assets/efa0f38c-6b8d-4e79-9e62-3b345cc1b362" width="350" height="600">
<img src="https://github.com/user-attachments/assets/0e7946c8-d5ee-40f2-b103-011bc992f610" width="350" height="600">
<img src="https://github.com/user-attachments/assets/5a517dba-c132-4405-9a63-0fd537134b1f" width="350" height="600">
<img src="https://github.com/user-attachments/assets/8a6c0503-35c1-43bd-8ebc-ef40541b2058" width="350" height="600">
<img src="https://github.com/user-attachments/assets/9cb68f45-f8f5-4e17-83cf-f46b9a5a5f52" width="350" height="600">
<img src="https://github.com/user-attachments/assets/0c45135d-8f90-45dd-93e4-236ba450f7dc" width="350" height="600">

### Design Visual

A aplicação móvel foi desenvolvida com foco em um design limpo, moderno e funcional, buscando oferecer uma experiência de uso intuitiva e agradável.

A paleta de cores utiliza predominantemente o roxo escuro, aplicado na barra de navegação superior e nos botões principais, conferindo um aspecto elegante e profissional. O fundo em azul claro proporciona um contraste suave com os demais elementos, contribuindo para o conforto visual. O botão "SAIR" utiliza a cor vermelha, destacando essa ação importante. Já o branco é utilizado em cartões e campos de entrada, garantindo legibilidade e organização clara das informações.

A tipografia é sem serifa, com ótima legibilidade em dispositivos móveis. Os textos apresentam variações de peso, com títulos e seções em negrito, facilitando a identificação das informações mais relevantes.

Ícones simples e intuitivos acompanham cada funcionalidade, como buscar livros, visualizar empréstimos, fazer reservas e acessar o histórico. Esses ícones seguem o estilo flat e monocromático, contribuindo para um visual uniforme e de fácil compreensão.

Os elementos gráficos incluem cartões com cantos arredondados e sombreamento sutil, que apresentam as informações de forma organizada e agradável. Os botões são grandes, com espaçamento adequado, facilitando a navegação por meio de toques, especialmente em dispositivos móveis.

O layout adota uma estrutura vertical clara e objetiva, permitindo que o usuário acesse todas as funcionalidades com poucos toques. A barra superior fixa contribui para a navegação consistente entre as diferentes telas da aplicação.

Em conjunto, esses elementos visuais garantem uma interface coesa, acessível e visualmente atraente, priorizando a usabilidade e a experiência do usuário final.

## Fluxo de Dados

A aplicação segue um fluxo de dados baseado em requisições HTTP à API REST hospedada em uma instância EC2. O fluxo básico envolve:

1. **Login do Usuário**: O usuário insere suas credenciais, que são enviadas via POST para o endpoint `/api/token/`, retornando um token JWT.
2. **Autenticação e Armazenamento**: O token é armazenado localmente e incluído nos headers das requisições subsequentes.
3. **Busca de Livros**: A tela de busca envia requisições GET para o endpoint `/api/v1/livros/` e exibe os resultados de forma dinâmica.
4. **Reservas e Empréstimos**: A reserva de um exemplar é feita por meio de POST para `/api/v1/reservas/`, e os empréstimos são consultados via GET em `/api/v1/emprestimos/usuario/`.

O gerenciamento de estado e autenticação é realizado via Context API do React.

## Tecnologias Utilizadas

⚛️ *Framework React*  
Framework principal utilizado para o desenvolvimento da interface móvel, baseado em React. Permite a criação de apps nativos para Android e iOS com uma única base de código.

📱 *Plataforma Expo Dev*  
Plataforma que facilita o desenvolvimento, execução e build de apps React Native. Usada para testes rápidos em dispositivos físicos, sem necessidade de configuração nativa (Xcode/Android Studio).

## Considerações de Segurança

- **Autenticação baseada em JWT**: As requisições à API utilizam token JWT no header `Authorization`, garantindo que apenas usuários autenticados tenham acesso.
- **Armazenamento seguro**: Tokens são armazenados localmente de forma segura, evitando exposição em logs ou cache de terceiros.
- **Proteção contra ações não autorizadas**: A API valida o escopo do usuário autenticado, impedindo ações como reserva ou acesso ao histórico de outros usuários.
- **Validações no frontend**: Foram implementadas validações nos formulários de entrada para evitar inputs maliciosos (ex: SQL injection ou XSS).

## Testes

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

# Casos de Teste - Sistema de Gestão de Biblioteca Digital

Este documento apresenta os casos de teste desenvolvidos para validar os requisitos funcionais do sistema de gestão de biblioteca digital, utilizando técnicas de teste de caixa preta.

## Técnicas de Teste Utilizadas

- **Particionamento por Equivalência**: Divisão dos dados de entrada em classes equivalentes
- **Análise de Valor Limite**: Teste dos valores nos limites de regras numéricas
- **Teste de Tabela de Decisão**: Mapeamento de combinações de condições e ações
- **Teste de Transição de Estado**: Validação de mudanças de estado do sistema

---

## RF-001: Permitir que os usuários realizem cadastro e login

### CT-001: Cadastro de usuário com dados válidos

- **Requisito**: RF-001
- **Aplicação**: Web
- **Técnica**: Particionamento por Equivalência (classe válida)
- **Pré-condições**: Sistema disponível, usuário não cadastrado
- **Dados de entrada**:
  - Nome: "Ana Silva"
  - Email: "ana.silva@email.com"
  - Senha: "MinhaSenh@123"
  - Confirmação de senha: "MinhaSenh@123"
- **Passos**:
  1. Acessar página de cadastro
  2. Preencher todos os campos obrigatórios
  3. Clicar em "Cadastrar"
- **Resultado esperado**: Usuário cadastrado com sucesso, redirecionamento para login

### CT-002: Cadastro com email já existente

- **Requisito**: RF-001
- **Aplicação**: API
- **Técnica**: Particionamento por Equivalência (classe inválida)
- **Pré-condições**: Email "ana.silva@email.com" já cadastrado
- **Dados de entrada**: 
  - Nome: "João Santos"
  - Email: "ana.silva@email.com"
  - Senha: "OutraSenh@456"
- **Passos**:
  1. Acessar página de cadastro
  2. Preencher campos com email já existente
  3. Clicar em "Cadastrar"
- **Resultado esperado**: Erro informando que email já está em uso

### CT-003: Cadastro com senha no limite mínimo (Análise de Valor Limite)

- **Requisito**: RF-001
- **Aplicação**: API
- **Técnica**: Análise de Valor Limite 
- **Pré-condições**: Sistema disponível, regra de senha mínima de 8 caracteres
- **Dados de entrada**: 
  - Teste 1 - Nome: "Maria Costa", Email: "maria1@email.com", Senha: "1234567" (7 chars - inválida)
  - Teste 2 - Nome: "João Silva", Email: "joao2@email.com", Senha: "12345678" (8 chars - válida)  
  - Teste 3 - Nome: "Ana Santos", Email: "ana3@email.com", Senha: "123456789" (9 chars - válida)
- **Passos**:
  1. Testar senha com 7, 8 e 9 caracteres
- **Resultado esperado**: Aceitar senhas ≥8 chars, rejeitar <8 chars

### CT-004: Login com credenciais válidas

- **Requisito**: RF-001
- **Aplicação**: Mobile
- **Técnica**: Particionamento por Equivalência (classe válida)
- **Pré-condições**: Usuário cadastrado no sistema
- **Dados de entrada**: 
  - Email: "ana.silva@email.com"
  - Senha: "MinhaSenh@123"
- **Passos**:
  1. Acessar página de login
  2. Inserir credenciais válidas
  3. Clicar em "Entrar"
- **Resultado esperado**: Login realizado, redirecionamento para dashboard

### CT-005: Login com credenciais inválidas

- **Requisito**: RF-001
- **Aplicação**: Mobile
- **Técnica**: Particionamento por Equivalência (classe inválida)
- **Pré-condições**: Sistema disponível
- **Dados de entrada**: 
  - Email: "usuario.inexistente@email.com"
  - Senha: "SenhaErrada123"
- **Passos**:
  1. Acessar página de login
  2. Inserir credenciais inválidas
  3. Clicar em "Entrar"
- **Resultado esperado**: Erro de credenciais inválidas

---

## RF-002: Permitir que administradores cadastrem, editem e removam livros

### CT-006: Cadastro de livro com dados completos

- **Requisito**: RF-002
- **Aplicação**: Web
- **Técnica**: Particionamento por Equivalência (classe válida)
- **Pré-condições**: Usuário logado como administrador
- **Dados de entrada**: 
  - Título: "Dom Casmurro"
  - Autor: "Machado de Assis"
  - ISBN: "9788525406958"
  - Gênero: "Literatura Brasileira"
  - Ano: 1899
  - Quantidade: 5
- **Passos**:
  1. Acessar painel administrativo
  2. Clicar em "Adicionar Livro"
  3. Preencher todos os campos
  4. Clicar em "Salvar"
- **Resultado esperado**: Livro cadastrado e disponível no acervo

### CT-007: Cadastro de livro com ISBN duplicado

- **Requisito**: RF-002
- **Aplicação**: API
- **Técnica**: Particionamento por Equivalência (classe inválida)
- **Pré-condições**: ISBN "9788525406958" já cadastrado
- **Dados de entrada**: 
  - Título: "Outro Livro"
  - Autor: "Outro Autor"
  - ISBN: "9788525406958"
- **Passos**:
  1. Tentar cadastrar livro com ISBN existente
- **Resultado esperado**: Erro informando ISBN duplicado

### CT-008: Edição de dados do livro

- **Requisito**: RF-002
- **Aplicação**: Web
- **Técnica**: Particionamento por Equivalência
- **Pré-condições**: Livro "Dom Casmurro" cadastrado
- **Dados de entrada**: 
  - Nova quantidade: 3
- **Passos**:
  1. Localizar livro na lista
  2. Clicar em "Editar"
  3. Alterar quantidade de 5 para 3
  4. Salvar alterações
- **Resultado esperado**: Dados atualizados no sistema

### CT-009: Remoção de livro sem empréstimos ativos

- **Requisito**: RF-002
- **Aplicação**: Web
- **Técnica**: Particionamento por Equivalência (classe válida)
- **Pré-condições**: Livro sem empréstimos ativos
- **Passos**:
  1. Selecionar livro para remoção
  2. Confirmar exclusão
- **Resultado esperado**: Livro removido do acervo

### CT-010: Tentativa de remoção de livro com empréstimos ativos

- **Requisito**: RF-002
- **Aplicação**: API
- **Técnica**: Particionamento por Equivalência (classe inválida)
- **Pré-condições**: Livro com empréstimos ativos
- **Passos**:
  1. Tentar remover livro emprestado
- **Resultado esperado**: Erro impedindo a remoção

---

## RF-003: Permitir pesquisa e consulta de livros disponíveis

### CT-011: Busca por título exato

- **Requisito**: RF-003
- **Aplicação**: Mobile
- **Técnica**: Particionamento por Equivalência (classe válida)
- **Pré-condições**: Livro "Dom Casmurro" cadastrado
- **Dados de entrada**: 
  - Termo de busca: "Dom Casmurro"
- **Passos**:
  1. Inserir título na caixa de busca
  2. Executar pesquisa
- **Resultado esperado**: Livro encontrado e exibido

### CT-012: Busca por título parcial

- **Requisito**: RF-003
- **Aplicação**: Mobile
- **Técnica**: Particionamento por Equivalência (classe válida)
- **Pré-condições**: Livro "Dom Casmurro" cadastrado
- **Dados de entrada**: 
  - Termo de busca: "Dom"
- **Passos**:
  1. Inserir termo parcial na busca
  2. Executar pesquisa
- **Resultado esperado**: Livros com "Dom" no título exibidos

### CT-013: Busca por autor

- **Requisito**: RF-003
- **Aplicação**: API
- **Técnica**: Particionamento por Equivalência (classe válida)
- **Pré-condições**: Livros de "Machado de Assis" cadastrados
- **Dados de entrada**: 
  - Termo de busca: "Machado de Assis"
- **Passos**:
  1. Buscar por nome do autor
- **Resultado esperado**: Todos os livros do autor listados

### CT-014: Busca sem resultados

- **Requisito**: RF-003
- **Aplicação**: API
- **Técnica**: Particionamento por Equivalência (classe inválida)
- **Pré-condições**: Sistema com acervo cadastrado
- **Dados de entrada**: 
  - Termo de busca: "LivroInexistente123"
- **Passos**:
  1. Buscar por termo inexistente
- **Resultado esperado**: Mensagem informando ausência de resultados

### CT-015: Consulta de disponibilidade

- **Requisito**: RF-003
- **Aplicação**: Mobile
- **Técnica**: Particionamento por Equivalência
- **Pré-condições**: Livro com 2 exemplares, 1 emprestado
- **Passos**:
  1. Visualizar detalhes do livro
- **Resultado esperado**: Status "1 disponível de 2 exemplares"

---

## RF-004: Permitir reserva e renovação de livros online

### CT-016: Reserva de livro disponível

- **Requisito**: RF-004
- **Aplicação**: Mobile
- **Técnica**: Particionamento por Equivalência (classe válida)
- **Pré-condições**: Usuário logado, livro disponível
- **Dados de entrada**: 
  - Livro: "Dom Casmurro"
- **Passos**:
  1. Localizar livro disponível
  2. Clicar em "Reservar"
  3. Confirmar reserva
- **Resultado esperado**: Reserva realizada com sucesso

### CT-017: Tentativa de reserva de livro indisponível

- **Requisito**: RF-004
- **Aplicação**: Mobile
- **Técnica**: Particionamento por Equivalência (classe inválida)
- **Pré-condições**: Todos os exemplares emprestados
- **Passos**:
  1. Tentar reservar livro indisponível
- **Resultado esperado**: Opção de entrar na lista de espera

### CT-018: Renovação no limite do prazo (Análise de Valor Limite)

- **Requisito**: RF-004
- **Aplicação**: API
- **Técnica**: Análise de Valor Limite
- **Pré-condições**: Prazo de empréstimo de 15 dias
- **Dados de entrada**:
  - Teste 1: Renovação no dia 14 (1 dia antes do vencimento)
  - Teste 2: Renovação no dia 15 (no dia do vencimento)
  - Teste 3: Renovação no dia 16 (1 dia após vencimento)
- **Passos**:
  1. Testar renovação nos limites do prazo
- **Resultado esperado**: Aceitar renovação até dia 15, rejeitar após dia 16

### CT-019: Limite de renovações (Análise de Valor Limite)

- **Requisito**: RF-004
- **Aplicação**: API
- **Técnica**: Análise de Valor Limite
- **Pré-condições**: Limite máximo de 2 renovações por empréstimo
- **Dados de entrada**:
  - Teste 1: Primeira renovação (1 de 2)
  - Teste 2: Segunda renovação (2 de 2) 
  - Teste 3: Terceira renovação (3 de 2 - inválida)
- **Passos**:
  1. Testar renovações no limite máximo
- **Resultado esperado**: Aceitar até 2 renovações, rejeitar a terceira

### CT-020: Reserva com usuário no limite de empréstimos (Análise de Valor Limite)

- **Requisito**: RF-004
- **Aplicação**: API
- **Técnica**: Análise de Valor Limite
- **Pré-condições**: Limite de 3 livros simultâneos por usuário
- **Dados de entrada**:
  - Teste 1: Usuário com 2 livros tenta reservar o 3º
  - Teste 2: Usuário com 3 livros tenta reservar o 4º
- **Passos**:
  1. Testar reserva no limite de empréstimos
- **Resultado esperado**: Aceitar até 3 livros, rejeitar o 4º

---

## RF-005: Permitir que usuários filtrem os livros por autor, gênero e disponibilidade

### CT-021: Filtro por gênero único

- **Requisito**: RF-005
- **Aplicação**: Mobile
- **Técnica**: Particionamento por Equivalência
- **Pré-condições**: Livros de diferentes gêneros cadastrados
- **Dados de entrada**: 
  - Filtro: "Literatura Brasileira"
- **Passos**:
  1. Selecionar filtro de gênero
  2. Escolher "Literatura Brasileira"
  3. Aplicar filtro
- **Resultado esperado**: Apenas livros deste gênero exibidos

### CT-022: Filtro por múltiplos critérios

- **Requisito**: RF-005
- **Aplicação**: API
- **Técnica**: Teste de Tabela de Decisão
- **Pré-condições**: Acervo diversificado disponível
- **Dados de entrada**: 
  - Autor: "Machado de Assis"
  - Gênero: "Literatura Brasileira"
  - Disponibilidade: "Disponível"
- **Passos**:
  1. Aplicar múltiplos filtros simultaneamente
- **Resultado esperado**: Livros que atendem todos os critérios

### CT-023: Filtro por disponibilidade - apenas disponíveis

- **Requisito**: RF-005
- **Aplicação**: Mobile
- **Técnica**: Particionamento por Equivalência
- **Pré-condições**: Livros disponíveis e emprestados no acervo
- **Dados de entrada**: 
  - Disponibilidade: "Disponível"
- **Passos**:
  1. Aplicar filtro de disponibilidade
- **Resultado esperado**: Apenas livros disponíveis listados

### CT-024: Filtro sem resultados

- **Requisito**: RF-005
- **Aplicação**: API
- **Técnica**: Particionamento por Equivalência (classe inválida)
- **Dados de entrada**: 
  - Autor: "Autor Inexistente"
  - Gênero: "Ficção Científica"
- **Passos**:
  1. Aplicar filtros que não correspondem a nenhum livro
- **Resultado esperado**: Mensagem "Nenhum livro encontrado"

### CT-025: Limpeza de filtros

- **Requisito**: RF-005
- **Aplicação**: Mobile
- **Técnica**: Teste de Transição de Estado
- **Pré-condições**: Filtros aplicados, resultados limitados
- **Passos**:
  1. Clicar em "Limpar Filtros"
- **Resultado esperado**: Todos os livros exibidos novamente

---

## RF-006: Disponibilizar histórico de empréstimos

### CT-026: Visualização de histórico completo

- **Requisito**: RF-006
- **Aplicação**:
- **Técnica**: Particionamento por Equivalência
- **Pré-condições**: Usuário com histórico de empréstimos
- **Passos**:
  1. Acessar "Meu Histórico"
- **Resultado esperado**: Lista cronológica de todos os empréstimos

### CT-027: Detalhes do empréstimo no histórico

- **Requisito**: RF-006
- **Aplicação**:
- **Técnica**: Particionamento por Equivalência
- **Pré-condições**: Empréstimo finalizado disponível no histórico
- **Passos**:
  1. Clicar em empréstimo específico no histórico
- **Resultado esperado**: Detalhes completos do empréstimo

### CT-028: Histórico vazio para novo usuário

- **Requisito**: RF-006
- **Aplicação**:
- **Técnica**: Particionamento por Equivalência (classe válida)
- **Pré-condições**: Usuário recém-cadastrado sem empréstimos
- **Passos**:
  1. Acessar histórico
- **Resultado esperado**: Mensagem "Nenhum empréstimo realizado"

### CT-029: Filtro de histórico por período - limites de data

- **Requisito**: RF-006
- **Aplicação**:
- **Técnica**: Análise de Valor Limite
- **Pré-condições**: Empréstimos realizados em 31/12/2023, 01/01/2024 e 02/01/2024
- **Dados de entrada**: 
  - Filtro: Data início "01/01/2024" até "01/01/2024"
- **Passos**:
  1. Aplicar filtro incluindo apenas 01/01/2024
- **Resultado esperado**: Mostrar apenas empréstimo de 01/01, excluir 31/12 e 02/01

---

## RF-007: Notificar usuários sobre prazos de devolução

### CT-030: Notificações nos limites de prazo (Análise de Valor Limite)

- **Requisito**: RF-007
- **Aplicação**:
- **Técnica**: Análise de Valor Limite
- **Pré-condições**: Sistema envia notificações 3 dias antes do vencimento
- **Dados de entrada**:
  - Teste 1: Empréstimo vence em 4 dias (não deve notificar)
  - Teste 2: Empréstimo vence em 3 dias (deve notificar)
  - Teste 3: Empréstimo vence em 2 dias (deve notificar)
- **Passos**:
  1. Sistema executa rotina nos limites de prazo
- **Resultado esperado**: Notificar apenas a partir do 3º dia

### CT-031: Notificação no limite do vencimento

- **Requisito**: RF-007
- **Aplicação**:
- **Técnica**: Análise de Valor Limite  
- **Pré-condições**: Empréstimos com vencimento próximo
- **Dados de entrada**:
  - Teste 1: Vence em 1 dia
  - Teste 2: Vence hoje (dia 0)
  - Teste 3: Vencido há 1 dia
- **Passos**:
  1. Testar notificações no limite do vencimento
- **Resultado esperado**: Diferentes tipos de notificação para cada situação

### CT-032: Limite de dias para cobrança de atraso

- **Requisito**: RF-007
- **Aplicação**:
- **Técnica**: Análise de Valor Limite
- **Pré-condições**: Cobrança de multa após 7 dias de atraso
- **Dados de entrada**:
  - Teste 1: Atraso de 6 dias (sem multa)
  - Teste 2: Atraso de 7 dias (com multa)
  - Teste 3: Atraso de 8 dias (com multa)
- **Passos**:
  1. Testar notificação de multa no limite de dias
- **Resultado esperado**: Aplicar multa apenas a partir do 7º dia

### CT-033: Múltiplas notificações para múltiplos empréstimos

- **Requisito**: RF-007
- **Aplicação**:
- **Técnica**: Teste de Tabela de Decisão
- **Pré-condições**: Usuário com 3 livros, vencimentos diferentes
- **Passos**:
  1. Sistema processa notificações
- **Resultado esperado**: Notificação única consolidada ou separadas

---

## RF-008: Emitir relatórios de uso da biblioteca

### CT-034: Relatório de livros mais emprestados

- **Requisito**: RF-008
- **Aplicação**:
- **Técnica**: Particionamento por Equivalência
- **Pré-condições**: Histórico de empréstimos disponível
- **Dados de entrada**: 
  - Período: Último mês
- **Passos**:
  1. Acessar área de relatórios (admin)
  2. Selecionar "Livros Mais Emprestados"
  3. Definir período
  4. Gerar relatório
- **Resultado esperado**: Lista ordenada por número de empréstimos

### CT-035: Relatório de usuários mais ativos

- **Requisito**: RF-008
- **Aplicação**:
- **Técnica**: Particionamento por Equivalência
- **Pré-condições**: Múltiplos usuários com empréstimos
- **Passos**:
  1. Gerar relatório de usuários ativos
- **Resultado esperado**: Lista de usuários por quantidade de empréstimos

### CT-036: Relatório de empréstimos em atraso

- **Requisito**: RF-008
- **Aplicação**:
- **Técnica**: Particionamento por Equivalência
- **Pré-condições**: Empréstimos com prazos vencidos
- **Passos**:
  1. Gerar relatório de atrasos
- **Resultado esperado**: Lista de empréstimos vencidos

### CT-037: Exportação de relatório em PDF

- **Requisito**: RF-008
- **Aplicação**: 
- **Técnica**: Teste de Transição de Estado
- **Pré-condições**: Relatório gerado na tela
- **Passos**:
  1. Clicar em "Exportar PDF"
- **Resultado esperado**: Arquivo PDF baixado

---

## Resumo de Cobertura de Testes

| Requisito | Casos de Teste | Técnicas Aplicadas |
|:---------:|:--------------:|:------------------:|
| RF-001 | CT-001 a CT-005 | Particionamento, Análise Valor Limite |
| RF-002 | CT-006 a CT-010 | Particionamento por Equivalência |
| RF-003 | CT-011 a CT-015 | Particionamento por Equivalência |
| RF-004 | CT-016 a CT-020 | Particionamento, Análise Valor Limite |
| RF-005 | CT-021 a CT-025 | Particionamento, Tabela Decisão, Transição Estado |
| RF-006 | CT-026 a CT-029 | Particionamento, Análise Valor Limite |
| RF-007 | CT-030 a CT-033 | Análise Valor Limite, Tabela Decisão |
| RF-008 | CT-034 a CT-037 | Particionamento, Transição Estado |

**Total: 37 casos de teste** cobrindo todos os 8 requisitos funcionais identificados.


# Casos de Teste - Requisitos Não Funcionais

## RNF-001: Segurança dos Dados dos Usuários

### CT-NF-001: Criptografia de Senhas

- **Descrição:** Verificar se as senhas dos usuários estão sendo armazenadas de forma segura
- **Pré-condições:** Sistema em funcionamento
- **Dados de Entrada:** Senha de usuário
- **Passos:**
  1. Cadastrar novo usuário
  2. Verificar armazenamento no banco de dados
- **Resultado Esperado:** Senha armazenada com hash criptográfico
- **Aplicação:** API

### CT-NF-002: Proteção contra Ataques de Força Bruta

- **Descrição:** Verificar proteção contra tentativas múltiplas de login
- **Pré-condições:** Usuário cadastrado
- **Dados de Entrada:** Credenciais inválidas
- **Passos:**
  1. Tentar login com senha incorreta 5 vezes
- **Resultado Esperado:** Bloqueio temporário da conta após 5 tentativas
- **Aplicação:** API

## RNF-002: Compatibilidade com Navegadores e Android

### CT-NF-004: Compatibilidade com Chrome

- **Descrição:** Verificar funcionamento no Chrome
- **Pré-condições:** Chrome instalado
- **Dados de Entrada:** URL do sistema
- **Passos:**
  1. Acessar sistema via Chrome
  2. Testar funcionalidades principais
- **Resultado Esperado:** Funcionamento correto em todas as funcionalidades
- **Aplicação:** Web

### CT-NF-005: Compatibilidade com Firefox

- **Descrição:** Verificar funcionamento no Firefox
- **Pré-condições:** Firefox instalado
- **Dados de Entrada:** URL do sistema
- **Passos:**
  1. Acessar sistema via Firefox
  2. Testar funcionalidades principais
- **Resultado Esperado:** Funcionamento correto em todas as funcionalidades
- **Aplicação:** Web

### CT-NF-006: Compatibilidade com Android 10+

- **Descrição:** Verificar funcionamento em dispositivos Android
- **Pré-condições:** Dispositivo Android 10 ou superior
- **Dados de Entrada:** Aplicativo instalado
- **Passos:**
  1. Instalar aplicativo
  2. Testar funcionalidades principais
- **Resultado Esperado:** Funcionamento correto em todas as funcionalidades
- **Aplicação:** Mobile

### CT-NF-007: Compatibilidade com iOS 15 superior

- **Descrição:** Verificar funcionamento em dispositivos iOS
- **Pré-condições:** Dispositivo iOS 10 ou superior
- **Dados de Entrada:** Aplicativo instalado
- **Passos:**
  1. Instalar aplicativo
  2. Testar funcionalidades principais
- **Resultado Esperado:** Funcionamento correto em todas as funcionalidades
- **Aplicação:** Mobile

## RNF-003: Desenvolvimento em Python

### CT-NF-007: Compatibilidade de Versão Python

- **Descrição:** Verificar compatibilidade com versão do Python
- **Pré-condições:** Ambiente de desenvolvimento configurado
- **Dados de Entrada:** Código fonte
- **Passos:**
  1. Executar sistema com Python 3.8+
- **Resultado Esperado:** Sistema funcionando sem erros de compatibilidade
- **Aplicação:** API

### CT-NF-008: Dependências Python

- **Descrição:** Verificar instalação de dependências
- **Pré-condições:** Ambiente virtual Python
- **Dados de Entrada:** requirements.txt
- **Passos:**
  1. Instalar dependências
  2. Verificar versões
- **Resultado Esperado:** Todas as dependências instaladas corretamente
- **Aplicação:** API

## RNF-004: Comunicação com SQLite

### CT-NF-009: Conexão com Banco de Dados

- **Descrição:** Verificar conexão com SQLite
- **Pré-condições:** Banco de dados configurado
- **Dados de Entrada:** Credenciais de conexão
- **Passos:**
  1. Tentar conexão com banco
  2. Executar consulta simples
- **Resultado Esperado:** Conexão estabelecida e consulta executada
- **Aplicação:** API

### CT-NF-010: Performance de Consultas

- **Descrição:** Verificar tempo de resposta das consultas
- **Pré-condições:** Banco com dados de teste
- **Dados de Entrada:** Consultas complexas
- **Passos:**
  1. Executar consultas
  2. Medir tempo de resposta
- **Resultado Esperado:** Tempo de resposta < 2 segundos
- **Aplicação:** API

## RNF-005: Conformidade Legal

### CT-NF-011: LGPD - Proteção de Dados

- **Descrição:** Verificar conformidade com LGPD
- **Pré-condições:** Sistema em produção
- **Dados de Entrada:** Dados pessoais de usuários
- **Passos:**
  1. Verificar armazenamento de dados
  2. Verificar políticas de privacidade
- **Resultado Esperado:** Sistema em conformidade com LGPD
- **Aplicação:** API

## RNF-006: Interface Intuitiva e Acessível

### CT-NF-013: Usabilidade - Tempo de Aprendizado

- **Descrição:** Verificar facilidade de uso
- **Pré-condições:** Usuários não familiarizados
- **Dados de Entrada:** Tarefas básicas
- **Passos:**
  1. Solicitar usuários realizarem tarefas
  2. Medir tempo de conclusão
- **Resultado Esperado:** Tarefas concluídas em tempo razoável
- **Aplicação:** Web/Mobile

### CT-NF-014: Responsividade

- **Descrição:** Verificar adaptação a diferentes telas
- **Pré-condições:** Sistema acessível
- **Dados de Entrada:** Diferentes resoluções
- **Passos:**
  1. Testar em diferentes dispositivos
  2. Verificar layout
- **Resultado Esperado:** Interface adaptada corretamente
- **Aplicação:** Web/Mobile

### CT-NF-015: Feedback Visual

- **Descrição:** Verificar feedback de ações
- **Pré-condições:** Interface implementada
- **Dados de Entrada:** Ações do usuário
- **Passos:**
  1. Realizar ações
  2. Verificar feedback
- **Resultado Esperado:** Feedback claro e imediato
- **Aplicação:** Web/Mobile


