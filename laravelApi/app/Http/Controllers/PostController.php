<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;

use function GuzzleHttp\Promise\all;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Post::paginate(5);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StorePostRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorePostRequest $request)
    {
<<<<<<< HEAD
        $request->validate([
            'make' => 'required',
            "user_id",
            'model',
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
=======
        $data = $request->validate([
            'user_id' => 'required',
            'description' => 'required',
            'title' => 'required',
            'image' => '',
>>>>>>> 1c73118d9630515faec4605aaf6932bc8c166773
            ]);

            Post::create($data);
            return response('created', 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post)
    {
        return Post::where('id',$post->id)->get();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatePostRequest  $request
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatePostRequest $request, Post $post)
    {
        $package = Post::find($post->id);
        $package->update($request->all());
        return response('updated', 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
        Post::destroy($post->id);
        return response('deleted', 204);
    }


    public function Allposts(){
        return Post::count();
    }
}
