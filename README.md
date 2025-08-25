<img width="1915" height="849" alt="image" src="https://github.com/user-attachments/assets/b3de23e1-c4bf-43ad-9863-e487de579069" />
📋 Estrutura do Projeto Developer Evaluation:
markdown
# Developer Evaluation Project

## 📚 Instructions
**Prazo: 7 dias corridos a partir do recebimento**

- [ ] Código versionado em repositório Github público
- [ ] Upload deste template no repositório
- [ ] Instruções de configuração, execução e testes
- [ ] Documentação e organização consideradas na avaliação

## 🎯 Use Case: API de Registros de Vendas

### Requisitos da API (CRUD Completo):
- [ ] Número da venda
- [ ] Data da venda  
- [ ] Cliente
- [ ] Valor total da venda
- [ ] Filial onde a venda foi realizada
- [ ] Produtos (com quantidades, preços unitários, descontos)
- [ ] Valor total por item
- [ ] Status Cancelada/Não Cancelada

### Eventos (Diferencial):
- [ ] SaleCreated
- [ ] SaleModified  
- [ ] SaleCancelled
- [ ] ItemCancelled

### 📊 Business Rules:
- [ ] 4+ itens idênticos: 10% desconto
- [ ] 10-20 itens idênticos: 20% desconto
- [ ] Limite máximo: 20 itens por produto
- [ ] Sem desconto para menos de 4 itens

## 🛠 Tech Stack

### Backend:
- .NET 8
- Entity Framework Core
- SQL Server
- MediatR (CQRS)
- AutoMapper
- FluentValidation
- JWT Authentication

### Testing:
- xUnit
- Moq
- Integration Tests

### Frontend (Diferencial):
- React + Vite
- Ant Design
- Axios
<img width="1909" height="928" alt="image" src="https://github.com/user-attachments/assets/a9d63ab7-91ca-42ea-b584-9d48ddc02c74" />

## 📁 Project Structure
DeveloperEvaluation/
├── src/
│ ├── Core/
│ │ ├── Domain/
│ │ │ ├── Entities/
│ │ │ ├── ValueObjects/
│ │ │ ├── Enums/
│ │ │ └── Events/
│ │ ├── Application/
│ │ │ ├── Features/
│ │ │ ├── Common/
│ │ │ └── Interfaces/
│ │ └── Infrastructure/
│ │ ├── Data/
│ │ ├── Repositories/
│ │ └── Services/
│ ├── WebApi/
│ │ ├── Controllers/
│ │ ├── Middleware/
│ │ └── Features/
│ └── Tests/
│ ├── UnitTests/
│ └── IntegrationTests/
├── docs/
│ ├── overview.md
│ ├── tech-stack.md
│ ├── frameworks.md
│ └── api/
└── README.md

text

## 🚀 Como Executar

### Pré-requisitos:
- .NET 8 SDK
- SQL Server 2019+
- Node.js (para frontend)

### Backend:
```bash
cd src/WebApi
dotnet restore
dotnet ef database update
dotnet run
Frontend (opcional):
bash
cd frontend
npm install
npm run dev
📋 API Endpoints
Sales:
GET /api/sales - Listar vendas

GET /api/sales/{id} - Buscar venda por ID

POST /api/sales - Criar nova venda

PUT /api/sales/{id} - Atualizar venda

DELETE /api/sales/{id} - Cancelar venda

Products:
GET /api/products - Listar produtos

Customers:
GET /api/customers - Listar clientes

🧪 Testing
bash
# Unit tests
dotnet test src/Tests/UnitTests/

# Integration tests  
dotnet test src/Tests/IntegrationTests/
📊 Regras de Negócio Implementadas
✅ Validação de quantidade máxima (20 itens)
✅ Cálculo automático de descontos:

4-9 itens: 10% desconto

10-20 itens: 20% desconto

<4 itens: sem desconto

✅ Eventos de domínio (SaleCreated, SaleModified, etc.)
