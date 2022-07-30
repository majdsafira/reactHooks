<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
<<<<<<< HEAD
            $table->string('make');
            $table->string('model');
            $table->string('registration_date');
            $table->string('milage');
            $table->string('condition');
            $table->string('exterior_color');
            $table->string('interior_color');
            $table->string('transmission');
            $table->string('engine');
            // $table->string('drive_train');
            $table->longText('image');
            // $table->string('color');
=======
            $table->string('title');
>>>>>>> 1c73118d9630515faec4605aaf6932bc8c166773
            $table->longText('description')->nullable();
            $table->longText('image')->nullable();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
}
