## Gerador de Combinações para Lotofácil
Este projeto é um gerador de combinações para apostas na Lotofácil, uma loteria brasileira. Ele permite ao usuário gerar quatro jogos de 15 dezenas cada, baseados nas dezenas sorteadas no último concurso ou em dezenas informadas manualmente. O usuário tem a opção de definir dezenas fixas que vieram do último sorteio e dezenas fixas que não vieram do último sorteio, personalizando assim as combinações geradas.

## Como Funciona
# O projeto opera da seguinte maneira:

* O usuário escolhe se deseja usar as dezenas do último sorteio ou informar manualmente as dezenas.
* Se optar pelo último sorteio, o projeto faz uma requisição à API da Lotofácil para obter as dezenas sorteadas no último concurso.
* Se optar por informar manualmente, o usuário deve inserir exatamente 15 dezenas válidas (números entre 1 e 25, sem duplicatas).
* O usuário pode definir 3 dezenas fixas que vieram do último sorteio. Caso não defina, o sistema as escolherá aleatoriamente.
* O usuário pode definir 2 dezenas fixas que não vieram do último sorteio. Caso não defina, o sistema as escolherá aleatoriamente.
* O projeto gera quatro combinações de 15 dezenas cada, seguindo as regras de fixação e agrupamento.
* As combinações são exibidas na tela, com a opção de copiar cada uma delas.

## Requisitos
# Para rodar o projeto, você precisará de:

Node.js (versão 14 ou superior)
npm (versão 6 ou superior)
# Instalação
Siga os passos abaixo para configurar o projeto em sua máquina:

# Clone o repositório:
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

# Navegue até o diretório do projeto:
```bash
cd seu-repositorio
```
# Instale as dependências:
```bash
npm install
```

## Uso
# Para utilizar o projeto, siga estas instruções:

Inicie o servidor de desenvolvimento:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Abra o navegador e acesse http://localhost:3000.

Escolha uma das opções:

Usar as dezenas do último sorteio: Clique em "Obter Último Sorteio".
Informar manualmente: Insira as 15 dezenas no campo fornecido e clique em "Confirmar".
Defina as dezenas fixas, se desejar:

3 dezenas fixas sorteadas: Escolha entre as dezenas do último sorteio (opcional).
2 dezenas fixas não sorteadas: Escolha entre as dezenas restantes (opcional).
Caso não sejam definidas, o sistema escolherá aleatoriamente.
Clique em "Gerar Combinações" para criar os quatro jogos.

As combinações aparecerão na tela. Clique no botão "Copiar" ao lado de cada uma para copiar o texto.

Para começar de novo, clique em "Resetar".

## Créditos
Este projeto foi desenvolvido com base em um passo a passo detalhado fornecido pelo usuário. Agradecimentos especiais a ele por compartilhar as instruções que tornaram este projeto possível.