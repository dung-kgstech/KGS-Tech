<?php

namespace App\Http\Controllers;
use App\Http\Resources\PostResource;
use App\Models\Post; 

class PostController extends Controller
{
    // Phương thức index để lấy dữ liệu từ bảng posts
    public function index()
    {
        $posts = Post::all();  
        return response()->json($posts, 200); 
    }

    public function show($id)
    {
        $post = Post::findOrFail($id);
        return new PostResource($post);  
    }
}
