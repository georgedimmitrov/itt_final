<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Undefined</title>
        <meta name="description" content="">
        <meta name="author" content="S.P. G.D.">
        
        <!-- <link rel="stylesheet" href="css/normalize.css"> -->
        <link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="css/app.css">
    </head>
    <body ng-app="myApp" ng-cloak>
        <div class="container">
        <div class="header clearfix">
            <nav>
                <ul class="nav nav-pills pull-right nav-blue">
                    <li role="presentation" class="active"><a href="/profile">My profile</a></li>
                    <li role="presentation"><a href="/auth/logout">Logout</a></li>
                </ul>
            </nav>
            <h3 class="text-muted"><a href="#/" style="color: #fff; text-decoration: none;">Undef</a></h3>
        </div>
        
        <div ng-view></div>
        
        <footer class="footer">
            <p>&copy; Siyana and Georgi's masterpiece</p>
        </footer>
    </div>

        
        <!-- <div ng-view></div> -->
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