<?php

namespace App\Http\Controllers;

use App\Models\Ad;
use App\Http\Requests\StoreAdRequest;
use App\Http\Requests\UpdateAdRequest;

class AdController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Ad::all();
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreAdRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreAdRequest $request)
    {
        // $request->validate([
        //     'user_id'=> 'required',
        //     'make' => 'required',
        //     'model' => 'required',
        //     'model',
        //     'registration_date',
        //     'milage',
        //     'condition',
        //     'image',
        //     'exterior_color',
        //     'interior_color',
        //     'transmission',
        //     'engine',
        //     'description',
        //     ]);
            $ad = new Ad;
            $ad->user_id = $request->user_id;
            $ad->make = $request->make;
            $ad->price = $request->price;
            $ad->model = $request->model;
            $ad->registration_date = $request->registration_date;
            $ad->milage = $request->milage;
            $ad->condition = $request->condition;
        if ($request->has('image')) {

            $image = $request->file('image');
            $filename = time() . '.' . $image->getClientOriginalExtension();
            // $destinationPath = public_path('/img');
            $image->move('img', $filename);

        }
            $ad->exterior_color = $request->exterior_color;
            $ad->interior_color = $request->interior_color;
            $ad->transmission = $request->transmission;
            $ad->engine = $request->engine;
            $ad->description = $request->description;
            $ad->save();


            // Ad::create($request->all());
            return response('created', 201);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Ad  $ad
     * @return \Illuminate\Http\Response
     */
    public function show(Ad $ad)
    {
        return Ad::where('id',$ad->id)->get();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateAdRequest  $request
     * @param  \App\Models\Ad  $ad
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateAdRequest $request, Ad $ad)
    {
        $package = Ad::find($ad->id);
        $package->update($request->all());
        return response('updated', 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Ad  $ad
     * @return \Illuminate\Http\Response
     */
    public function destroy(Ad $ad)
    {
        Ad::destroy($ad->id);
        return response('deleted', 204);
    }
}
