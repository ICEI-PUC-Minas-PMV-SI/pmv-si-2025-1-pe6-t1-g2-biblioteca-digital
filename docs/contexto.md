# Introdução

As bibliotecas desempenham um papel fundamental na disseminação do conhecimento, mas muitas delas ainda enfrentam desafios na organização de seus acervos e na gestão de empréstimos. Este projeto busca desenvolver um sistema para modernizar a administração de uma biblioteca, permitindo que alunos acessem, reservem e devolvam livros de forma prática e eficiente.

A proposta visa eliminar processos manuais suscetíveis a erros, garantindo um melhor controle sobre os livros disponíveis e emprestados. Com um sistema digitalizado, torna-se possível acompanhar o histórico de empréstimos, evitar extravios e otimizar a experiência dos usuários. O foco principal são bibliotecas de instituições de ensino que precisam modernizar seus processos.

## Problema
Cuidar de uma biblioteca sem um sistema adequado pode ser um verdadeiro caos. Sem um bom controle, livros acabam sumindo, é difícil encontrar títulos e as devoluções vivem atrasadas.

Sem automação, é comum que bibliotecas tenham registros bagunçados, dificultem a verificação de quais livros estão disponíveis e fiquem sem informações confiáveis sobre os usuários e seus empréstimos. Isso tudo atrapalha tanto a biblioteca quanto os alunos, que dependem dos livros para estudar e pesquisar.

A solução é um sistema que centralize e organize tudo, automatizando o controle de empréstimos e devoluções. Com um banco de dados bem estruturado, fica mais fácil manter as informações seguras, reduzir erros e garantir um serviço muito mais eficiente para todo mundo. Com isso, será desenvolvido uma API que permitirá a integração com uma aplicação web quanto para um aplicativo mobile Android. Isso possibilitará que os usuários acessem o sistema de maneira flexível, seja através de seus navegadores em desktop ou por meio de dispositivos móveis, tornando o processo de consulta, reserva e devolução de livros ainda mais ágil e acessível, independentemente da plataforma.

> **Links Úteis**:
> - [Objetivos, Problema de pesquisa e Justificativa](https://medium.com/@versioparole/objetivos-problema-de-pesquisa-e-justificativa-c98c8233b9c3)
> - [Matriz Certezas, Suposições e Dúvidas](https://medium.com/educa%C3%A7%C3%A3o-fora-da-caixa/matriz-certezas-suposi%C3%A7%C3%B5es-e-d%C3%BAvidas-fa2263633655)
> - [Brainstorming](https://www.euax.com.br/2018/09/brainstorming/)

## Objetivos

O objetivo geral deste projeto é desenvolver um software para solucionar os problemas relacionados à administração de bibliotecas, proporcionando uma maneira mais eficiente e prática de gerenciar o acervo e os empréstimos de livros. O sistema permitirá o controle automatizado de empréstimos, devoluções e reservas, além de garantir o acompanhamento em tempo real das condições do acervo e dos usuários.

Objetivos específicos:

Desenvolver uma API de integração para que tanto a aplicação web quanto o aplicativo mobile Android possam interagir de maneira eficiente, permitindo aos usuários realizar ações como consultar o acervo, reservar e devolver livros, independentemente da plataforma utilizada.

Implementar um banco de dados robusto para armazenar as informações dos livros, usuários e transações de empréstimo, garantindo a integridade e a segurança dos dados, além de otimizar a consulta e atualização das informações no sistema.
 
> **Links Úteis**:
> - [Objetivo geral e objetivo específico: como fazer e quais verbos utilizar](https://blog.mettzer.com/diferenca-entre-objetivo-geral-e-objetivo-especifico/)

## Justificativa

____
Descreva a importância ou a motivação para trabalhar com esta aplicação que você escolheu. Indique as razões pelas quais você escolheu seus objetivos específicos ou as razões para aprofundar em certos aspectos do software.

O grupo de trabalho pode fazer uso de questionários, entrevistas e dados estatísticos, que podem ser apresentados, com o objetivo de esclarecer detalhes do problema que será abordado pelo grupo.
____
A escolha de desenvolver um sistema de gestão para bibliotecas digitais visa modernizar e otimizar o controle de empréstimos e devoluções de livros, resolvendo problemas comuns como extravios e registros manuais desorganizados. A aplicação será acessível tanto por meio de uma plataforma web quanto de um aplicativo mobile Android, proporcionando praticidade e flexibilidade aos usuários.

A definição dos objetivos específicos foi motivada pela necessidade de garantir uma integração eficiente entre as plataformas por meio de uma API e a criação de um banco de dados seguro e estruturado, essencial para o bom funcionamento do sistema.

> **Links Úteis**:
> - [Como montar a justificativa](https://guiadamonografia.com.br/como-montar-justificativa-do-tcc/)

## Público-Alvo

Descreva quem serão as pessoas que usarão a sua aplicação indicando os diferentes perfis. O objetivo aqui não é definir quem serão os clientes ou quais serão os papéis dos usuários na aplicação. A ideia é, dentro do possível, conhecer um pouco mais sobre o perfil dos usuários: conhecimentos prévios, relação com a tecnologia, relações
hierárquicas, etc.

Adicione informações sobre o público-alvo por meio de uma descrição textual, diagramas de personas e mapa de stakeholders.

> **Links Úteis**:
> - [Público-alvo](https://blog.hotmart.com/pt-br/publico-alvo/)
> - [Como definir o público alvo](https://exame.com/pme/5-dicas-essenciais-para-definir-o-publico-alvo-do-seu-negocio/)
> - [Público-alvo: o que é, tipos, como definir seu público e exemplos](https://klickpages.com.br/blog/publico-alvo-o-que-e/)
> - [Qual a diferença entre público-alvo e persona?](https://rockcontent.com/blog/diferenca-publico-alvo-e-persona/)

# Especificações do Projeto

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)

# Catálogo de Serviços

Descreva aqui todos os serviços que serão disponibilizados pelo seu projeto, detalhando suas características e funcionalidades.

# Arquitetura da Solução

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![arq](https://github.com/user-attachments/assets/b9402e05-8445-47c3-9d47-f11696e38a3d)


## Tecnologias Utilizadas

Descreva aqui qual(is) tecnologias você vai usar para resolver o seu problema, ou seja, implementar a sua solução. Liste todas as tecnologias envolvidas, linguagens a serem utilizadas, serviços web, frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.

Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.

## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)
