<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class AdFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'make' => $this->faker->name(),
            'model' => $this->faker->name(),
            'registration_date' => '2021',
            'milage'=> $this->faker->numberBetween(0,200000),
            'condition' => 'new|used',
            'image' => $this->faker->imageUrl(400, 300),
            'exterior_color' => 'black',
            'interior_color' => 'red',
            'transmission' => 'manual',
            'engine' => '1.4L',
           
            'description'=> $this->faker->text(200),
            'user_id' =>'1',
        ];
    }
}
