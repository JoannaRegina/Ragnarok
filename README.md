<h1 align="center">
  🎮 Ragnarok - Processo seletivo
</h1>
<p align="center">Projeto desenvolvido para o processo seletivo da empresa Primi Tecnologia.</p>

# Proposta
A Ragnarok vende jogos em vários shopping centers de São Paulo e verificou a
necessidade de exibir todas as informações dos seus produtos online e
disponibilizá-los para compra. Com isso, foi proposto o desafio de criar a plataforma web e mobile 
com a possibilidade de visualização dos jogos, a compra, e a visualização, no mapa, de lojas físicas 
com disponibilidade do produto selecionado.
A ideia da solução é que haja uma integração entre às duas plataformas, web e mobile, e tenha interação com Banco de Dados.

## 🎲 Instruções para o uso
É necessário ter instalado em sua máquina as seguintes ferramentas: <br/>
[Node.js](https://nodejs.org/en/) e [MySQL](https://www.mysql.com) - Servidor; <br/>
[ReactJs](https://pt-br.reactjs.org) - Web Site; <br/>
[Expo-cli](https://docs.expo.io/workflow/expo-cli/) - App mobile; <br/>
Para trabalhar com o código, é ideal um editor de texto. Minha sugestão -> [VSCode](https://code.visualstudio.com/).
Quando abrir os projetos no editor de texto, deverá ser executado o comando "npm install"

### Rodando o Back End (servidor)
- executar o backup do banco
- abrir o projeto no editor
- editar o arquivo de autenticação com os dados do seu banco
- rodar o comando 'node index.js' para iniciar o servidor

### Rodando o Web Site
- abrir o projeto no editor de texto, ou no prompt de comando do seu sistema operacional
- rodar o comando 'yarn start'

### Rodando o App mobile
O app foi testado apenas em smarthphone, utilizando o aplicativo "expo"
Antes de abrir o projeto, será necessário habilitar o acesso ao localHost, para o seu smartphone.
Segue a explicação de como isso pode ser feito:

- conecte seu smartphone ao computador via USB
(certifique-se de que a opção de depuração USB está ativada, em seu smartphone)
- [Siga este tutorial](https://medium.com/@neerajmoudgil/how-to-test-localhost-node-apis-on-android-device-253fcdd32c18)
- abrir o projeto no prompt de comando (certifique-se de estar em mode administrador)
- rodar o comando expo start para rodar o app
o projeto mobile pode ser aberto no browser do navegador, em um emulador, ou em seu próprio celular. 
Cada um possui suas limitações, portanto, o mais indicado é que seja aberto em seu próprio dispositivo.

  ##### Rodar no seu sipositivo
  - instalar o app 'Expo' em sua loja de aplicativos - 
  [Android - playStore](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR)
  [ios - AppStore](https://apps.apple.com/br/app/expo-client/id982107779).
  - scannear o código no browser
 
 #### informações sobre a api
O servidor está rodando em localhost:3333

Listagem dos jogos
Localhost:3333/games

Listagem de jogos por id
Localhost:3333/games/id/{id}

Listagem de jogos por plataforma
Localhost:3333/games/platform/{platform}

## 🛠️ Tecnologias

Para a construção desse projeto, foram utilizadas as seguintes ferramentas:

- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [React Native](https://reactnative.dev/)
- [Expo](https://docs.expo.io)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [MySQL](https://www.mysql.com)

# 👧🏻 Autor
Desenvolvido por <b>Joanna Regina<b>, 2020
