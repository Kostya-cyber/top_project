<?php

namespace App\Http\Controllers\API\Account;

use App\Http\Resources\Account\AccountResource;

class LockingController extends BaseController
{
    public function __invoke($user_id) {
        return $this->getAccountDecorator($user_id, function($account) {
            $this->accountService->block($account, true);
            return new AccountResource($account);
        });
    }
}