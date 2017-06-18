<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Model;

class User extends Authenticatable
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $table = 'users';

    protected $fillable = [
        'username', 'email', 'password', 'location', 'highscore'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];
}
    // public function highscore()
    // {
    //     return $this -> belongsTo('App\Score');
    // }

    // public function scores()
    // {
    //     return $this -> hasMany('App\Score', 'user_id');
    // }

    // public function shop_items()
    // {
    //     return $this -> belongsToMany('App\Shop_Item' , 'user_shop_items');
    // }


