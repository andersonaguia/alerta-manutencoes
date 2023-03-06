<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# <p align="center">API-Developers</p>

## 💻 Sobre o projeto

[ApiManutenções](https://github.com/andersonaguia/api-manutencoes) é uma API para gerenciamento de manutenções preventivas a serem realizadas.

## ⚙️ Funcionalidades

- [x] Criar um responsável pela manutenção
- [x] Criar uma categoria da manutenção
- [x] Criar uma frequência para as manutenções
- [x] Buscar manutenções preventivas próximas do vencimento
- [x] Buscar todos os e-mails cadastrados para avisar sobre as manutenções
- [x] Buscar todas as manutenções preventivas
- [x] Cadastrar um e-mail para envio de alerta sobre manutenções próximas
- [x] Atualizar o status 'sendEmail' das manutenções desejadas pelo ID
- [x] Criar uma nova manutenção preventiva
---

## :construction: Pré-requisitos
- Ter o [![NodeJS Badge](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white&link=https://nodejs.org/en/)](https://nodejs.org/en/) instalado na máquina;
- Ter o [![Mysql Badge](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/) instalado na máquina
#

## :warning: Configuração da aplicação

1) Criar um database no MySQL chamado `maintenances` para utilizar no projeto;
2) Utilizar o comando `npm install` para instalar as dependências;
3) Utilizar o `.env_example` como base para o `.env` e colocar as suas configurações;
4) Utilizar o comando `npm run migration:run` para criar as tabelas após a configuração das variáveis de ambiente no passo 3
5) Utilizar o comando `npm run start:dev` para executar a aplicação no ambiente de desenvolvimento.

#
## 💻 Acessando as rotas da aplicação

## Endpoints disponíveis
### Criar um responsável pela manutenção
```
POST: http://localhost:3001/maintenances/responsible
Headers: {
	"Content-Type": "application/json"
}
Body{  
	"responsible": "Anderson"
}
```
**Resultado:**
```
{
	"responsible": "ANDERSON",
	"created_at": "2023-02-03T00:56:36.985Z",
	"updated_at": "2023-02-03T00:56:36.985Z",
	"id": 1
}
``` 

### Criar uma categoria para manutenção
```
POST: http://localhost:3001/maintenances/category
Headers: {
	"Content-Type": "application/json"
}
Body{  
	"category": "Ar Condicionado"
}
```
**Resultado:**
```
{
	"category": "AR CONDICIONADO",
	"created_at": "2023-02-03T00:53:49.633Z",
	"updated_at": "2023-02-03T00:53:49.633Z",
	"id": 1
}
```

### Criar uma frequência para manutenção
```
POST: http://localhost:3001/maintenances/frequency
Headers: {
	"Content-Type": "application/json"
}
Body{  
	"frequency": "MENSAL"
}
```
**Resultado:**
```
{
	"frequency": "MENSAL",
	"created_at": "2023-02-03T23:07:47.993Z",
	"updated_at": "2023-02-03T23:07:47.993Z",
	"id": 12
}
```

### Buscar as preventivas próximas de expirar
```
GET: http://localhost:3001/preventive/expire
Headers: {
	"Content-Type": "application/json"
}
```
**Resultado:**
```
{
	"status": 200,
	"headers": {},
	"body": [
		{
			"id": 149,
			"category": "AR CONDICIONADO",
			"activity": "Ligar o sistema e verificar se está funcionando corretamente e se as unidades de montagem firmes. Limpeza dos ﬁltros, drenos, gabinetes, grelhas e demais componentes da evaporadoras.",
			"frequency": "MENSAL",
			"responsible": "DPI",
			"last": "2022-05-30T13:00:00.000Z",
			"next": "2023-02-14T05:48:56.000Z"
		}
	]
}
```

### Cadastrar um e-mail para enviar alertas de manutenções próximas a vencer
```
POST: http://172.31.210.171:3001/maintenances/mail
Headers: {
	"Content-Type": "application/json"
}
Body: {
	"address": "emailtest@gmail.com"
}
```
**Resultado:**
```
{
	"address": "emailtest@gmail.com",
	"created_at": "2023-02-07T20:21:35.394Z",
	"updated_at": "2023-02-07T20:21:35.394Z",
	"id": 1
}
```

### Buscar todos os e-mails cadastrados para envio de alertas
```
GET: http://localhost:3001/maintenances/mail
Headers: {
	"Content-Type": "application/json"
}
```
**Resultado:**
```
[
	{
		"id": 1,
		"address": "emailtest@gmail.com"
	},
	{
		"id": 8,
		"address": "emailtest2@gmail.com"
	}
]
```

### Criar uma manutenção preventiva
```
POST: http://localhost:3001/preventive
Headers: {
	"Content-Type": "application/json"
}
Body:{
	"category": 149,
	"activity": "Teste data da manutenção",
	"frequency": 8,
	"responsible": 153,
	"last": "2022-08-25",
	"next": "2023-03-04",
	"sendEmail": true
}
```
**Resultado:**
```
{
	"status": 201,
	"headers": {},
	"body": {
		"activity": "Nova Manutenção",
		"category": {
			"id": 149
		},
		"frequency": {
			"id": 8
		},
		"last": "2022-08-25T00:00:00.000Z",
		"next": "2023-03-04T00:00:00.000Z",
		"responsible": {
			"id": 153
		},
		"sendEmail": true,
		"created_at": "2023-03-06T18:24:09.599Z",
		"updated_at": "2023-03-06T18:24:09.599Z",
		"id": 300
	}
}
```

### Buscar todas as manutenções preventivas cadastradas
```
GET: http://localhost:3001/preventive
Headers: {
	"Content-Type": "application/json"
}
```
**Resultado:**
```
{
	"status": 200,
	"headers": {},
	"body": {
	"status": 200,
	"headers": {},
	"body": [
		{
			"id": 149,
			"activity": "Ligar o sistema e verificar se está funcionando corretamente e se as unidades de montagem firmes. Limpeza dos ﬁltros, drenos, gabinetes, grelhas e demais componentes da evaporadoras.",
			"last": "2022-05-30T13:00:00.000Z",
			"next": "2023-12-14T05:48:56.000Z",
			"sendEmail": true,
			"frequency": {
				"id": 4,
				"frequency": "MENSAL"
			},
			"category": {
				"id": 149,
				"category": "AR CONDICIONADO"
			},
			"responsible": {
				"id": 149,
				"responsible": "DPI"
			}
		},
		{
			"id": 150,
			"activity": "Hidrojateamento das condensadoras VRV com jato de baixa pressão e aplicação de vaselina líquida industrial.",
			"last": "2022-05-28T16:30:00.000Z",
			"next": "2023-06-03T16:30:00.000Z",
			"sendEmail": true,
			"frequency": {
				"id": 2,
				"frequency": "SEMANAL"
			},
			"category": {
				"id": 149,
				"category": "AR CONDICIONADO"
			},
			"responsible": {
				"id": 149,
				"responsible": "DPI"
			}
		}
	]
}
}
```

### Atualizar o status sendEmail de várias manutenções cadastradas
```
PATCH: http://localhost:3001/preventive/updatesendmail
Headers: {
	"Content-Type": "application/json"
}
{
	[
	  1, 2, 3
  ]
}
```
**Resultado:**
```
{
	"status": 200,
	"headers": {},
	"body": "Dados atualizados com sucesso"
}
```

#

## 🛠 Tecnologias

[![NodeJS Badge](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white&link=https://nodejs.org/en/)](https://nodejs.org/en/)

[![TypeScript Badge](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white&link=https://www.typescriptlang.org/)](https://www.typescriptlang.org/)	

[![NestJS Badge](https://img.shields.io/badge/nestjs-E0234E?style=for-the-badge&logo=nestjs&logoColor=white&link=https://nestjs.com/)](https://nestjs.com/)

[![ExpressJS Badge](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white&link=https://expressjs.com/)](https://expressjs.com/)

[![NpmJS Badge](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white&link=https://www.npmjs.com/)](https://www.npmjs.com/)

[![Insomnia Badge](
https://img.shields.io/badge/Insomnia-5849be?style=for-the-badge&logo=Insomnia&logoColor=white&link=https://insomnia.rest/)](https://insomnia.rest/)

[![Prettier Badge](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E&link=https://prettier.io/)](https://prettier.io/)

[![Mysql Badge](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)

[![AmazonAWSBadge](https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)](https://aws.amazon.com/)


## 🦸 Autor
 <b>Anderson Aguiar</b>🚀
 <br />
[![Linkedin Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white&link=https://www.linkedin.com/in/andersonlaguiar/)](https://www.linkedin.com/in/andersonlaguiar/) 

---

## 📝 Licença

Este projeto está sob a licença [MIT](./LICENSE).

Feito com ❤️ por Anderson Aguiar 👋🏽 [Entre em contato!](https://www.linkedin.com/in/andersonlaguiar/)