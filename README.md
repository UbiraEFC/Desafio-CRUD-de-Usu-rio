## Desafio: CRUD de Usuário

### Descrição do projeto

- Nível de dificuldade: Iniciante

### Cadastro de usuário (Sign up)

 - Este endpoint deverá receber um usuário com os seguintes campos: nome, email, senha e uma lista de objetos telefone. Segue o modelo:

```
{
  "name": "string",
  "email": "string",
  "password": "string",
  "phones": [
    {
      "number": "string",
      "ddd": "string"
    }
  ]
}
```

 - Em caso de sucesso irá retornar os campos:

```
{
   "id": "id do usuário (gerado pelo banco ou GUID)",
   "email": "string"
}
```

 - Caso o e-mail já exista, deverá retornar erro com a mensagem "E-mail já existente".
 - Usar status codes de acordo para erros e sucessos.

### Login (Sign in)

 - Este endpoint irá receber um objeto com e-mail e senha:
 ```
{
   "email": "string",
   "password": "string",
}
```

 - Caso o e-mail exista e a senha seja a mesma que a senha persistida, salvar o id do usuário e a data em um documento do banco de dados chamado Token.
 	- O arquivo Token no banco deverá conter os seguintes campos:
	```
	{
	   "id": "string",
	   "id_user": "string",
	   "login_date": "date"
	}
	```

 - Caso o e-mail não exista, retornar erro com status apropriado mais a mensagem "Usuário e/ou senha inválidos"

 - Caso o e-mail exista mas a senha não bata, retornar o status apropriado mais a mensagem "Usuário e/ou senha inválidos"

 

### Buscar usuários

 - Chamadas para este endpoint devem retornar uma lista de usuários com os seguintes campos:
 ```
 [
   {
      "id": "id do usuário",
      "email": "string",
      "phones": [
      	 {
	       "number": "string",
	       "ddd": "string"
	     }
	   ]
    } 
 ]
```

### Requisitos

 - Persitência de dados

### Submissao

 - Coloque o desafio no seu GitHub.

 - As URLs devem ser colocadas junto ao projeto em um arquivo .md ou em um swagger.
