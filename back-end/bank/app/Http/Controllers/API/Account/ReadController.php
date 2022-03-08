<?php

namespace App\Http\Controllers\API\Account;

use App\Http\Resources\Account\AccountResource;

class ReadController extends BaseController
{
    public function __invoke($user_id) {
        return $this->getAccountDecorator($user_id, function($account) {
            return new AccountResource($account);
        });
    }
}
