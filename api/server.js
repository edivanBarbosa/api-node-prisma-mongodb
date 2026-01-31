import cors from 'cors'
import express from 'express'
import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const app = express();
app.use(express.json());
app.use(cors())

const users = [];

// Aqui nós criamos os usuários e e enviamos para o banco

app.post('/users', async (req, res) => {

  await prisma.user.create({
    data: {
      name: req.body.name,
      email: req.body.email,
      age: req.body.age
    }
  })
  // demostra o resultado se deu sucesso no metado post
  users.push(req.body)
  res.status(201).json(users)
});

// aqui vamos alterar para o metado \Put - atualizar usuarios 

app.put('/users/:id', async (req, res) => {

  console.log(req)

  await prisma.user.update({
    where: {
      id: req.params.id

    },
    data: {
      name: req.body.name,
      email: req.body.email,
      age: req.body.age
    }
  })

  users.push(req.body)
  res.status(201).json(users)
});


//aqui acontece a captura das informações que estão no banco busca os usuarios 
// a versão do chatgpt para revolver a questão do int na idade
app.get('/users', async (req, res) => {
  let users = []

  if (
    req.query.name ||
    req.query.email ||
    req.query.age
  ) {
    users = await prisma.user.findMany({
      where: {
        name: req.query.name,
        email: req.query.email,
        age: req.query.age ? Number(req.query.age) : undefined
      }
    })
  } else {
    users = await prisma.user.findMany()
  }

  res.json(users)
})


/* app.get('/users', async (req, res) => {

  let users =[]

  if (req.query){

    users = await prisma.user.findMany({
      where:{
        name: req.query.name,
        email: req.query.email,
        age: req.query.age
      }
    })
  }else{
     const users = await prisma.user.findMany()

  }
  //console.log(req)
  res.status(200).json(users)
}); */

// agora vamos criar o delete 

app.delete('/users/:id', async (req, res) => {

  await prisma.user.delete(
    {
      where: {
        id: req.params.id
      }

    }

  )
  res.status(201).json({ message: "usuario deletado com sucesso" })

})

app.listen(3000);
