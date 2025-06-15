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