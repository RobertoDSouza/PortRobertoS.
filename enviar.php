<?php

if(isset($_POST['email']) && !empty($_POST['nome'])){

$nome=addcslashes($_POST['nome'])
$mail=addcslashes($_POST['email'])
$telefone=addcslashes($_POST['fone'])
$assunto=addcslashes($_POST['subgject'])
$mensagem =addcslashes($_POST['msg'])

$to = "robertofsd.souza@gmail.com";
$subject = "contato  Roberto Souza";
$body = "Nome : ".$nome "\r\n".
        "Email: " .$email. "\r\n".
        "Telefone: ".$fone. "\r\n".
        "Assunto: " .$subject."\r\n".
        "Mensagem: ".$msg. "\r\n";

$header = "From:robertosouzadev.com.br"."\r\n".
        "Reply-To:".$email. "\r\n".
        "X=Mailer:PHP/".phpversion();



if(mail($to,$subject,$body,$header)){
    echo("Email Enviado com Sucesso!");
}
 else{
    echo("Email não pode ser enviado.");
}

}


?>