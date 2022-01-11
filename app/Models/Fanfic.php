<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fanfic extends Model
{
    use HasFactory;

    protected $fillable = [
        'f_name', 
        'f_text', 
    ];
}
