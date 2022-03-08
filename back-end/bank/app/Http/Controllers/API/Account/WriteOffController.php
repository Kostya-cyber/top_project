<?php

namespace App\Http\Controllers\API\Account;

use Illuminate\Http\Request;
use App\Http\Resources\Account\AccountResource;

class WriteOffController extends EnrollmentController
{
    public function __invoke($user_id, Request $request) {
        return $this->getAccountDecorator($user_id, function($account) use($request) {
            return $this->validationDecorator($request->all(), function($money) use($account) {
                $data = $this->accountService->writeOff($account, $money);
            
                if (is_string($data)) {
                    return $this->sendError($data, 400);
                }
                
                return new AccountResource($data);
            });
        });
    }
}