import express from 'express';

import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient( )


const app = express();
app.use(express.json());

const users = [];

app.post('/users', (req, res) => {
  /*const user = req.body;

  //users.push(user);

  res.status(201).json({
    message: 'Usuário criado com sucesso',
    user: user
  });*/
  //console.log(req.body)
  users.push(req.body)
  res.status(201).json(users)
});

app.get('/', (req, res) => {
  res.json(users)
});

app.listen(3000);
