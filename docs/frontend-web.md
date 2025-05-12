# Front-end Web

O projeto da interface web é construído utilizando o T3 Stack, um conjunto de tecnologias modernas e eficientes para o desenvolvimento de aplicações web full-stack com foco em segurança de tipos e desenvolvimento rápido. A interface visa proporcionar uma experiência de usuário intuitiva e agradável para alunos, professores, bibliotecários e gestores no acesso às funcionalidades do sistema de gestão de bibliotecas.

## Projeto da Interface Web

A interface web apresenta um design limpo e moderno, com uma barra de navegação superior que permite o acesso às seções principais: "Livros", "Alunos", "Empréstimos" e "Estatística". A aplicação é responsiva, adaptando-se a diferentes tamanhos de tela para garantir uma boa experiência em diversos dispositivos. As interações são intuitivas, com botões de ação primária destacados e formulários claros para a entrada de dados.

## Wireframes

* **Tela de Livros:** Exibe um catálogo de livros em formato de tabela, com colunas para Título, Descrição, Editora e Autor. Permite a visualização e gerenciamento do acervo. Um botão "Novo Livro" no canto superior direito abre um modal para cadastrar novos livros.
* **Modal Novo Livro:** Apresenta um formulário com campos para preencher o Título, Descrição, Editora, Autor e Ano de Publicação do novo livro, com botões para "Cancelar" e "Salvar".
* **Tela de Alunos:** Exibe uma lista de alunos cadastrados em uma tabela com informações como ID, CPF, Nome, Sobrenome, Nascimento, Email, Telefone 1, Telefone 2 e Endereço. Um botão "Novo Aluno" no canto superior direito abre um modal para cadastrar novos alunos.
* **Modal Novo Aluno:** Apresenta um formulário para cadastrar um novo aluno, com campos para CPF (obrigatório), Nome (obrigatório), Sobrenome, Nascimento (com um seletor de data), Email, Telefone 1, Telefone 2 e Endereço, com botões para "Cancelar" e "Salvar".
* **Tela de Empréstimos:** Apresenta duas seções principais: "Novo Empréstimo" e "Listar Empréstimos" (através de botões). A seção "Novo Empréstimo" permite selecionar um aluno (buscando por nome ou CPF) e um livro (buscando por título ou autor) para registrar um novo empréstimo. A seção "Listar Empréstimos" exibe uma tabela com os empréstimos ativos e finalizados, incluindo informações como ID do Empréstimo, Aluno, Livro, Data de Empréstimo, Previsão de Devolução, Status e Ações (como "Devolvido em..."). Há também um botão para "Mostrar Pendentes".
* **Tela de Estatística da Biblioteca:** Exibe um dashboard com diversas métricas importantes, incluindo:
    * Total de Alunos cadastrados no sistema.
    * Total de Livros no acervo.
    * Total de Exemplares cadastrados.
    * Disponibilidade de Exemplares (em um gráfico de donut, mostrando a quantidade de exemplares disponíveis e emprestados).
    * Empréstimos por Mês (em um gráfico de linhas, mostrando a evolução dos empréstimos ao longo dos meses).
    * Livros Mais Emprestados (em um gráfico de barras, listando os livros com maior número de empréstimos).
    * Um resumo de dados geral da biblioteca.

 
Esse wireframe é classificado como de média complexidade (mid-fi) porque equilibra estrutura clara e dados realistas com elementos simplificados, como tabelas organizadas e informações plausíveis (ex: livros e alunos), mas não inclui detalhes visuais refinados, como cores, ícones específicos ou interações avançadas, mantendo o foco na funcionalidade básica sem chegar ao nível de um protótipo high-fi.

      
![image](https://github.com/user-attachments/assets/19a9d3a3-3511-481f-924d-54e311194a85)


![image](https://github.com/user-attachments/assets/5ad04e88-5885-461f-b765-96366cb987c5)


![image](https://github.com/user-attachments/assets/b7c857fd-9b0a-446f-813d-4b22beef7701)


![image](https://github.com/user-attachments/assets/e52523cc-c780-485d-bffa-5472a360bbaf)



## Design Visual

A interface utiliza um esquema de cores predominantemente branco com detalhes em azul, transmitindo uma sensação de organização e profissionalismo. A tipografia é clara e legível. Os botões de ação primária são destacados em azul, facilitando a identificação das principais funcionalidades. Ícones são utilizados de forma sutil para complementar a navegação e indicar ações. O design geral é moderno e focado na usabilidade, com espaçamento adequado entre os elementos e uma organização lógica das informações.

## Fluxo de Dados

O fluxo de dados na aplicação web envolve a interação do usuário com a interface, que se comunica com o backend através de chamadas à API (utilizando tRPC).

1.  O usuário interage com os componentes da interface (por exemplo, busca um livro, cadastra um aluno, registra um empréstimo).
2.  O front-end (React e Next.js) envia requisições tipadas para as rotas da API no backend através do tRPC.
3.  O backend (Python/Django ou outra tecnologia) processa as requisições, acessando e manipulando os dados no banco de dados.
4.  O backend envia respostas tipadas de volta para o front-end com os dados solicitados ou o resultado das operações.
5.  O front-end atualiza a interface do usuário dinamicamente com base nos dados recebidos, refletindo as alterações ou exibindo as informações solicitadas.

## Tecnologias Utilizadas

* **React:** Biblioteca JavaScript para construção da interface de usuário interativa e baseada em componentes.
* **Next.js:** Framework React que oferece funcionalidades como roteamento, renderização do lado do servidor (SSR) e otimizações para performance.
* **TypeScript:** Linguagem que estende JavaScript com tipagem estática, proporcionando maior segurança e facilitando a manutenção do código.
* **Tailwind CSS:** Framework CSS utilitário que permite a estilização rápida e consistente dos componentes da interface.
* **tRPC:** Biblioteca que facilita a criação de APIs end-to-end type-safe, simplificando a comunicação entre o front-end e o back-end com inferência de tipos automática.
* **Zod:** Biblioteca de declaração e validação de esquemas TypeScript para garantir a integridade dos dados que trafegam entre o front-end e o back-end.

## Considerações de Segurança

As considerações de segurança para a aplicação web são essenciais para proteger os dados dos usuários e garantir a integridade do sistema:

* **Autenticação:** Implementação de um sistema de autenticação seguro para verificar a identidade dos usuários antes de conceder acesso às funcionalidades protegidas. É provável o uso de tokens JWT (JSON Web Token) para manter a sessão do usuário autenticada.
* **Autorização:** Controle de acesso baseado em roles (alunos, bibliotecários, gestores) para garantir que cada usuário tenha permissão apenas para as funcionalidades e dados relevantes ao seu perfil.
* **Proteção contra ataques comuns:**
    * **Cross-Site Scripting (XSS):** Medidas para prevenir a injeção de scripts maliciosos na interface, como a sanitização de dados fornecidos pelo usuário.
    * **Cross-Site Request Forgery (CSRF):** Implementação de tokens CSRF para proteger contra requisições não autorizadas em nome de usuários autenticados.
    * **Clickjacking:** Estratégias para evitar que a interface seja em frames maliciosos para enganar os usuários.
    * **Chamadas Server-Side:** protegidas contra ataques comuns (CSRF, injeção, etc.).
* **Validação de dados:** Validação rigorosa dos dados de entrada no front-end antes de serem enviados para o backend, ajudando a prevenir erros e potenciais vulnerabilidades.
* **Comunicação segura:** Utilização de HTTPS para criptografar todo o tráfego entre o navegador do usuário e o servidor, protegendo informações sensíveis durante a transmissão.

## Implantação

A implantação da aplicação web envolverá as seguintes etapas:

1.  **Requisitos de Hardware e Software:**
    * **Hardware:** Servidor com recursos adequados para suportar o tráfego esperado e a carga da aplicação. Os requisitos específicos dependerão da escala de uso.
    * **Software:** Sistema operacional (Linux recomendado), Node.js (para executar a aplicação Next.js), gerenciador de processos (como PM2 ou systemd) para garantir a disponibilidade contínua da aplicação.

2.  **Escolha da Plataforma de Hospedagem:**
    * Plataformas como Vercel (altamente otimizado para Next.js), Netlify, AWS (com serviços como EC2, S3 e CloudFront), Google Cloud Platform (GCP) ou Azure podem ser utilizadas para hospedar a aplicação, oferecendo escalabilidade e confiabilidade.

3.  **Configuração do Ambiente:**
    * Configuração das variáveis de ambiente necessárias para a aplicação, como URLs da API do backend e outras configurações específicas do ambiente de produção.
    * Instalação das dependências do projeto utilizando `npm` ou `yarn`.
    * Configuração de um servidor web reverso (como Nginx) para servir a aplicação, lidar com o tráfego HTTPS e, potencialmente, balanceamento de carga.

4.  **Deploy da Aplicação:**
    * Construção da versão otimizada para produção da aplicação Next.js com o comando `next build`.
    * Transferência dos arquivos de build para o servidor de hospedagem.
    * Configuração do gerenciador de processos para iniciar e monitorar a aplicação Next.js.
    * Configuração do servidor web reverso para rotear as requisições para a aplicação Next.js em execução.

5.  **Testes:**
    * Realização de testes completos no ambiente de produção para garantir que todas as funcionalidades da aplicação web estejam funcionando corretamente e que a integração com o backend seja estável. Isso inclui testes de usabilidade, testes de funcionalidade, testes de performance e testes de segurança.

## Testes

A estratégia de testes para a aplicação web incluirá:

* **Testes Unitários:** Testar individualmente os componentes, hooks e funções para garantir que cada parte isolada do código funcione conforme o esperado (utilizando ferramentas como Jest e React Testing Library).
* **Testes de Integração:** Verificar a correta interação entre diferentes componentes e a comunicação com a API do backend (também com Jest e React Testing Library ou ferramentas específicas para testar integrações com APIs).
* **Testes End-to-End (E2E):** Simular fluxos de usuário completos na aplicação para garantir que a interface e o backend funcionem juntos corretamente (utilizando ferramentas como Cypress ou Playwright).
* **Testes de Interface do Usuário (UI):** Garantir que a interface seja renderizada corretamente em diferentes navegadores e dispositivos, e que os elementos visuais e interativos funcionem como esperado.
* **Testes de Responsividade:** Verificar se o layout da aplicação se adapta adequadamente a diferentes tamanhos de tela.
* **Testes de Acessibilidade:** Avaliar a conformidade da aplicação com as diretrizes de acessibilidade web (WCAG) para garantir que seja utilizável por pessoas com deficiências.

Serão criados casos de teste detalhados para cobrir todos os requisitos funcionais e não funcionais da aplicação web. A automação dos testes será priorizada para garantir a eficiência e a qualidade do processo de desenvolvimento e manutenção.

Link para nosso teste: 

## Referências

https://www.figma.com/pt-br/ai/
https://create.t3.gg/
https://nextjs.org/
(https://tanstack.com/query/latest)
