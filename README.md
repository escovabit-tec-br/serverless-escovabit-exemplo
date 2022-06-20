# serverless-escovabit-exemplo

Projeto de exemplo para o post do site escovabit

## Plugins

Instalando os plugins

```bash
serverless plugin install -n serverless-domain-manager
serverless plugin install -n serverless-iam-roles-per-function
```

## Deploy

Para fazer deploy, passar os parametros: `aws-profile`, `stage`, `region`

```bash
serverless deploy --aws-profile escovabit --stage dev --region us-east-1
```
