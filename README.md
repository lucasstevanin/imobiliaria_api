# 🏠 Imobiliária API

API RESTful desenvolvida com [NestJS](https://nestjs.com/) e [SQLite](https://www.sqlite.org/), ideal para gerenciamento de imóveis.  
Permite o cadastro, listagem e filtros por tipo e faixa de preço, com documentação Swagger integrada.

---

## 🚀 Funcionalidades

- ✅ Cadastro de imóveis (`POST /properties`)
- ✅ Listagem de imóveis (`GET /properties`)
- ✅ Filtro por tipo (`HOME`, `APARTMENT`, `KITNET`)
- ✅ Filtro por faixa de preço (`min`, `max`)
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
- Render (para deploy)

---

## ✅ Pré-requisitos

- [Node.js](https://nodejs.org/) versão 18 ou superior
- npm ou yarn
- Git (opcional, para clonar o projeto)
- ts-node instalado globalmente ou como dependência do projeto

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