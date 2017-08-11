<?php

namespace App\Http\Controllers;

use App\User;
use App\Filters\UserFilter;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Symfony\Component\HttpFoundation\Response;

class UsersController extends Controller
{
    public function index(UserFilter $filter)
    {
        return User::filter($filter)->paginate(10);
    }

    public function store()
    {
        $this->validate(request(), [
            'name' => 'required',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|confirmed|min:6',
            'sex' => 'required',
            'age' => 'required|integer|min:1',
            'birth' => 'required|date',
        ],[
            'name.required' => '昵称不能为空',
            'email.required' => '邮箱不能为空',
            'email.email' => '邮箱格式不正确',
            'email.unique' => '邮箱已存在',
            'password.required' => '密码不能为空',
            'password.confirmed' => '两次密码不一致',
            'password.min' => '密码不能低于6位',
            'sex.required' => '性别不能为空',
            'age.required' => '年龄不能为空',
            'age.min' => '年龄不能小于1',
            'birth.required' => '生日不能为空',
        ]);
        $data = array();
        $data = request()->all();
        $birth = request()->get('birth');
        date_default_timezone_set('PRC');
        $birth = strtotime($birth);
        $birth = date('Y-m-d H:i:s',$birth);
        $data['birth'] = $birth;
        User::create($data);

        return response()->json([
            'message' => 'Successful created'
        ]);
    }

    public function update(User $user)
    {
        $this->validate(request(), [
            'name' => 'sometimes|required',
            'email' => ['sometimes', 'required', 'email', Rule::unique('users')->ignore($user->id)],
            'sex' => 'sometimes|required',
            'age' => 'sometimes|required|integer|min:1',
            'birth' => 'sometimes|required|date',
            'address' => 'sometimes|required',
        ]);

        $user->fill(request()->all())->save();

        return response()->json([
            'message' => 'Successful edited'
        ]);
    }

    public function destroy(User $user)
    {
        $user->delete();

        return response()->json([
            'message' => 'The user has been successfully deleted'
        ], Response::HTTP_ACCEPTED);
    }
}
