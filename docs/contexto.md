# Introdução

As bibliotecas desempenham um papel fundamental na disseminação do conhecimento, mas muitas delas ainda enfrentam desafios na organização de seus acervos e na gestão de empréstimos. Este projeto busca desenvolver um sistema para modernizar a administração de uma biblioteca, permitindo que alunos acessem, reservem e devolvam livros de forma prática e eficiente.

A proposta visa eliminar processos manuais suscetíveis a erros, garantindo um melhor controle sobre os livros disponíveis e emprestados. Com um sistema digitalizado, torna-se possível acompanhar o histórico de empréstimos, evitar extravios e otimizar a experiência dos usuários. O foco principal são bibliotecas de instituições de ensino que precisam modernizar seus processos.

## Problema
Cuidar de uma biblioteca sem um sistema adequado pode ser um verdadeiro caos. Sem um bom controle, livros acabam sumindo, é difícil encontrar títulos e as devoluções vivem atrasadas.

Sem automação, é comum que bibliotecas tenham registros bagunçados, dificultem a verificação de quais livros estão disponíveis e fiquem sem informações confiáveis sobre os usuários e seus empréstimos. Isso tudo atrapalha tanto a biblioteca quanto os alunos, que dependem dos livros para estudar e pesquisar.

A solução é um sistema que centralize e organize tudo, automatizando o controle de empréstimos e devoluções. Com um banco de dados bem estruturado, fica mais fácil manter as informações seguras, reduzir erros e garantir um serviço muito mais eficiente para todo mundo. Com isso, será desenvolvido uma API que permitirá a integração com uma aplicação web quanto para um aplicativo mobile Android. Isso possibilitará que os usuários acessem o sistema de maneira flexível, seja através de seus navegadores em desktop ou por meio de dispositivos móveis, tornando o processo de consulta, reserva e devolução de livros ainda mais ágil e acessível, independentemente da plataforma.

## Objetivos

O objetivo geral deste projeto é desenvolver um software para solucionar os problemas relacionados à administração de bibliotecas, proporcionando uma maneira mais eficiente e prática de gerenciar o acervo e os empréstimos de livros. O sistema permitirá o controle automatizado de empréstimos, devoluções e reservas, além de garantir o acompanhamento em tempo real das condições do acervo e dos usuários.

Objetivos específicos:

Desenvolver uma API de integração para que tanto a aplicação web quanto o aplicativo mobile Android possam interagir de maneira eficiente, permitindo aos usuários realizar ações como consultar o acervo, reservar e devolver livros, independentemente da plataforma utilizada.

Implementar um banco de dados robusto para armazenar as informações dos livros, usuários e transações de empréstimo, garantindo a integridade e a segurança dos dados, além de otimizar a consulta e atualização das informações no sistema.
 
## Justificativa

A escolha de desenvolver um sistema de gestão para bibliotecas digitais visa modernizar e otimizar o controle de empréstimos e devoluções de livros, resolvendo problemas comuns como extravios e registros manuais desorganizados. A aplicação será acessível tanto por meio de uma plataforma web quanto de um aplicativo mobile Android, proporcionando praticidade e flexibilidade aos usuários.

Muitas bibliotecas ainda enfrentam dificuldades na organização do acervo, no controle de empréstimos e na atualização de seus materiais. Segundo o portal Sophia (2024), a desorganização e a falta de catalogação adequada são desafios recorrentes, dificultando o acesso dos usuários aos livros disponíveis. Além disso, a ausência de um sistema informatizado pode gerar atrasos e falhas na administração do acervo (ActiveSoft, 2024).

Outro problema relevante é a falta de integração tecnológica nas bibliotecas, o que compromete a eficiência da gestão. Conforme estudo publicado na SciELO (2024), a implementação de bibliotecas digitais exige investimentos em infraestrutura e capacitação profissional, já que a adaptação a novas ferramentas tecnológicas é um desafio constante para bibliotecários (InterSaberes, 2024).

A definição dos objetivos específicos foi motivada pela necessidade de garantir uma integração eficiente entre as plataformas por meio de uma API e a criação de um banco de dados seguro e estruturado, essencial para o bom funcionamento do sistema. Com um sistema digital bem planejado, espera-se não apenas facilitar o gerenciamento do acervo, mas também oferecer um serviço mais acessível e eficiente para alunos e instituições acadêmicas.

## Referências  

- *Sophia* (2024). [5 problemas em bibliotecas escolares e como resolvê-los](https://sophia.com.br/5-problemas-em-bibliotecas-escolares-e-como-resolve-los/?utm_source=chatgpt.com).  
- *ActiveSoft* (2024). [Problemas com organização e gestão de sua biblioteca? Saiba como resolvê-los](https://activesoft.com.br/problemas-com-organizacao-e-gestao-de-sua-biblioteca-saiba-como-resolve-los/?utm_source=chatgpt.com).  
- *SciELO* (2024). [Desafios na implementação de bibliotecas digitais](https://www.scielo.br/j/ci/a/Wb33LWZdjFTqxTrRhpDbwcp/?utm_source=chatgpt.com).  
- *InterSaberes* (2024). [Biblioteca digital: desafios do bibliotecário](https://www.intersaberes.com/blog/biblioteca-digital-desafios-do-bibliotecario/?utm_source=chatgpt.com).  


> **Links Úteis**:
> - [Como montar a justificativa](https://guiadamonografia.com.br/como-montar-justificativa-do-tcc/)

## Público-Alvo

O sistema de gestão de bibliotecas foi pensado para atender a diferentes perfis de usuários, cada um com suas particularidades e necessidades. O objetivo é entender quem são essas pessoas, como elas interagem com a tecnologia e o que esperam do sistema.

## 1. Alunos

* **Quem são:** Estudantes de ensino médio, graduação ou pós-graduação que frequentam a biblioteca para estudos, pesquisas e trabalhos acadêmicos.
* **Idade:** Entre 15 e 30 anos, em sua maioria.
* **Relacionamento com a tecnologia:** Jovens que estão familiarizados com smartphones, aplicativos e internet, mas nem todos têm conhecimentos técnicos avançados.
* **O que precisam:**
    * Encontrar livros de forma rápida e fácil.
    * Reservar e renovar livros online, sem precisar ir até a biblioteca.
    * Acompanhar prazos de devolução e receber lembretes.
* **O que esperam:** Um sistema simples, ágil e que funcione bem tanto no computador quanto no celular.

## 2. Professores e Pesquisadores

* **Quem são:** Docentes e pesquisadores que utilizam a biblioteca para preparar aulas, orientar alunos e desenvolver pesquisas.
* **Idade:** Entre 30 e 60 anos, com perfis variados.
* **Relacionamento com a tecnologia:** Alguns são bastante familiarizados com ferramentas digitais, enquanto outros preferem soluções mais diretas e sem complicações.
* **O que precisam:**
    * Acesso a livros técnicos, artigos e materiais de referência.
    * Renovar empréstimos sem burocracia.
    * Encontrar materiais específicos com facilidade.
* **O que esperam:** Um sistema confiável, que economize tempo e ofereça suporte para suas atividades acadêmicas.

## 3. Funcionários da Biblioteca (Bibliotecários e Equipe)

* **Quem são:** Profissionais responsáveis pela organização do acervo, empréstimos, devoluções e atendimento ao público.
* **Idade:** Variada, mas muitos têm experiência consolidada na área.
* **Relacionamento com a tecnologia:** Alguns têm familiaridade com sistemas digitais, mas outros podem preferir ferramentas mais simples e diretas.
* **O que precisam:**
    * Cadastrar, editar e remover livros do sistema.
    * Controlar empréstimos e devoluções de forma eficiente.
    * Gerar relatórios sobre o uso da biblioteca.
* **O que esperam:** Um sistema que facilite o trabalho diário, reduza erros e agilize processos manuais.

## 4. Gestores da Instituição

* **Quem são:** Diretores, coordenadores e outros gestores responsáveis pela administração da instituição de ensino.
* **Idade:** Geralmente acima de 40 anos.
* **Relacionamento com a tecnologia:** Menos envolvidos no uso diário do sistema, mas interessados em dados e relatórios para tomada de decisões.
* **O que precisam:**
    * Acesso a informações sobre o uso da biblioteca (livros mais emprestados, frequência de usuários, etc.).
    * Dados para planejar a aquisição de novos livros e recursos.
* **O que esperam:** Um sistema que forneça métricas claras e ajude a melhorar a gestão da biblioteca.

# Personas

## Persona 1: Ana, Estudante de Graduação

* **Idade:** 22 anos
* **Perfil:** Ana está no terceiro ano de Letras e usa a biblioteca frequentemente para pegar livros de literatura e fazer pesquisas.
* **Objetivo:** Encontrar livros rapidamente e renovar empréstimos sem precisar ir até a biblioteca.
* **Frustrações:** Às vezes, os livros que ela precisa já estão emprestados, e ela não recebe avisos sobre disponibilidade.
* **Necessidades:** Um sistema que permita reservar livros online e envie notificações sobre prazos de devolução.

## Persona 2: Carlos, Professor de História

* **Idade:** 48 anos
* **Perfil:** Carlos é professor há 20 anos e usa a biblioteca para preparar aulas e orientar alunos.
* **Objetivo:** Acessar livros técnicos e materiais de referência sem demora.
* **Frustrações:** O processo manual de renovação de empréstimos é demorado e burocrático.
* **Necessidades:** Um sistema que permita renovar empréstimos online e ofereça uma busca eficiente por materiais especializados.

## Persona 3: Mariana, Bibliotecária

* **Idade:** 52 anos
* **Perfil:** Mariana trabalha na biblioteca há 15 anos e é responsável pela organização do acervo e pelos empréstimos.
* **Objetivo:** Manter o acervo organizado e controlar empréstimos de forma eficiente.
* **Frustrações:** Os processos manuais são propensos a erros e consomem muito tempo.
* **Necessidades:** Um sistema que automatize tarefas repetitivas e facilite a gestão do acervo.

# Mapa de Stakeholders

É uma ferramenta visual que identifica grupos ou indivíduos com interesse no projeto, sua influência e como são impactados. No sistema de gestão de bibliotecas, ele é crucial para considerar as necessidades de todos durante o desenvolvimento e implementação, garantindo que o sistema atenda a alunos, professores, bibliotecários, gestores e equipe de TI de forma eficiente.

| Stakeholder             | Interesse                                                        | Influência |
| :---------------------- | :--------------------------------------------------------------- | :--------- |
| Alunos                  | Acesso rápido a livros e facilidade em empréstimos/reservas.     | Alta       |
| Bibliotecários          | Controle eficiente do acervo e automação de processos.             | Alta       |
| Desenvolvedores         | Criar um sistema funcional e fácil de manter.                 | Alta       |
| Professores             | Acesso a materiais especializados e renovação de empréstimos. | Média      |
| Gestores da Instituição | Relatórios de uso e melhoria na gestão de recursos.                 | Média      |


## Especificações do Projeto

### Requisitos

As tabelas a seguir detalham os requisitos funcionais e não funcionais do projeto. A priorização dos requisitos foi realizada utilizando a técnica de MoSCoW, classificando-os em:

* **Deve ter:** Requisitos essenciais para o funcionamento básico do sistema.
* **Deveria ter:** Requisitos importantes, mas não críticos para o lançamento inicial.
* **Poderia ter:** Requisitos desejáveis, que podem ser implementados em futuras versões.
* **Não terá:** Requisitos que não serão implementados neste momento.

#### Requisitos Funcionais

| ID      | Descrição do Requisito                                     | Prioridade  | Aluno |
| :------ | :------------------------------------------------------- | :---------- |:---------- |
| RF-001  | Permitir que os usuários realizem cadastro e login.       | Deve ter   |   |
| RF-002  | Permitir que administradores cadastrem, editem e removam livros. | Deve ter   |   |
| RF-003  | Permitir pesquisa e consulta de livros disponíveis.        | Deve ter   |   |
| RF-004  | Permitir reserva e renovação de livros online.            | Deve ter   |   |
| RF-005  | Permitir que usuários filtrem os livros por autor, gênero e disponibilidade. | Deveria ter  |   |
| RF-006  | Disponibilizar histórico de empréstimos.                   | Deveria ter  |   |
| RF-007  | Notificar usuários sobre prazos de devolução.              | Poderia ter |   |
| RF-008  | Emitir relatórios de uso da biblioteca.                  | Poderia ter |   |

#### Requisitos não Funcionais

| ID      | Descrição do Requisito                                  | Prioridade  |
| :------ | :---------------------------------------------------- | :---------- |
| RNF-001 | O sistema deve garantir a segurança dos dados dos usuários. | Deve ter   |
| RNF-002 | O sistema deve ser compatível com navegadores modernos e sistemas operacionais Android. | Deve ter   |
| RNF-003 | O sistema deverá ser desenvolvido em Python. | Deve ter   |
| RNF-004 | O sistema deverá se comunicar com o SQLite. | Deve ter   |
| RNF-005 | O sistema deverá deverá atender às normas legais, tais como padrões, leis, etc. | Deve ter   |
| RNF-006 | A interface deve ser intuitiva e acessível para diferentes perfis de usuários. | Deveria ter  |


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto não possui previsão orçamentária.   |
|02| O projeto deverá ser entregue até o final do semestre. |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

# Catálogo de Serviços

Descreva aqui todos os serviços que serão disponibilizados pelo seu projeto, detalhando suas características e funcionalidades.

* **Cadastro e Login:** Permite que usuários e administradores acessem o sistema de forma segura.
* **Gerenciamento de Acervo:** Funcionalidades para adicionar, editar e remover livros do acervo.
* **Pesquisa e Consulta:** Ferramentas para encontrar livros por título, autor, gênero e disponibilidade.
* **Reserva e Renovação:** Permite que usuários reservem e renovem livros online.
* **Histórico de Empréstimos:** Registro de todos os empréstimos realizados por cada usuário.
* **Notificações:** Alertas sobre prazos de devolução e outras informações relevantes.
* **Relatórios:** Geração de relatórios sobre o uso da biblioteca.

# Arquitetura da Solução

A arquitetura escolhida foi a monolítica que é um sistema único, ou seja, todas as funções estão em um único pacote a ser distribuído ao cliente. Sua principal característica é acoplamento de módulos de diferentes abordagens, ou seja, é possível acessar código de módulos distintos minimizando a necessidade de integrações.

<img src="https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2025-1-pe6-t1-g2-biblioteca-digital/blob/main/docs/img/arquitetura.png" width = "100%">

## Vantagens da Arquitetura Monolítica

* **Estruturação simplificada:** Por ser um projeto único, o sistema possui um nível de complexidade de coordenação menor.
* **Implantação:** A implantação de aplicações monolíticas é mais simples do que a implantação de microsserviços. Os desenvolvedores instalam toda a base de código da aplicação e as dependências em um único ambiente.
* **Baixa integração:** Não há necessidade de realizar integração entre módulos distintos dentro do mesmo sistema, tais “integrações” são feitas dentro do código-fonte.

## Desvantagens da Arquitetura Monolítica
* **Manutenção:** A aplicação se torna cada vez maior, o que faz com que seja implementado uma maior complexidade a estrutura do código com passar do tempo. Pequenas alterações e correções podem demandar um grande esforço pois todo o código deverá ser novamente testado e reimplantado no servidor.
* **Linha de código:** Um pequeno erro no código fonte pode fazer com que todo o sistema fique inoperante. Tais incidentes têm o potencial de causar interrupções graves no serviço e afetar todos os usuários ativos.
* **Difícil de escalonar:** As aplicações monolíticas enfrentam vários desafios à medida que se expandem. Como a arquitetura contém todas as funcionalidades em uma única base de código, isso faz com que, toda a aplicação deva ser escalada conforme os requisitos mudam.

## Tecnologias Utilizadas

Esta especificação define o stack tecnológico adotado para garantir eficiência, escalabilidade e segurança no desenvolvimento do projeto.

### 1. Linguagem de Programação
- **Backend**: Desenvolvido em Python com o uso do framework Django.
- **Frontend**: Utiliza React com Next.js para renderização eficiente e otimização de SEO.

### 2. Banco de Dados
- **Relacional**: SQLite para armazenamento estruturado e suporte a consultas complexas.

### 3. Arquitetura
- **Monolito**: Por ser um projeto único, o sistema possui um nível de complexidade de coordenação menor.

### 4. Segurança
- **Autenticação e Autorização**: OAuth 2.0 e OpenID Connect para gerenciamento seguro de acessos.
- **Criptografia**: Uso de TLS para comunicação segura e AES para criptografia de dados sensíveis.

### 5. APIs e Integrações
- **APIs REST**: Oferece suporte a ambos os modelos para maior flexibilidade.
- **Integrações**: Webhooks e API Gateway para comunicação com sistemas externos.

### 6. Ferramentas de Desenvolvimento
- **Gerenciamento de Dependências**: Venv Yarn e npm para controle de pacotes.
- **Testes**: Pytest para testes unitários.

### 7. IDE
- **IDE Backend**: Pycharm.
- **IDE Frontend**: VSCode.
  
## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.


