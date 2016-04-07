<!doctype html>
<html ng-app="myApp">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Samaritans</title>
        <meta name="description" content="">
        <meta name="author" content="S.P. G.D.">
        <meta name="google-signin-client_id" content="301262529415-hqa5h289utdjudkh9e8pcfrdinhkuuto.apps.googleusercontent.com">

        <!-- <link rel="stylesheet" href="css/normalize.css"> -->
        <link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="css/app.css">
        <script src="https://apis.google.com/js/platform.js" async defer></script>
        <script>
            var baseUrl = "{{ url('/') }}/";
        </script>
    </head>

    <body ng-cloak>
        <div class="container" ng-controller="GlobalController">

            <div ng-view></div>

            <footer class="footer">
                <p>&copy; Siyana and Georgi's masterpiece</p>
            </footer>
        </div>

    </body>

    <!-- Application Dependencies -->
    <script src="bower_components/jquery/dist/jquery.min.js"></script>
    <script type="text/javascript" src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="bower_components/angular/angular.js"></script>
    <script type="text/javascript" src="bower_components/angular-bootstrap/ui-bootstrap-tpls.js"></script>
    <script type="text/javascript" src="bower_components/angular-resource/angular-resource.js"></script>
    <script type="text/javascript" src="bower_components/angular-route/angular-route.js"></script>
    <script type="text/javascript" src="bower_components/angular-cookies/angular-cookies.js"></script>


    <!-- Application Scripts -->
    <script type="text/javascript" src="scripts/app.js"></script>
    <!-- controllers -->
    <script type="text/javascript" src="scripts/controllers/GlobalController.js"></script>
    <script type="text/javascript" src="scripts/controllers/UserController.js"></script>
    <script type="text/javascript" src="scripts/controllers/RegistrationController.js"></script>

    <script type="text/javascript" src="scripts/controllers/NavController.js"></script>
    <!-- services and models -->
    <script type="text/javascript" src="scripts/models/userModel.js"></script>
    <script type="text/javascript" src="scripts/models/registerModel.js"></script>
</html>