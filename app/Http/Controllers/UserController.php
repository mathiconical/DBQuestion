<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function login(Request $request)
    {
        return response()->json([
            'success' => true,
            'message' => 'logged in',
            'data' => $request->all(),
        ], 200);
    }
}
