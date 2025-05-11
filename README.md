# 🏠 Imobiliária API

API RESTful desenvolvida com [NestJS](https://nestjs.com/) e [SQLite](https://www.sqlite.org/), ideal para gerenciamento de imóveis.  
Permite o cadastro, listagem e filtros por tipo e faixa de preço, com documentação Swagger integrada.

---

## Documentação Swagger

- [Documentação API](https://imobiliaria-api.onrender.com/swagger) ou (https://localhost:3000/swagger)

---

## 🚀 Funcionalidades

- ✅ Cadastro de imóveis (`POST /properties`)
- ✅ Listagem de imóveis (`GET /properties`)
- ✅ Filtro por tipo (`HOME`, `APARTMENT`, `KITNET`)
- ✅ Filtro por faixa de preço e tipo (`min`, `max`, `type`)
- ✅ Validação de dados via `class-validator`
- ✅ Documentação automática via Swagger
- ✅ Script de seed para popular o banco com mais de 20 imóveis

---

## ⚙️ Tecnologias Utilizadas

- NestJS
- TypeORM
- SQLite
- Swagger
- class-validator
- ts-node

- Render (para deploy) ou NGROK (para rodar local/publicamente)
- groq IA

---

## ✅ Pré-requisitos

- [Node.js](https://nodejs.org/) versão 18 ou superior
- npm ou yarn
- Git (opcional, para clonar o projeto)
- ts-node instalado globalmente ou como dependência do projeto
- [NGROK](https://ngrok.com/downloads) (opcional, caso o deploy esteja off por conta do plano limitado do Render)

---

## 🧪 Como rodar o projeto localmente

### 1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/imobiliaria-api.git
cd imobiliaria-api
```

### 2. Instale as dependencias
```bash
npm install ou yarn install
```

### 3. Rode a API
```bash
npm run start:dev
```

---

## 🧪 Como rodar a automação no N8N

- Baixe o arquivo .json em [drive](https://drive.google.com/drive/folders/1zXEpG3nkj-XVN50Zi94h_qIB1o-z5CgP?usp=sharing)

- Crie um novo workflow no N8N

- No canto superior direito clique nos "..." e importe o arquivo .json

- Teste o deploy (https://imobiliaria-api.onrender.com/swagger), caso esteja funcional, pule os passo de 1 a 4 abaixo:

- Caso necessário, copie o link (https://imobiliaria-api.onrender.com/properties) e insira dentro do nó chamado "HTTP Request" no campo URL do N8N


### 1. Rode a API
```bash
npm run start:dev
```

### 2. Instale o ngrok na sua maquina e autentique, após isso rode no terminal
- Faz com que a API tenha uma URL pública para usar no N8N
```bash
ngrok http 3000
```

### 3. Pegue o link gerado pelo NGROK e insira dentro do nó chamado "HTTP Request" no campo URL do N8N

### 4. Caso seja necessário, gere uma chave de API da IA groq para poder usá-la. Gere em [groq](groq.com)

---

## 🧪 Instruções para a automação

- Cumprimente a assistente para ter uma saudação inicial (Foi utilizado a IA da groq para uma fluidez na conversa)
- Pode ser pesquisado imoveis por tipo ("Quero um apartamento") e será retornado todos os apartamentos disponiveis
- Poder ser por faixa de valor e tipo ("Quero casa de 100000 até 560000") ou ("Casa de até 500000")

- Todos os valores virão formatados dentro do próprio chat interno do N8N
- Foi utilizado memoria temporaria para até 5 mensagens anteriores (para maior fluidez)