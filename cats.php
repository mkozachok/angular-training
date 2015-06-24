<?php

if ($_SERVER['REQUEST_METHOD'] == 'GET') { // add new cat
    
    readfile('catsdb.json');
    
} elseif ($_SERVER['REQUEST_METHOD'] == 'POST') { // add new cat
    

    $cats = json_decode(file_get_contents('catsdb.json'), true);
    
    $newcat = json_decode(file_get_contents("php://input"), true);
    
    $maxId = 0;
    foreach ($cats as $cat) {
        $maxId = max($maxId, $cat['id']);
    }
    $newId = $maxId + 1; 
    
    $newcat['id'] = $maxId + 1;
    $newcat['isViewed'] = false;
    $newcat['rating'] = 0;
    
    $cats[] = $newcat;
    $cats = json_encode($cats);
    
    //var_dump( $cats);
    
    // file_put_contents('catsdb.json', $cats);  //   return status from here
    
    echo 'server: OK';
    
    //readfile('catsdb.json');

}
