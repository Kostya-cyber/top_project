<?php

namespace App\Http\Controllers\API\Account;

use Illuminate\Http\Request;
use App\Http\Resources\Account\AccountResource;
use Validator;

use App\Models\Account;

class CreateController extends BaseController
{
    private function valid($data) {
        return Validator::make($data, [
            'user_id' => 'required|integer|unique:accounts'
        ]);
    }

    public function __invoke(Request $request) {
        $validator = self::valid($request->all());
   
        if ($validator->fails()){
            return $this->sendError($validator->errors()->messages()['user_id'][0], 400);
        }

        $user_id = $validator->validate()['user_id'];

        return new AccountResource($this->accountService->createAccount($user_id));
    }
}