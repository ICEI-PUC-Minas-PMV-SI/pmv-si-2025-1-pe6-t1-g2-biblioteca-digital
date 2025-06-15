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