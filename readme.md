ItTalents final project with Laravel 5.2 and AngularJS 1.5.3

 -- -- -- -- -- -- 
 Installation guide
 -- -- -- -- -- --

Once you've downloaded our project you're only a couple of steps away from running it on your machine and they are..

1) Have a MySQL database (create database 'whatever'; and set it up in your .env file, more specifically the 

npm install;
composer install;

DB_DATABASE='whatever'
DB_USERNAME=your username
DB_PASSWORD=your password

php artisan key:generate
php artisan migrate

2) -optional step- You could choose to seed your database which will basically add a test user to it (it's a doge really) and in order to seed you simply need to type in php artisan db:seed from your project root folder

3) You should run 'php artisan serve' from the project root folder and go to localhost:8000 and if you've skipped step 2, you should register and login to play our game

![Alt text](/screenshots/Picture1.jpg?raw=true "Application Gameplay Screen")
![Alt text](/screenshots/Picture2.jpg?raw=true "Application Scoring Screen")
