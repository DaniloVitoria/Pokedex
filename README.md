Neste projeto consumo o PokéAPI


git reset : usado para desfazer mudança depois que o commit foi commitado
o git reset move os ponteiros HEAD e do branch atual para um estado especificado.
Ele também pode modificar os 3 estado do git;

as principais aplicações do git reset são:

Descartar commits em um branch privado.
Desfazer alterações não comitadas, tembém uma branch privado.
tirar arquivos da área de stage.

Síntaxe:

git reset[modo][arquivo ou commit]

Importante: Para descartar commits em uma branch pública usa o comando git revert, já para descartar alterações no histórioco de trabalho o git checkout é melhor.


o git reset pode causar perda de dados em um repositório público.

Modos do git reset
--soft
--mixed(padrão)
--hard

modos adicionais do git:

--merge
--keep

Explicação:
o modo --soft: Ele apenas muda o HEAD para um commit especifico, além de kudar todos os arquvios para o estado "Changes to be commited" (é modo seguro).

--mixed: reseo índice mas não o diretorio de trabalho e relata o que não foi atualizado, tira o que está no  stage e não toca no diretório de trabalho.

--hard: reseta o índice e a árvore de trabalho, Quaisquer mudan~ças rastreados na árvore de trabalho desde o  commit são descartados. Descarta O que está no stage area, o que não está, e atualiza o diretório de trabalho (Não é modo seguro).


--merge e --keep pesquisar pois é importante e trabalha com repositórios remotos.

git reset X git revert


