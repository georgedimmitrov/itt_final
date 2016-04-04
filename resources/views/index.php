<!doctype html>
<html>
    <head>
        <title>Time Tracker</title>
        <link rel="stylesheet" href="css/normalize.css">
        
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="css/jumbotron-narrow.css">
    </head>
    <body ng-app="myApp">
        <div ng-view></div>
    </body>

    <!-- Application Dependencies -->
    <script src="bower_components/jquery/dist/jquery.min.js"></script>
    <script type="text/javascript" src="bower_components/angular/angular.js"></script>
    <script type="text/javascript" src="bower_components/angular-bootstrap/ui-bootstrap-tpls.js"></script>
    <script type="text/javascript" src="bower_components/angular-resource/angular-resource.js"></script>
    <script type="text/javascript" src="bower_components/angular-route/angular-route.js"></script>
    <script type="text/javascript" src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>

    <!-- Application Scripts -->
    <script type="text/javascript" src="scripts/app.js"></script>
    <script type="text/javascript" src="scripts/controllers/UserCtrl.js"></script>
    <script type="text/javascript" src="scripts/services/user.js"></script>
</html>