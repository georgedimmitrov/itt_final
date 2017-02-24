<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Score extends Model
{
    protected $table = 'scores';

    // public function users()
    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
