<?php

//prendo il file json esterno e salvo come stringa il suo contenuto dentro una variabile
$json_string = file_get_contents('dischi.json');

//ricodifico la stringa trasformandola in un elemento PHP
$list = json_decode($json_string, true);

/* 
qui inserirò la logica di modifica / cancellazione dei dati
1. verifico che esistano in POST le variabili
2. se esistono aggiungo un nuovo Disco alla lista e poi aggiorno il file dischi.json con la lista decodificata in testo
*/

if (isset($_POST['newDiskTitle'], $_POST['newDiskAuthor'], $_POST['newDiskYear'], $_POST['newDiskPoster'], $_POST['newDiskGenre'])) {
    //se esistono le variabili allora procedo 

    $new_album = [
        'title' => $_POST['newDiskTitle'],
        'author' => $_POST['newDiskAuthor'],
        'year' => $_POST['newDiskYear'],
        'poster' => $_POST['newDiskPoster'],
        'genre' => $_POST['newDiskGenre']
    ];

    $list[] = $new_album;
    file_put_contents('dischi.json', json_encode($list));
}

//se mi arriva in POST indexToDelete elimino il disco all'indice e aggiorno i dati sempre
if (isset($_POST['indexToDelete'])) {
    $indexToDelete = $_POST['indexToDelete'];
    array_splice($list, $indexToDelete, 1);
    file_put_contents('dischi.json', json_encode($list));
}

//trasformo il file PHP come se fosse un file json
header('Content-Type: application/json');

//stampo la lista nuovamente trasformata in stringa
echo json_encode($list);
