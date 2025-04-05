# APIs e Web Services

O planejamento de uma aplicação de APIS Web é uma etapa fundamental para o sucesso do projeto. Ao planejar adequadamente, você pode evitar muitos problemas e garantir que a sua API seja segura, escalável e eficiente.

Aqui estão algumas etapas importantes que devem ser consideradas no planejamento de uma aplicação de APIS Web.

O sistema de gestão de bibliotecas visa modernizar e facilitar o gerenciamento de acervos, empréstimos, reservas, renovações e o controle de usuários em instituições de ensino. A aplicação será acessível via web e aplicativo mobile (Android), utilizando uma API integrada para centralizar as operações. O sistema atenderá alunos, professores, bibliotecários e gestores, proporcionando uma experiência unificada e segura.


## Objetivos da API

O objetivo principal desta API é fornecer um serviço eficiente e seguro para a gestão de bibliotecas, permitindo o controle automatizado do acervo e das operações de empréstimos e reservas de livros.

- **Desenvolver uma API de integração**  
  Permitir a interação entre a aplicação web e o aplicativo mobile Android, garantindo que os usuários possam acessar funcionalidades essenciais como consulta ao acervo, reserva e devolução de livros em tempo real.

- **Automatizar o envio de notificações**  
  Enviar aos usuários alertas sobre prazos de devolução, confirmações de reserva e outras atualizações relevantes, melhorando a experiência e a organização do acervo.

- **Implementar um banco de dados robusto**  
  Armazenar informações sobre livros, usuários e transações de empréstimo, garantindo escalabilidade, otimização de consultas e integridade dos dados.

- **Disponibilizar funcionalidades para bibliotecários e gestores**  
  Permitir o acompanhamento do histórico de empréstimos, geração de relatórios personalizados e monitoramento da disponibilidade do acervo.

- **Facilitar futuras integrações**  
  Garantir que o sistema possa ser facilmente integrado com sistemas acadêmicos ou outras plataformas tecnológicas.



## Modelagem da Aplicação

A aplicação seguirá uma arquitetura monolítica, com um backend desenvolvido em Python e um banco de dados relacional para armazenar informações sobre livros, alunos e empréstimos. O sistema contará com uma API que permitirá a interação entre a aplicação web e o aplicativo mobile Android, garantindo acessibilidade e eficiência na gestão bibliotecária

![Modelo ER da Biblioteca] (![e29dfd6d-1fd5-4bb2-a610-8e9853ddaf46]) (https://github.com/user-attachments/assets/0a1c5fa6-556b-4b12-bf61-0bc0d8de24bf)


### Estrutura de Dados (Modelo Relacional)

A modelagem segue o modelo entidade-relacionamento (ER) e possui as seguintes tabelas:  

#### 1. Entidades Principais  

#### **Livros**  
Armazena informações gerais sobre cada livro.  

- **Atributos**: `id_livro` (PK), `titulo`, `descricao`, `autor`, `ano_publicacao`, `editora`.  
- **Relacionamento**: Cada livro pode ter múltiplas tiragens.  

#### **Tiragens**  
Representa cada edição específica de um livro.  

- **Atributos**: `id_tiragem` (PK), `isbn`, `disponivel`, `id_livro` (FK).  
- **Relacionamento**: Cada tiragem pertence a um único livro.  

#### **Alunos**  
Contém os dados dos alunos que utilizam a biblioteca.  

- **Atributos**: `id_aluno` (PK), `cpf`, `nome`, `sobrenome`, `nascimento`, `endereco`, `email`, `tel1`, `tel2`.  
- **Relacionamento**: Cada aluno pode realizar vários empréstimos.  

#### **Empréstimos**  
Registra os empréstimos realizados.  

- **Atributos**: `id_emprestimo` (PK), `id_tiragem` (FK), `id_aluno` (FK), `data_emprestimo`, `data_devolucao`.  
- **Relacionamento**: Cada empréstimo pertence a um aluno e está associado a uma tiragem específica.  

### Diagrama de Classes

A modelagem pode ser representada por classes seguindo a estrutura do banco de dados.
```python
class Aluno(Base):
    cpf = models.CharField(max_length=11, unique=True, null=False, blank=False)
    nome = models.CharField(null=False, max_length=100, blank=False)
    sobrenome = models.CharField(null=False, max_length=150, blank=False)
    nascimento = models.DateField(null=True)
    endereco = models.CharField(max_length=250, null=True, blank=True)
    email = models.EmailField(max_length=250, unique=True, blank=False)
    tel1 = models.CharField(max_length=11, blank=False)
    tel2 = models.CharField(max_length=11, blank=True)
    tiragem = models.ManyToManyField(Tiragem, through='Emprestimo')

    def __str__(self):
        return f"{self.nome} {self.sobrenome}"
```
```python
class Emprestimo(Base):
    aluno = models.ForeignKey(Aluno, on_delete=models.CASCADE)
    tiragem = models.ForeignKey(Tiragem, on_delete=models.CASCADE)
    dt_emprestimo = models.DateField()
    dt_devolucao = models.DateField(blank=True, null=True)
```
```python
class Livro(Base):
    titulo = models.CharField(null=False, max_length=100)
    descricao = models.CharField(null=False, max_length=250)
    editora = models.CharField(null=False, max_length=50)
    autor = models.CharField(max_length=50)
    ano_publicacao = models.IntegerField(blank=True, null=True)

    def __str__(self):
        return f"{self.titulo}"
```
```python
class Tiragem(Base):
    isbn = models.CharField(null=False, max_length=13, unique=True)
    disponivel = models.BooleanField(default=True)
    livro = models.ForeignKey(Livro, null=True, related_name="tiragens", on_delete=models.SET_NULL)


    def __str__(self):
        return f"{self.livro} - ISBN:{self.isbn} - disp:{self.disponivel}"
```
#### Tecnologias Utilizadas

Esta especificação define o stack tecnológico adotado para garantir eficiência, escalabilidade e segurança no desenvolvimento do projeto.

### 1. Linguagem de Programação

- **Backend**: Desenvolvido em **Python** com o uso do framework **Django**.  
- **Frontend**: Utiliza **React** com **Next.js** para renderização eficiente e otimização de SEO.

### 2. Banco de Dados

- **Relacional**: **SQLite** para armazenamento estruturado e suporte a consultas complexas.

### 3. Arquitetura

- **Monolito**: Por ser um projeto único, o sistema possui um nível de complexidade de coordenação menor.

### 4. Segurança

- **Autenticação e Autorização**: **OAuth 2.0** e **OpenID Connect** para gerenciamento seguro de acessos.
- **Criptografia**: Uso de **TLS** para comunicação segura e **AES** para criptografia de dados sensíveis.

### 5. APIs e Integrações

- **APIs REST**: Oferece suporte a ambos os modelos para maior flexibilidade.
- **Integrações**: **Webhooks** e **API Gateway** para comunicação com sistemas externos.

### 6. Ferramentas de Desenvolvimento

- **Gerenciamento de Dependências**: `venv`, `Yarn` e `npm` para controle de pacotes.
- **Testes**: **Pytest** para testes unitários.

### 7. IDE

- **IDE Backend**: **PyCharm**  
- **IDE Frontend**: **VSCode**

## API Endpoints

Link da documentação: https://documenter.getpostman.com/view/14303483/2sAYdoESgo#bd387009-bb40-4502-b297-1c0de1be8e93

![Modelo de Documentação](https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2025-1-pe6-t1-g2-biblioteca-digital/main/docs/img/Imagem_Documentacao.jpeg)


## Considerações de Segurança

A segurança da aplicação é um aspecto essencial no desenvolvimento do sistema de gestão de bibliotecas, especialmente considerando que ele será acessado via web e aplicativo mobile. A seguir, estão as principais medidas de segurança adotadas:

### 1. Autenticação
- Implementação de autenticação baseada em **tokens JWT (JSON Web Token)** para garantir que apenas usuários autenticados possam acessar os recursos da API.
- Revalidação de token em todas as requisições sensíveis.

### 2. Autorização
- Controle de acesso por **nível de usuário**, diferenciando permissões de alunos, bibliotecários e gestores.
- Validação de permissões em todos os endpoints críticos para garantir que cada usuário só tenha acesso às funcionalidades permitidas.

### 3. Proteção contra ataques comuns
- **Prevenção contra SQL Injection** com uso de ORM seguro e consultas parametrizadas.

### 4. Boas Práticas Adicionais
- Validação de entrada de dados do usuário para evitar comportamentos inesperados.


## Implantação

[Instruções para implantar a aplicação distribuída em um ambiente de produção.]

1. Defina os requisitos de hardware e software necessários para implantar a aplicação em um ambiente de produção.
2. Escolha uma plataforma de hospedagem adequada, como um provedor de nuvem ou um servidor dedicado.
3. Configure o ambiente de implantação, incluindo a instalação de dependências e configuração de variáveis de ambiente.
4. Faça o deploy da aplicação no ambiente escolhido, seguindo as instruções específicas da plataforma de hospedagem.
5. Realize testes para garantir que a aplicação esteja funcionando corretamente no ambiente de produção.

## Testes

Segue descrito abaixo os testes funcionais e as ferramentas a serem utilizadas.

## 1. Casos de Teste Funcionais

Estes testes validam os requisitos funcionais da aplicação.

## 1.1 - Cadastro bem-sucedido

✅ Descrição: Verificar se o sistema cadastra corretamente um aluno com todos os dados válidos.
✅ Entrada:
```json
{
  "cpf": "12345678901",
  "nome": "João",
  "sobrenome": "Silva",
  "nascimento": "2000-05-15",
  "endereco": "Rua das Flores, 123",
  "email": "joao.silva@email.com",
  "tel1": "11999998888",
  "tel2": "11888887777"
}
```
✅ Saída esperada: Código 201 Created e mensagem "Aluno cadastrado com sucesso!!!"

## 1.2 - CPF inválido

✅ Descrição: O sistema deve rejeitar um CPF inválido (menos de 11 dígitos ou caracteres não numéricos).
✅ Entrada:

```json
{
  "cpf": "123",
  "nome": "João",
  "nascimento": "2000-05-15",
  "endereco": "Rua das Flores, 123",
  "email": "joao.silva@email.com",
  "tel1": "11999998888"
}
```
✅ Saída esperada: Código 400 Bad Request com erro "CPF inválido"

## 1.3 - Campos obrigatórios ausentes

✅ Descrição: O sistema deve rejeitar requisições sem os campos obrigatórios (cpf, nome, nascimento, endereco, email, tel1).
✅ Entrada:

```json
{
  "nome": "João",
  "email": "joao.silva@email.com"
}
```
✅ Saída esperada: Código 400 Bad Request com erro "Campos obrigatórios ausentes: cpf, nascimento, endereco, tel1"

## 1.4 - E-mail inválido

✅ Descrição: O sistema deve rejeitar e-mails em formato inválido.
✅ Entrada:

```json
{
  "cpf": "12345678901",
  "nome": "João",
  "nascimento": "2000-05-15",
  "endereco": "Rua das Flores, 123",
  "email": "joao.silvaemail.com",
  "tel1": "11999998888"
}
```
✅ Saída esperada: Código 400 Bad Request com erro "Formato de e-mail inválido"

## 1.5 - Cadastro duplicado

✅ Descrição: O sistema deve impedir o cadastro de um CPF já existente.
✅ Entrada: Requisição com CPF "12345678901" já cadastrado.
✅ Saída esperada: Código 409 Conflict com erro "Aluno já cadastrado"

## 1.6 - Formato de data incorreto

✅ Descrição: O sistema deve rejeitar datas de nascimento em formato incorreto.
✅ Entrada:

```json
{
  "cpf": "12345678901",
  "nome": "João",
  "nascimento": "15-05-2000",
  "endereco": "Rua das Flores, 123",
  "email": "joao.silva@email.com",
  "tel1": "11999998888"
}
```
✅ Saída esperada: Código 400 Bad Request com erro "Formato de data inválido. Use AAAA-MM-DD"

# Referências

Inclua todas as referências (livros, artigos, sites, etc) utilizados no desenvolvimento do trabalho.
