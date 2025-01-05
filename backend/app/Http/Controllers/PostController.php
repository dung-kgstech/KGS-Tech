<?php

namespace App\Http\Controllers;

use App\Models\Post; // Import model Post
use Illuminate\Http\Request;

class PostController extends Controller
{
    // Phương thức index để lấy dữ liệu từ bảng posts
    public function index()
    {
        // Lấy tất cả bài viết từ bảng posts
        $posts = Post::all();

        // Trả về dữ liệu dưới dạng JSON
        return response()->json($posts);
    }
}
