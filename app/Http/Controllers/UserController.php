<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|string|min:8|max:18',
        ]);

        $passwordValidation = $this->validatePasswordRules($request->password);

        if ($passwordValidation) {
            return response()->json([
                'success' => false,
                'message' => $passwordValidation,
            ], 400);
        }

        return response()->json([
            'success' => true,
            'message' => 'logged in',
            'data' => $request->all(),
        ], 200);
    }

    private function validatePasswordRules(string $password): string
    {
        $rules = [
            'passwordHaveAtLeastOneNumber' =>  ['regex' => '/.*\d.*/', 'message' => 'Password must have at least one number.'],
            'passwordHaveAtLeastOneSmallLetter' =>  ['regex' => '/.*[a-z].*/', 'message' => 'Password must have at least one lowercase letter.'],
            'passwordHaveAtLeastEightCharacters' =>  ['regex' => '/.{8,}/', 'message' => 'Password must have at least eight characters.'],
            'passwordHaveAtLeastOneSpecialCharacter' =>  ['regex' => '/.*[!@#$%^&*].*/', 'message' => 'Password must have at least one special character.'],
            'passwordHaveAtLeastOneCapitalLetter' =>  ['regex' => '/.*[A-Z].*/', 'message' => 'Password must have at least one capital letter.'],
        ];

        foreach ($rules as $rule) {
            if (!preg_match($rule['regex'], $password)) {
                return $rule['message'];
            }
        }

        return '';
    }
}
