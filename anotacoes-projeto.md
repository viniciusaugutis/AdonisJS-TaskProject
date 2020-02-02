## Conceitos

Adonis é indicado para projetos maiores e provê muita coisa já pronta para nós desenvolvermos como autenticação, orm etc.

CLI do Adonis: npm install -g @adonisjs/cli

## Comandos e criação do projeto

adonis comando -h : -h para aparecer todas as opções que o comando oferece para nós

--api-only: instala apenas dependências para adonis para fazer uma api rest

slim: versão muito simples do adonis, muito usado para micro serviços

Executar o projeto:

adonis serve --dev (--dev ativa a funcionalidade do nodemon)

## Estrutura de pastas do Adonis

app: toda parte funcional do projeto, como models, controllers, jobs, hooks, exceptions, middlewares, validators, etc.

config: são arquivos de como nossa aplicação deve funcionar. Geralmente temos um arquivo de config para cada módulo da nossa aplicação, como autenticação, database, etc

database: fica nossas migrations etc

start: fica o arquivo de rotas e arquivos iniciais da aplicação

ace: arquivo de interface para linha de comando. Mesma coisa que executar comando adonis

## EsLint com AdonisJS

npm install -D eslint

npx eslint --init

## Configurando banco de dados

Para isso rodo o comando npm i --save pg (arquivo database.config tem como instalar para cada cliente de banco de dados)

adonis migration:run - Executar migrations 




