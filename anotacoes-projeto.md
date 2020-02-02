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

## Cadastro de usuario

metodo boot() é como se fosse o contrutor da classe

Model: é objeto do adonis para fazer parte do orm e ter comandos sql para o model

adonis make:controller User : Criar um novo controller

Comando use do AdonisJS é igual ao require do node. Para bibliotecas terceiras pode usar o require, para classes do Adonis o use é mais usado.

adonis route:list: Comando que mostra todas as rotas cadastradas no projeto

No Adonis voce recebe na rota uma variavel chamada ctx que tem dentro dela o request e response, que é igual o request e response do express.

Para isso precisa fazer a desestruturação para pegar essas duas variáveis

Como definiu o projeto como json não precisa no return especificar que é JSON, ou seja, automaticamente o AdonisJS já vai entender isso




