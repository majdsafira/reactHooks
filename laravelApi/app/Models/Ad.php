<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ad extends Model
{
    protected $fillable =[
        'user_id', 
        'make',
        'model ',
        'registration_date',
        'milage',
        'condition',
        'image',
        'exterior_color',
        'interior_color',
        'transmission',
        'engine',
        'drive_train',
        'color',
        'description',
    ];
    // protected $table = ['ads'];

    use HasFactory;
}
