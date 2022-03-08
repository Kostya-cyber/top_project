<?php

namespace App\Services;

use App\Models\Account;

class AccountService {

    public function createAccount($user_id) {
        $account = new Account;
        $account->user_id = $user_id;

        $account->save();

        return $account;
    }

    private function checkLockingDecorator($account, $func) {
        if ($account->is_blocked) {
            return 'Account is blocked';
        }

        return $func();
    }

    public function writeOff($account, $money) {
        return $this->checkLockingDecorator($account, function() use($account, $money) {
            if ($account->money >= $money) {
                $account->money = $account->money - $money;
                $account->save();
    
                return $account;
            } else {
                return 'Not enough money';
            }
        });
    }

    public function enrollment($account, $money) {
        return $this->checkLockingDecorator($account, function() use($account, $money) {
            $account->money = $account->money + $money;
            $account->save();
    
            return $account;
        });
    }

    public function block($account, $isBlocked) {
        $account->is_blocked = $isBlocked;
        $account->save();

        return $account;
    }
}
