<p align="center">
  <img width="120" src=".github/logo.png" />
</p>

<h1 align="center">GraphQL</h1>

<p align="center">
  <img src="https://img.shields.io/badge/graphql-%23e10098.svg?&style=for-the-badge&logo=graphql&logoColor=white" />

  <img src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white" />
</p>

<h2 align="center">
  Um exemplo simples de <b>GraphQL</b> em NodeJS!
</h2>

## 🎯 Objetivo

Ser um projeto de exemplo introdutório para **GraphQL**, apresentando os conceitos básicos de `typeDefs` e `resolvers`.

---

## 📕 Sobre

Esse respositório surgiu como exemplo em uma _talk_ de minha autoria com o propósito de introduzir o tema de **GraphQL** para equipe de desenvolvimento.

---

## ▶️ Rodando o projeto

Para rodar o projeto é bem simples.

Observação será necessário ter o **Node** instalado em sua máquina.

- (Clone | Download) do repositório.
- Instalar as dependências com `npm install` ou `yarn`.
- Subir o servidor com `npm run dev` ou `yarn dev`.
- Acessar em seu navegador a url `http://localhost:3000`
- Pronto, agora você pode se divertir no **Playground**. 😃

---

## 🚀 Tecnologias utilizadas

Tecnologias utilizadas para resolução.

- Node
- GraphQL

<img src="https://img.shields.io/badge/graphql-%23e10098.svg?&style=for-the-badge&logo=graphql&logoColor=white" />

<img src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white" />

---

## 🖥️ Playground

`Querys` disponíveis para serem utilizadas no **Playground**.

<br />

- `Query` de health check, só para mostrar que API está no ar.
```
query HealthCheck {
  healthCheck
}
```

<br />

- `Query` para consultar autores e seus posts.

```
query Authors {
  authors {
    id
    name
    
    posts {
      id
      title
      
      author {
        name
      }
    }
  }
}
```

<br />

- `Query` para consultar um autor pelo ID.

```
query Author {
  author(id: 1618851515190) {
    id
    name
  }
}

```

<br />

- `Mutation` para criar um autor.

```
mutation CreateAuthor {
  createAuthor(input: {
    name: "Mariazinha"
  }) {
    id
    name
  }
}
```

<br />

- `Query` para consultar posts.

```
query Posts {
  posts {
    id
    title
    
    author {
      id
      name
    }
  }
}
```

---

by [Roberto Umbelino](https://github.com/robertoumbelino)
