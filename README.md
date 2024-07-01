# Aplicação de Chat Online com Node.js e WebSocket

Este é um exemplo simples de uma aplicação de chat online utilizando Node.js com Express.js e WebSocket.

## Instalação

Para executar este projeto localmente, siga os passos abaixo:

1. **Clone o repositório:**
 
```bash
https://github.com/KarMiguel/Chat_real_time.git
```

2. **Instale as dependências utilizando npm:**

Certifique-se de ter o Node.js instalado no seu sistema. Em seguida, execute:

- npm init
- npm install express --save
- npm install ejs --save
- npm install consign --save
- npm install body-parser --save
- npm install express-validator --save
- npm install -g nodemon
- npm install socket.io --save 

3. **Execute o servidor:**

Para iniciar o servidor, utilize o Nodemon (se já estiver instalado globalmente) para monitorar mudanças no código:

- **`app.js`**: Arquivo principal que configura o servidor Express e WebSocket.
- **`package.json`**: Arquivo de configuração do npm com as dependências e scripts do projeto.
- **`public/`**: Pasta contendo arquivos estáticos como CSS e JavaScript.
- **`views/`**: Pasta contendo os templates EJS para renderização das páginas.
- **`routes/`**: Pasta contendo as rotas da aplicação, como a lógica do chat.
- **`controllers/`**: Pasta contendo controladores que lidam com a lógica de negócios da aplicação.

## Funcionalidades

- **Chat em Tempo Real**: Utilização do WebSocket com Socket.io para permitir comunicação em tempo real entre os usuários.
- **Validação de Dados**: Utilização do Express-validator para validar dados de entrada.
- **Organização de Rotas**: Utilização do Consign para carregar automaticamente rotas, modelos e outros no aplicativo.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para enviar pull requests ou abrir issues com sugestões de melhorias ou correções.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
