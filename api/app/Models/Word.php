<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Word extends Model
{
    use HasFactory;

    public function descriptions() 
    {
        return $this->hasMany(Description::class);
    }

    public function links()
    {
        return $this->hasMany(Link::class);
    }
}
