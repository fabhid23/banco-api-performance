# Testes de Performance — Banco API com k6

## 1. Introdução
Este repositório contém uma suíte de testes de performance para a API do banco, usando JavaScript e [k6](https://k6.io/). O objetivo é validar desempenho, identificar gargalos e monitorar comportamento sob carga.

⚠️ **Variável de ambiente obrigatória:** `BASE_URL` — deve apontar para a URL base da API a ser testada.

---

## 2. Tecnologias utilizadas
- **[k6](https://k6.io/)** – framework de performance em JavaScript para testes de carga.
- **Node.js** — para executar scripts de suporte, se necessário.
- **JavaScript (ES6+)** — escrever testes de carga de forma simples e modular.

---

## 3. Estrutura do repositório

```
/
├── tests/
│   ├── login.js         # Teste de carga da autenticação
│   ├── transactions.js  # Teste de carga do endpoint de transações
│   └── ...              # Outros cenários agrupados por funcionalidade
├── fixtures/            # Dados fictícios usados nos testes (JSON, CSV, etc.)
├── utils/               # Funções utilitárias reutilizáveis
└── README.md            # Este arquivo
└── helpers              # funcoes utilitarias reutilizaveis para interação com a API
└── config/              # Arquivos de configuração de variáveis de ambiente 
```

---

## 4. Objetivo de cada grupo de arquivos

- **`tests/`**: contém scripts k6 com diferentes cenários de carga.
- **`helpers/`**: funcoes utilitarias reutilizaveis para interação com a API.
- **`utils/`**: Funções utilitárias reutilizáveis
- **`config/`**: Arquivos de configuração de variáveis de ambiente
- **`fixtures`**: Dados fictícios usados nos testes (JSON, CSV, etc.)

---

## 5. Modo de instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/fabhid23/banco-api-performance.git
   cd banco-api-performance
   ```
2. Instale o k6, se ainda não tiver:
   - **Via Homebrew (macOS/Linux):** `brew install k6`
   - **Via pacotes (apt/yum):** veja https://k6.io/docs/getting-started/installation
   - **Via Chocolatey (Windows):** `choco install k6`

---

## 6. Modo de execução


1. Configure as variáveis de ambiente 
   Altere o arquivo `config.local.json` e defina a URL base da API a ser testada::
   ```json
   {
    "baseURL": "http://localhost:3000"
   }
   ```

2. Execute um teste específico:
   ```bash
   k6 run tests/login.js
   ```

3. Ou rode vários testes em sequência/pipeline conforme seu script ou CI.

---
Certifique-se de passar a variável de ambiente `BASE_URL`, caso não usado um `config.local.json` ou uma abordagem de carregamento automatico
 ```bash
   k6 run tests/login.js -e BASE_URL=http://localhost:3000
```

## 7. Acompanhamento do relatório em tempo real e exportação

Para visualizar o dashboard web e gerar relatório em HTML, use as variáveis do próprio k6:

```bash
K6_WEB_DASHBOARD=true \
K6_WEB_DASHBOARD_EXPORT=html-report.html \
k6 run tests/login.test.js \
-e BASE_URL=http://localhost:3000 

k6 run tests/login.js
```

- **`K6_WEB_DASHBOARD=true`** — habilita o dashboard interativo (http://localhost:6565).
- **`K6_WEB_DASHBOARD_EXPORT=html-report.html`** — ao final, gera relatório estático em HTML.

---

## 8. Observações finais & contribuições
Contribuições são bem-vindas! Sinta-se à vontade para propor novos cenários de teste ou otimizações. Não esqueça de:
- Criar novas entradas na pasta `tests/`;
- Incluir dados em `data/` se necessário;
- Adicionar documentação ou instruções no README.
