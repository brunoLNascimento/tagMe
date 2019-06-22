# tagMe

introdução

A rede de restaurantes Coco Bambu possui um cardápio tão extenso que a equipe de cada unidade não tem conhecimento profundo sobre todos os itens do cardápio. Assim, a concepção desse projeto foi elaborar um site que seria executado em um tablet na cozinha para que as receitas pudessem ser consultadas e atualizadas com facilidade. Lembre-se: o site deve ser responsivo para funcionar em tablets (a partir de 768px de largura) e desktops.


Login

O sistema deve possuir um tela de login (arquivo "0 - Gestão-cozinha.jpg") que deve validar se o username e senha estão corretos. A validação pode ser feita diretamente no front-end para um par determinado de username e senha (ex.: testeusername / testesenha).


Lista de Receitas

Após o login, o usuário deve ser direcionado para a tela de lista de receitas (arquivo "1 - Gestão-cozinha.jpg"). Observe que essa tela inicialmente foi concebida para que cada receita gerasse diversos pedidos, mas, por simplicidade, essa tela deve apenas listar as receitas. Portanto, as informações relativas ao pedido não precisam ser exibidas (a mensagem "Prato Finalizado" e a bolinha cinza indicando o horário no qual o pedido foi feito).
A barra de busca por texto, localizada no cabeçalho, deve funcionar e a busca pode ser realizada diretamente com os dados já em memória no front-end.


Detalhes da Receita

Após clicar em "Ver receita", o usuário deve ser direcionado para a página de detalhes da receita (arquivo "2 - Gestão-cozinha1.jpg"). Essa página tem algumas interações básicas a serem desenvolvidas:
Ao abrir a tela, a única ação que o usuário deve realizar é selecionar os ingredientes. Caso ele tente clicar no botão "Iniciar preparação" antes de todos os ingredientes estarem marcados, ele deve receber um aviso em uma janela modal (arquivo "2 - Gestão-cozinha2.jpg");
Após marcar todos os ingredientes, a única ação que o usuário deve poder realizar é clicar no botão "Iniciar preparação";
Após iniciar a preparação, a única ação que o usuário deve poder realizar é marcar os passos no modo de preparo. Após todos os passos estarem marcados, o sistema deve exibir o botão "Finalizar";
Ao clicar no botão "Finalizar", o sistema deve exibir uma janela modal com o tempo decorrido durante a preparação (arquivo "3 - Gestão-cozinha2.jpg"), logo, o sistema deve armazenar em que momento a preparação foi iniciada para poder fazer este cálculo. Por simplicidade, esse estado não precisa ser armazenado caso o usuário volte para a lista de receitas, ou seja, caso o usuário saia dessa tela e volte, estará tudo como da primeira vez que a tela foi acessada.

