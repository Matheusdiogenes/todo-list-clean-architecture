# Simple Todo List API following Clean Architecture principles

### Getting started

```
git clone https://github.com/Matheusdiogenes/todo-list-clean-architecture
cd todo-list-clean-architecture
npm install
npm test
npm start (building...)
```

### Project Structure

```
src 
 └ application                      → Application sources and Unitary Tests
    └ useCases                      → implementation Use Cases
       └ todo                       → Use Cases Todo
       └ user                       → Use Cases User
    └ domain                        → Entities, Payloads, repository interfaces and Unitary Tests
    └ infra                         → Frameworks, tools and Unitary Tests
       └ db                         → Database Storage (In Memory)
jest.config.ts                      → Jest Config
tsconfig.ts                         → Typescript Config
```
