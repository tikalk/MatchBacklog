<?php 
	$host = "db.host.com"; 
	$user = "db-username"; 
	$pass = "db-password"; 
	$database = "the-name-of-the-db"; 
	
	$linkID = mysql_connect($host, $user, $pass) or die("Could not connect to host."); 
	mysql_select_db($database, $linkID) or die("Could not find database."); 
	
	$sth = mysql_query("SELECT * FROM any-table");
	$rows = array();
	while($r = mysql_fetch_assoc($sth)) {
	   $rows[] = $r;
	}
	print json_encode($rows);
?>