<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Http\Requests\StoreCommentRequest;
use App\Http\Requests\UpdateCommentRequest;

class CommentController extends Controller
{
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Comment::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreCommentRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCommentRequest $request)
    {
        $request->validate([
            'user_id' => 'required',
            'comment',
            'post_id',
            ]);
            return Comment::create($request->all());
            // return response('created', 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function show(Comment $comment)
    {
        return Comment::where('id',$comment->id)->get();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateCommentRequest  $request
     * @param  \App\Models\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCommentRequest $request, Comment $comment)
    {
        $package = Comment::find($comment->id);
        $package->update($request->all());
        return response('updated', 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function destroy(Comment $comment)
    {
        Comment::destroy($comment->id);
        return response('deleted', 204);
    }

    public function getComments($post)
    {
        return Comment::join('users', 'comments.user_id', '=', 'users.id')->where('post_id',$post)->orderBy('comments.created_at', 'desc')->select('users.name','users.image', 'comments.*')->paginate(5);
    }

    public function getAllComments($post)
    {
        return Comment::where('post_id',$post)->count();
    }
}
