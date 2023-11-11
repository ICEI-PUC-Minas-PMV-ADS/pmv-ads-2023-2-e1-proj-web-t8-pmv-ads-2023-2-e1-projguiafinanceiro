# Plano de Testes de Software

O processo de teste de software é fundamental para garantir a qualidade e a eficiência de uma aplicação. Este plano de testes detalha os cenários de teste a serem utilizados durante a avaliação da aplicação, demonstrando como os requisitos estão sendo atendidos. Os testes funcionais são especialmente cruciais para validar se a aplicação atende às expectativas estabelecidas, assegurando que ela funcione conforme o esperado.

|Caso de Teste    | CT-01 - Validar funcionamento do cadastro de usuários |
|:---|:---|
| Requisitos Associados | RF-01 |
| Objetivo do Teste | Assegurar que o sistema permite o registro adequado de novos usuários. |
| Passos | <ul><li>Acesse a página de registro.</li><li>Preencha corretamente todos os campos obrigatórios.</li><li>Envie o formulário de registro.</li><li>Verifique se o novo usuário é criado com sucesso.</li></ul>|
| Critérios de êxito | <ul><li>O novo usuário é registrado com sucesso.</li><li>O sistema valida os dados corretamente e impede o registro se houver informações ausentes ou inválidas.</li></ul>|
| Responsável pela elaborar do caso de Teste | Víctor |

|Caso de Teste    | CT-02 - Cadastro de Novo Usuário |
|:---|:---|
| Requisitos Associados | RF-02 |
| Objetivo do Teste | Verificar se o sistema permite o acesso correto dos usuários. |
| Passos | <ul><li>Acesse a página de login.</li><li>Insira um nome de usuário válido e uma senha correta.</li><li>Confirme se o login é bem-sucedido.</li><li>Repita o processo utilizando credenciais inválidas e verifique se o sistema impede o acesso.</li></ul>|
| Critérios de êxito | <ul><li>O acesso é permitido com credenciais válidas.</li><li>O acesso é negado com credenciais inválidas.</li></ul>|
| Responsável pela elaborar do caso de Teste | Víctor |

|Caso de Teste    | CT-03 - Exibição de Vídeos do YouTube |
|:---|:---|
| Requisitos Associados | RF-05 |
| Objetivo do Teste | Verificar se a página exibe corretamente vídeos do YouTube relacionados à educação financeira. |
| Passos | <ul><li> Acesse a página "Dicas".<br> <li>Aguarde a exibição dos vídeos do YouTube na seção apropriada.<br> <li>Verifique se há pelo menos um vídeo visível.<br> <li>Clique em um vídeo para garantir que ele reproduza corretamente.<br><li>Confira se o título do vídeo é exibido corretamente.</li></ul>|
| Critérios de êxito | <ul><li> Vídeos do YouTube são exibidos corretamente.<br> <li>Pelo menos um vídeo está visível.<br> <li>O vídeo reproduz quando clicado.<br> <li>O título do vídeo é exibido corretamente.</li></ul>|
| Responsável pela elaborar do caso de Teste | Israel Moreira |

|Caso de Teste    | CT-04 - CT-03 - Limite de Busca da API Excedido |
|:---|:---|
| Requisitos Associados | RF-05 |
| Objetivo do Teste | Verificar se a página trata corretamente o limite de busca da API do YouTube excedido. |
| Passos | <ul><li> Acesse a página "Dicas".<br> <li>Simule um limite de busca excedido na API do YouTube (status 403).<br> <li>Verifique se a mensagem "Limite de busca da API excedido" é exibida na seção de vídeos.<br></ul>|
| Critérios de êxito | <ul><li> A mensagem "Limite de busca da API excedido" é exibida corretamente quando o limite é atingido.</ul>|
| Responsável pela elaborar do caso de Teste | Israel Moreira |

