<h1>COMANDOS TERMINAL</h1>

    git init: inicializa um novo repositório local vazio.
    git clone (+url): clona/baixa um repositório do servidor (remoto) no seu computador (local).
    git status: fornece todas as informações da branch. Nela conseguimos ver os arquivos que estão na/no
   
      Stage: é onde adicionamos os arquivos que sofreram modificaçãoes e que estão preparados para serem registrados no
      controle de versão.
      Not Stage: é onde são listados os arquivos que sofreram alterações mas ainda não adicionamos na área de preparação.
   
    git add (arquivo): adiciona o arquivo na área de preparação (stage).
    git add .: adiciona todos os arquivos na área de preparação (stage).
    git reset: remove um ou mais arquivos da área de preparação (stage) voltando para o Not Stage.
    git commit: cria um registro (marco) na história do nosso projeto.
      git commit -m "exemplo"
    git remote add origin (+url): vincula o repositório local a um repositório remoto.
    git push (url): envia todas as alterações do repositório local para o repositório remoto.
      git push -u origin (branch)
    git pull: baixa todas as alterações do repositório remoto para o repositório local.
      git pull origin (branch)
    git checkout: permite a navegação entre as branchs existentes e também possibilita a criação de novas.
    git checkout -b (branch): vai criar essa branch.
    git checkout (branch): vai para essa branch.
    
   
    dir: lista de diretórios (pastas)
    dir nome do diretório: lista o que tem dentro
    mkdir nome do diretório: cria um diretório
    rmdir nome do diretório: apaga o diretório
    rm nome do arquivo: apaga o arquivo

   
    cd nome do diretório: acessa o diretório
    cd ..: sai do diretório
    cd pasta1\pasta2: passa direto para a pasta 2 sem entrar na 1
    cls: limpa o terminal
    code .: entra no vs code (com o diretório que estou no terminal)
    echo >> nome do arquivo: cria um arquivo

    node nome da pasta nome do arquivo: mostra o que tem no arquivo
    node (nome do arquivo): vai imprimir no terminal o que está no arquivo
   
         ctrl + shift + p: atalho de comando
         ctrl + s: salvar
         ctrl + ,: configurações
         ctrl + shift + ': novo terminal
         ctrl + ;: comentarios
   
         tab: completa o nome
