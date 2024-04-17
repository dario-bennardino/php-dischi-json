<?php

//prendo il file json esterno e salvo come stringa il suo contenuto dentro una variabile
$json_string = file_get_contents('dischi.json');

//ricodifico la stringa trasformandola in un elemento PHP
$list = json_decode($json_string);

/* 
qui inserirò la logica di modifica / cancellazione dei dati


*/

//trasformo il file PHP come se fosse un file json

header('Content-Type: application/json');

//stampo la lista nuovamentetrasformata in stringa
echo json_encode($list);
