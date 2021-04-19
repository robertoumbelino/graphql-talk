```
query HealthCheck {
  healthCheck
}

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

query Author {
  author(id: 1618851515190) {
    id
    name
  }
}

mutation CreateAuthor {
  createAuthor(input: {
    name: "Mariazinha"
  }) {
    id
    name
  }
}

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