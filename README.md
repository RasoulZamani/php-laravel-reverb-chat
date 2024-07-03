# Laravel Reverb 

Example of using laravel reverb in a simple app.
for running the app after initialization and installing with composer run 4 terminal command:
```
php artisan reverb:start --debug
npm run dev
php artisan serve
php artisan queue:work
```
if you want to use redis as a queue stack, after spining it on, alter the env properly and then run worker: `php artisan queue:work redis`