## API Node.js com Prisma e MongoDB
Sobre o projeto
Este projeto é uma API REST desenvolvida para fins educacionais,
com o objetivo de ensinar conceitos básicos de backend utilizando
Node.js, Express, Prisma ORM e MongoDB.
O projeto é utilizado em aulas práticas de programação backend,
servindo como base para estudo, testes e adaptações pelos alunos.
---
## Tecnologias utilizadas
- Node.js
- Express
- Prisma ORM
- MongoDB
- JavaScript
---
Como baixar o projeto
No terminal, execute o comando abaixo:

```bash
git clone https://github.com/edivanBarbosa/api-node-prisma-mongodb.git
```
Depois, entre na pasta do projeto:
```
cd api-node-prisma-mongodb
```
Configuração inicial
Instalar as dependências
```
npm install
```
---
## Criar o arquivo .env
PASSO 2 — Criar o arquivo .env
Método 1 (RECOMENDADO – visual, fácil)
No VS Code, vá no Explorer (lado esquerdo)
Clique com o botão direito na pasta api
Clique em New File
Digite exatamente:
```
.env
```
##Método 2 (Terminal)
No terminal, dentro da pasta api, rode:
```
touch .env
```
## Colocar o conteúdo dentro do .env
```
DATABASE_URL="mongodb+srv://USUARIO:SENHA@cluster.mongodb.net/NOME_DO_BANCO"

```
---
Configuração do banco de dados (MongoDB)
Este projeto utiliza MongoDB como banco de dados.
Cada aluno deve utilizar **sua própria conta do MongoDB**.
Passo 1 – Criar conta no MongoDB
1. Acesse o site: https://www.mongodb.com
2. Crie uma conta gratuita (MongoDB Atlas)
3. Crie um **Cluster gratuito**
4. Crie um **Banco de Dados**
Passo 2 – Obter a string de conexão
No painel do MongoDB Atlas:
1. Clique em **Connect**
2. Escolha a opção **Connect your application**
3. Copie a **string de conexão** fornecida pelo MongoDB
Ela será parecida com isto: mongodb+srv://USUARIO:SENHA@cluster.mongodb.net/NOME_DO_BANCO
---
## Gerar o Prisma Client
```
npx prisma generate
```
## Criar as coleções no banco
```
npx prisma db push
```
## Executar o projeto
```
node server.js
```
---
##Referências

---

## Material de apoio / Referências
Este projeto foi desenvolvido com apoio em material educacional disponível no YouTube:
- **API Node.js + Prisma + MongoDB**  
  Autor: **Rodolfo Mori**  
  Canal: **ProgramadorBR**  
  Link: https://www.youtube.com/watch?v=PyrMT0GA3sE
Todo o conteúdo foi adaptado para fins educacionais e didáticos,
com o objetivo de facilitar o aprendizado dos alunos.










