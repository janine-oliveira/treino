# 🍑 Treino

Aplicativo pessoal de treino em casa, desenvolvido com HTML, CSS e JavaScript puro.

## MVP atual

- Treino do dia
- Escolha básica baseada no histórico
- 6 exercícios iniciais
- Vídeos incorporados do YouTube
- Timer para exercícios por tempo
- Registro dos dias treinados
- Histórico
- Calendário
- Sequência de dias
- Exportação/importação JSON
- PWA
- Dados locais via `localStorage`

## Como testar

Não é recomendado abrir o `index.html` diretamente pelo `file://` para testar o PWA.

Uma forma simples é usar um servidor local.

Com Python:

```bash
python -m http.server 8000
```

Depois abra:

http://localhost:8000

## GitHub Pages

1. Crie um repositório no GitHub, por exemplo `treino`.
2. Envie todos os arquivos.
3. Vá em **Settings → Pages**.
4. Em Source, selecione **Deploy from a branch**.
5. Escolha `main` e `/root`.
6. Salve.
7. Aguarde a publicação.
8. Abra o endereço gerado pelo GitHub Pages.

## Dados

O histórico é salvo localmente no navegador:

`localStorage → treino.v1`

Não há login nem banco de dados externo neste MVP.

Use **Exportar** periodicamente para criar um backup.

## Próximas versões

- progressão individual por exercício
- séries/repetições persistidas
- RPE por exercício
- registro de dor
- bicicleta
- água
- creatina
- NTC
- fotos em IndexedDB
- melhores regras de recuperação
- ícones PWA
- instalação aprimorada
