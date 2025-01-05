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
            $table->id();  // Tạo trường id tự động
            $table->string('title');  // Tiêu đề bài viết
            $table->string('author')->nullable();  // Tác giả bài viết (có thể null)
            $table->date('date');  // Ngày viết bài
            $table->text('content');  // Nội dung bài viết
            $table->string('image');  // Đường dẫn hình ảnh
            $table->string('link');  // Liên kết đến bài viết
            $table->timestamps();  // Created_at và updated_at
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
