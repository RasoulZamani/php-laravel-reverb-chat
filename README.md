# Laravel Reverb 

Educational example of using laravel reverb in a simple chat app.
for running the app after initialization and installing with composer run 4 terminal command:
```
php artisan reverb:start --debug
npm run dev
php artisan serve
php artisan queue:work
```
if you want to use redis as a queue stack, after spining it on, alter the env properly and then run worker: `php artisan queue:work redis`

This example inspired by:
 https://aludvigsson.com/creating-a-real-time-chatroom-with-laravel-11-and-laravel-reverb/