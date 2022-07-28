<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable =[
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
    use HasFactory;
}
