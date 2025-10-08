<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    // Get-API
    public function get_api(){
        return response()->json(User::all());
    }

    // Delete-API
    public function delete_api($id){
        $user = User::find($id);
        if($user){
            $user->delete();
            return response()->json(['message' => 'User deleted successfully']);
        }else{
            return response()->json(['message' => 'User not found']);
        }
    }

    // Post-API
    public function post_api(Request $request){
        $user = User::create($request->all());
        return response()->json(['message' => 'User created successfully']);
    }

    // Put-API
    public function put_api(Request $request, $id){
        $user = User::find($id);
        if($user){
            $user->update($request->all());
            return response()->json(['message' => 'User updated successfully']);
        }
    }
}
