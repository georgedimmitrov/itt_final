<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Shop_Item extends Model
{
    protected $table = 'shop_items';

    protected $fillable = [
        'name', 'photo_url', 'price', 'description'
    ];
}
