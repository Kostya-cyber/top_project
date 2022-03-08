<?php

namespace App\Http\Controllers\API\Account;

use Illuminate\Http\Request;
use App\Http\Resources\Account\AccountResource;
use Validator;

class EnrollmentController extends BaseController
{
    protected function validationDecorator($data, $func) {
        $validator = Validator::make($data, [
            'money' => 'required|integer|min:0'
        ]);

        if ($validator->fails()){
            return $this->sendError($validator->errors()->messages()['money'][0], 400); 
        }

        return $func($validator->validate()['money']);
    }

    public function __invoke($user_id, Request $request) {
        return $this->getAccountDecorator($user_id, function($account) use($request) {
            return $this->validationDecorator($request->all(), function($money) use($account) {
                $data = $this->accountService->enrollment($account, $money);
            
                if (is_string($data)) {
                    return $this->sendError($data, 400);
                }
                
                return new AccountResource($data);
            });
        });
    }
}