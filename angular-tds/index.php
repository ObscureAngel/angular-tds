<!DOCTYPE html>
<html lang="fr" data-ng-app="NoteApp">

	<head>
		<title>Angular TDs</title>
		<meta http-equiv="content-type" content="text/html" charset="utf-8">
		<meta name="author" content="ObscureAngel">
		<link type="text/css" rel="stylesheet" href="css/bootstrap.min.css" />
		<link type="text/css" rel="stylesheet" href="css/style.css" />
		<script type="text/javascript" src="js/angular.min.js"></script>
		<script type="text/javascript" src="app/noteApp.js"></script>
		<script type="text/javascript" src="app/noteController.js"></script>
	</head>
	
	<body data-ng-controller="NoteController as noteCtrl">
		<div class="container">
			<form name="message">
				<label for="messageNote">Note :</label>
				<br>
				<textarea name="messageNote" id="messageNote" data-ng-model="messageNote"></textarea>
			</form>
			<span class="restant" >Nombre de carat&egrave;res restants : {{noteCtrl.caracRestant}}</span>
			<br>
			
			<div class="enregistre" data-ng-show="true">
				<span>Note enregistr&eacute;e</span>
			</div>
			
		</div>
	</body>

</html>