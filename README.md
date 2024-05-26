Projeto de listagens de Usuários

O projeto foi construido com as seguintes ferramentas:
 - Backend:
  - PHP
  - Docker
  - SQLITE
- Frontend:
  - Angular 17
  - Biblioteca de componentes primeng

Nescessario para utilização da aplicação em sua maquina:
 - GIT: https://git-scm.com/downloads
 - NODE: https://nodejs.org/en
 - Docker: https://www.docker.com/products/docker-desktop/
 - Angular 17: npm install -g @angular/cli@17

Após a instalção do GIT, NODE e Docker
Utilizar o terminal Powershell como adminitrador para instalação do Angular 17, e utilizar o seguinte comando:
npm install -g @angular/cli@17

Com a instalação destas ferramentas, clone o repositorio em sua maquina usando o git bash
git clone https://github.com/jonathanwilliam01/listagem_usuarios

Com o repositorio do projeto clonado, acesso via terminal e selecione o diretorio "backend"
cd \.\.\listagem_usuarios\backend

Com o diretorio do backend selecionado e o Docker desktop aberto, rode o comando abaixo para criar a imagem do backend e subi-lo paro o localhost
docker compose up --build 

Criando a imagem, acesso o link abaixo para criar o banco de dados sqlite:
http://localhost:8000/cria_banco.php
Nesta URL irá retornar uma pagina com o primeiro insert de teste afim de validar a criação do banco

Com o Backend operante, navegue até o diretorio front end
cd \.\.\listagem_usuarios\frontend

Execute o comando
npm install

E em seguida o comando:
ng serve --open

Seguindo estes passos a aplicação estará pronta para uso

