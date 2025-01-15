<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('admins', function (Blueprint $table) {
            $table->id(); // Tạo trường id tự động tăng
            $table->string('username')->unique(); // Tên đăng nhập
            $table->string('email')->unique(); // Email
            $table->string('password'); // Mật khẩu (hashed)
            $table->string('full_name')->nullable(); // Họ và tên đầy đủ
            $table->enum('role', ['superadmin', 'admin'])->default('admin'); // Vai trò quản trị viên
            $table->boolean('status')->default(1); // Trạng thái hoạt động (1 = active, 0 = inactive)
            $table->timestamp('last_login')->nullable(); // Ngày đăng nhập lần cuối
            $table->timestamps(); // Tự động thêm created_at và updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('admins');
    }
};
