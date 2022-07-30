<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable =[
<<<<<<< HEAD
        'make',
        'model',
        'user_id',
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
=======
        'user_id',
>>>>>>> 1c73118d9630515faec4605aaf6932bc8c166773
        'description',
        'title',
    ];
    use HasFactory;
}
