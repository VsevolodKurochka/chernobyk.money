<?php
	require_once 'vendor/connect.php';
	
	echo $twig->render('site/thx.twig', array(
		'name' => 'Vsevolod'
	));
?>