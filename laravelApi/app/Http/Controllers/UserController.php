<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{

    public  function getInfo($id)
    {
        $data = User::find($id);
        return $data;
    }

    public function update(Request $request, $id)
    {

        // $newImageName = time() . '-' . $request->name . '.' . $request->image->extension();
        // $request->image->move(public_path('img'), $newImageName);

        $user = User::find($id);
        $user->name = $request->name;
        $user->email = $request->email;
        $user->phone = $request->phone;
        $user->image = $request->image;
        $user->password = Hash::make($request->password);

        $user->save();
    }

    public function registerAPI(Request $request)
    {

        $validator = Validator::make(
            $request->all(),
            [
                'name' => 'required|string',
                'email' => 'email|required|unique:users',
                'password' => 'required|min:8',
                'phone' => 'required|min:10|max:10',
                'image' => 'max:5048|required',
            ]
        );

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()->all()]);
        }


        // $newImageName = time() . '-' . $request->name . '.' . $request->image->extension();
        // $request->image->move(public_path('img'), $newImageName);

        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->phone = $request->phone;
        $user->image = $request->image;
        $user->password = Hash::make($request->input('password'));
        $user->save();

        return response($user, 201);
    }

    public function loginAPI(Request $request)
    {

        $validator = Validator::make(
            $request->all(),
            [
                'email' => 'email|required',
                'password' => 'required|min:8',
            ]
        );

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()->all()]);
        }

        $user = User::where('email', $request->input('email'))->first();

        if (!$user || !Hash::check($request->input('password'), $user->password)) {
            return response()->json([
                'errors' => ['Email or Password is incorrect']
            ]);
        }
        return response($user, 201);
    }

    public function getUser($id)
    {
        $user = User::find($id);
        return $user;
    }
}
