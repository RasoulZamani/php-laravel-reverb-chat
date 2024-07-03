<?php

namespace App\Http\Controllers;

use App\Models\Message;
use App\Events\MessageSent;
use Illuminate\Http\Request;

class ChatController extends Controller
{
    public function store(Request $request)
    {
        $message = $request->input('message');
        
        MessageSent::dispatch($message);//->delay(20);
        
        $createdMessage = Message::create([
            'message' => $message,
        ]);

        return response()->json(['success' => true, 'message' => 'Message sent and save successfully', 'data' => $message], 201);
    }
}