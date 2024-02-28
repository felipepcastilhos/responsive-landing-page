# HTML

- Fazer linha código link com referência css
- Class para agrupar como se fossem dois ou mais elementos de mesmo id
- Posso por quantas classes quiser em uma tag
- tags/caixas/nodes/pai/filho
- Para importar imagem sem ser por href online, coloco o download na pasta assets>pics e uso codigo href"assets/pics/namephoto.jpg"
- API Swiper e API Whatsapp
- Biblioteca scrollrevealjs, SEMPRE buscar documentação sites oficiais sobre bibliotecas, APIs, fazer os links se for o caso o script no final do HTML ou link no head
- Padrão kebab-case com um hifen-dash substituindo os espaços entre as palavras

# CSS

- Responsivo:

  - Relative units: rem (root element) - recomendado para sites responsivos
    Mobile First Design Approach/
  - Static units: pixel
  - Propriedade transition para adicionar delay ao invés de 0/1
  - Para verificar o tamanho de algo direto na página final, inspecionar elemento sobre o bloco, ir na aba "Computed" na parte de CSS, rolar pra baixo no campo filter: "font-size"

- Seletor de classe:

  - ".logo"

- Estratégia das variáveis juntamente com o pack de icones permitem a alteração de todas as cores apenas alterando uma variável
- Pack de ícones:

  - Posso exportar quando for fixo o ícone nunca alterar se não, outline strokes
  - React icons mostra diversos nomes de pacotes de ícones (feather)
  - Quando for alterar de cor, utilizar como HTML/CSS (iconfinder.com pega por SVG)
  - Download SVG de algum site > no icomoon.io/app altera Untiteled > load > import icons > altera pra 24 > em cima seleciona o lapis pra editar e remover cores > direita inferior: generate font > download > extrai na pasta asstes do projeto

- Fontes:
  - Acessar fonts.google.com
  - Filtra pelo nome > seleciona
  - Get embaded code > cola link no .HTML

-Media Queries:(responsável por adicionar pontos de quebra)- Breakpoints; - F12 > "Toggle Device Toolbar" > Dimensions Responsive, tenho opções para outros dispositivos; - Poderia ter atribuido variáveis para o tamanho das fontes também para facilitar ajustes entre dispositivos

# js

- Objetos podem ter funções além de propriedades, sendo assim, objeto "const pessoa = { correr: function(parametro/argumento) {}}", > para chamar função: pessoa.correr(parametro)
- F12 > Console é muito importante aprender a identificar e corrigir o erro por ali
- Posso através do F12 > console por exemplo copiar "document.querySelector('#header nav')" e colar que está sendo atribuido a variavel nav para verificar o que ela esta recebendo
- Funções construtoras padrão PascalCase começam com letra maiúscula
- Padrão camelCase, começa com letra minúscula e a cada nova palavra primeira Maiúscula para escritas de variáveis no js ou funções como propriedades de un objeto
