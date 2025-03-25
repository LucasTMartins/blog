# :earth_americas: Mundano
___
![](/images/projetos/CapaMundano.png)

Falei de forma resumida um pouco do que é o projeto e o que espero que ele se torne no futuro. Algumas coisas podem mudar aqui e alí, mas manterei sempre o mais atualizado possível.

### :bulb: Qual o conceito do software?
Mundano é um software de construção de mundos (world building) focado em escritores criativos que visa a facilidade de criar e organizar mundos, culturas e locais de uma narrativa. Apesar do público-alvo serem escritores criativos, todo tipo de narrativa fica melhor com uma construção de mundo bem planejada. Pode ser usado na criação de jogos, livros, campanhas de RPG de mesa, filmes, etc.

### :warning: Por que existiria um software assim?
De modo geral, quando se escreve uma história, um dos maiores desafios é que manter a coerência do início ao fim. Da mesma maneira que o mundo real é regido por leis da física, mundos fictícios seguem as leis que os autores criarem. Essas leis devem ser bem explicadas e mantidas durante toda a narrativa para a construção de um mundo mais imersivo. Quando o leitor ou telespectador percebe um furo nessa construção de mundo, toda imersão criada é quebrada.

O escritor deve evitar isso ao máximo. Todo autor quer prender a atenção do leitor e manter sua mente curiosa. Questões sobre seu mundo precisam de respostas. Não uma resposta barata, inventada na hora, mas uma resposta planejada e com sentido. É isso que um mundo bem construído proporciona. A imersão de poder questionar sobre esse mundo sabendo que provavelmente existe uma resposta plausível.

### :star: Quais são as funções que solucionarão esses problemas?
Primeiramente o foco é em ser intuitivo e fácil de entender. Os cenários, personagens e objetos serão armazenados em arquivos que armazenarão suas propriedades. Essas propriedades serão totalmente customizadas pelo escritor, mas podem ser salvas como template para facilitar a criação de outros personagens, cenários ou objetos no futuro.

Com as propriedades criadas, é o momento de explorar as ferramentas principais. Será possível analisar quais as relações dos personagens entre si através de grafos. A linha de acontecimentos é onde será possível analisar a ordem narrativa e cronológica dos acontecimentos da história, evitando furos de roteiro. A ferramenta de notas rápidas ajuda a armazenar textos curtos com ideias ou conceitos que serão trabalhados posteriormente.

### :arrows_counterclockwise: Atualmente quais são as alternativas no mercado?
Pelas minhas pesquisas, alguns escritores decidem usar softwares de organização, como Notion ou Obsidian, enquanto outros preferem usar apenas arquivos de texto bem organizados. O que me chamou atenção é que uma pequena parte usa softwares de Wiki para organizar, como Dokuwiki ou Bookstack. A navegação simples da Wiki faz com que seja muito fácil achar tudo em qualquer momento. Posteriormente espero adicionar uma função semelhante ao Mundano, mas sem previsão ainda.

É um pouco surpreendente não haver um software focado especificamente em construção de mundo atualmente. Existem focados em mapas para RPG, ou organização, mas nada como o Mundano.

### :moneybag: Qual seria o modelo de negócio?
A principal forma de monetização será pela venda de grandes atualizações. Atualizações pequenas de correção de bugs e segurança serão gratuitas para todos os usuários. Além disso também será cobrado pela sincronização de projetos na nuvem (opcional) para backup de projetos.

### :computer: Quais as tecnologias usadas e por quê?
Aqui entramos em um assunto um pouco mais técnico: as tecnologias. Em geral tentei não usar mais do que eu precisava, já que é um projeto de uma pessoa só e não é dos mais fáceis.

Para o front-end foquei na React com ShadCN para componentização, enquanto TailwindCSS foi usado na estilização. A escolha de React foi tanto por ter muito conteúdo disponível, como a flexibilidade que ela proporciona. E juntando com ShadCN e TailwindCSS é fácil criar e modificar componentes altamente customizáveis. Com isso, toda a interface do Mundano segue um padrão de design fixo que combina bastante.

No back-end optei por usar Python com Django para criar uma API robusta e ao mesmo tempo escalável. Com a quantidade de bibliotecas que o Python oferece, é fácil conseguir algo útil para o projeto. Como por exemplo a criação dos grafos ou a integração com o banco de dados, que abordarei no parágrafo seguinte.

O banco de dados escolhido foi MongoDB, já que um projeto exige dados bem flexiveis e não relacionados. O MongoDB também é referencia em quesito velocidade de escrita e leitura, então foi a escolha ideal para o projeto.