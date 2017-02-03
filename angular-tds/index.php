<!DOCTYPE html>
<html lang="fr" data-ng-app="NoteApp">

	<head>
		<title>Angular TDs</title>
		<meta http-equiv="content-type" content="text/html" charset="utf-8">
		<meta name="author" content="ObscureAngel">
		<link type="text/css" rel="stylesheet" href="css/bootstrap.min.css" />
		<link type="text/css" rel="stylesheet" href="css/style.css" />
		<script type="text/javascript" src="js/angular.min.js"></script>
		<script type="text/javascript" src="js/angular-cookies.min.js"></script>
		<script type="text/javascript" src="app/noteApp.js"></script>
		<script type="text/javascript" src="app/noteController.js"></script>
	</head>
	
	<body data-ng-controller="NoteController as noteCtrl">
		<div class="container">
			<form name="message" data-ng-submit="noteCtrl.addNote()">
				<label for="messageNote">Note :</label>
				<br>
				<textarea id="messageNote" data-ng-trim="false" maxlength="100" data-ng-model="noteCtrl.messageNote" data-ng-change="noteCtrl.count()">{{noteCtrl.messageNote}}</textarea>
			</form>
			<span class="restant" data-ng-model="noteCtrl.messageLength">Nombre de carat&egrave;res restants : {{noteCtrl.messageLength}}</span>
			<br>
			<button data-ng-click="noteCtrl.save()">Enregistrer</button>
			<div class="enregistre" data-ng-show="noteCtrl.status">
				<span>Note enregistr&eacute;e</span>
			</div>
			
		</div>
	</body>

</html>