# :snake: Criando o venv (Virtual Environment) do Python

### O que é o Virtual Environment (Ambiente Virtual)?
O virtual environment (ou ambiente virtual) do Python é uma ferramenta que **permite criar ambientes isolados para projetos**, garantindo que cada um tenha suas próprias dependências e versões de pacotes, semelhante ao que a pasta `node_modules` do NodeJS faz. Isso evita conflitos entre bibliotecas e facilita a gestão de diferentes projetos que podem exigir versões distintas de pacotes. Ao **ativar** um ambiente virtual, o usuário pode **instalar e gerenciar pacotes** sem afetar a instalação global do Python no sistema.

Cada Ambiente Virtual possui seu próprio interpretador Python e bibliotecas, o que significa que as mudanças feitas em um ambiente não vão impactar em nenhum outro. Dessa maneira é possível trabalhar em diferentes projetos com diferentes versões da mesma biblioteca, além de criar um ambiente de trabalho limpo, fácil de gerenciar e evitando o tão temido "[dependency hell](https://en.wikipedia.org/wiki/Dependency_hell)" em que conflitos de dependências poderiam sugir.

### Pré-requisitos
Para entender completamente este tutorial, primeiro você deve:

- Conhecimento básico sobre programação em Python.
- Familiaridade com Interface de Linha de Comandos (CLI - Command-Line Interface).
- Python 3.3 ou mais recente instalado.

### Como criar um Ambiente Virtual?
Com o Python e o pip instalados, basta rodar o seguinte comando no terminal para criar o ambiente virtual:

```bash
python -m venv .venv
```

- **-m**: executa um módulo de biblioteca como um script
- **venv**: o módulo que será executado para a criação do ambiente virtual
- **.venv**: nome da pasta em que será armazenada o ambiente virtual. Pode ser alterada para qualquer outro nome adequado, mas geralmente esse é o padrão

> [!INFO]
> Vale ressaltar que em alguns casos pode ser que a versão específica do Python deve ser usada. Atualmente a versão é Python 3, portanto o comando ficaria `python3 -m venv .venv`.

> [!WARNING] AVISO
> A ferramenta de criação de Ambientes Virtuais `venv` só está disponível a partir da versão 3.3 do Python. Em versões mais antigas pode ser necessário instalar o pacote `virtualenv`.

### Como ativar o ambiente virtual?
Diferente do `node_modules`, em que basta rodar os comandos na pasta raíz do projeto, o `venv` precisa ser ativado para ser usado. Dentro da pasta do `venv`, existe a pasta **bin** e dentro dela estarão armazenados os scripts instalados, inclusive o script de ativação. Dentro da pasta **bin** (no meu caso o caminho seria `.venv/bin/`,  ou `.venv\Scripts\` no caso do windows) rode o seguinte comando:

#### No linux:

```bash
source .venv/bin/activate
```

#### No windows:

```powershell
.venv\Scripts\activate.bat
```

O resultado deve ficar semelhante ao seguinte:

![](/images/tutoriais/terminal-rodando-venv-python.png)

### Utilizando o Ambiente Virtual
Após ativado, basta gerenciar as bibliotecas normalmente utilizando o gerenciador de pacotes `pip`:

```bash
python -m pip install <package-name>
# ou
pip install <package-name>
```

### Como desativar o Ambiente Virtual?
Para desativar o ambiente virtual, basta rodar o seguinte comando:

```bash
deactivate
```

### Alternativas
Existem outras opções de pacotes que podem criar ambientes isolados com algumas features a mais que podem ser úteis em determinados casos. Por exemplo:

- **Pipenv**: Combina `pip` e `venv`, permitindo criar e gerenciar um ambiente virtual adicionando e removendo pacotes ao seu `Pipfile`.
- **Conda**: Um gerenciador de pacotes para diferentes linguagens, não somente limitado ao Python. Especialmente útil para ciência de dados, em que múltiplas linguagens de programação são utilizadas.

### Referências

- https://www.freecodecamp.org/news/how-to-setup-virtual-environments-in-python/
- https://blog.stackademic.com/python-virtual-environments-for-dummies-dfa1605cae69
- https://www.dataquest.io/blog/a-complete-guide-to-python-virtual-environments/
- https://www.geeksforgeeks.org/python-virtual-environment/