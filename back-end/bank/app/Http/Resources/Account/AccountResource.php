<?php

namespace App\Http\Resources\Account;

use Illuminate\Http\Resources\Json\JsonResource;

class AccountResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'user_id' => $this->user_id,
            'money' => (int)$this->money,
            'is_blocked' => (bool)$this->is_blocked
        ];
    }

    public function with($request)
    {
        return [
            'status' => 'success'
        ];
    }
}
