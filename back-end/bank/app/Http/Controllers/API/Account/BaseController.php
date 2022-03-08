<?php

namespace App\Http\Controllers\API\Account;

use App\Http\Controllers\Controller;
use App\Services\AccountService;
use App\Models\Account;

class BaseController extends Controller
{
    public $accountService;

    public function __construct(AccountService $accountService) {
        $this->accountService = $accountService;
    }

    public function sendError($message, $code) {
        return response([
            'status' => 'fail',
            'message' => $message
        ], $code);
    }

    protected function getAccountDecorator($user_id, $func) {
        $account = Account::where('user_id', '=', $user_id)->first();

        if (!$account) {
            return $this->sendError('Not found account', 404);
        }

        return $func($account);
    }
}