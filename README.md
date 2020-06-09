Primeiro foi apagado App.css, App.test.tsx, index.css, logo.svg,
serviceWorker.ts, setupTest.ts;
Todas as importações de tais arquivos também foram removidas;
Em App.ts, apagou-se o <header>
Em seguida, instalou-se a dep styled-components e o react-switch;
Uma pasta chamada _styles_ foi criada, onde todo o styled-components será incluído;
-> Dentro da pasta, um arquivo _global.ts_ foi criado;
Para as definições de TS funcionarem, é necessário instalar @types/styled-components com npm-install ou yarn;
Em _global.ts_ importa-se { createGlobalStyle } from styled-components;
-> Cria-se as estilizações CSS convencionais;
Em _src_ cria-se a pasta _components_;
-> Cria-se a pasta _Header_;
-> Dentro dela _index.tsx_ juntamente com _styles.ts_;
Escreve em _index.tsx_ todos os components e afins;
Em _styles.ts_ faz as devidas estilizações do Header;
Dentro da folder _styles_ cria _themes_;
-> Em _themes_ cria _light.ts_ e _dark.ts_;
-> Em _light.ts_ faz-se as devidas estilizações;
Importa _light.ts_ para _App.tsx_;
Importa _{ ThemeProvider }_ de _styled-components_ em _App.tsx_;
-> _{ ThemeProvider }_ envolve toda a <div> e recebe _theme_ como parâmetro;
-> _light_ é inserido como parametro em _theme_;
Para conseguir importar as propriedades do tema light, é preciso criar
um arquivo de definição de tipos, _styled.d.ts_,
que seja global e acessível para vários tipos de arquivos da aplicação;
Em _tsconfig.json_ é passada uma propriedade chamada _files_ que informa
os tipos de arquivos que serão carregados durante a compilação;
