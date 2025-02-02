<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('posts')->insert([
            [
                'title' => 'Post 1',
                'author' => 'Nguyễn Văn A',
                'date' => '2024-01-01',
                'content' => 'Phát triển website không chỉ là tạo ra một trang web đẹp, mà còn phải tối ưu hóa hiệu suất và tính năng. Trong bài viết này, chúng tôi sẽ chia sẻ những bí quyết để xây dựng một website hiệu quả...',
                'image' => 'https://res.cloudinary.com/dmwt6xlpf/image/upload/v1736061373/Web-developer_nrkiui.jpg',
                'link' => '/blog/post1'
            ],
            [
                'title' => 'Post 2',
                'author' => 'Trần Thị B',
                'date' => '2024-01-02',
                'content' => 'Ứng dụng di động tiếp tục phát triển mạnh mẽ trong năm 2024. Các xu hướng mới như trí tuệ nhân tạo (AI) và Internet of Things (IoT) đang thay đổi cách chúng ta sử dụng điện thoại. Hãy cùng khám phá 5 xu hướng đáng chú ý...',
                'image' => 'https://res.cloudinary.com/dmwt6xlpf/image/upload/v1736061377/AI_rqcpty.jpg',
                'link' => '/blog/post2'
            ],
            [
                'title' => 'Post 3',
                'author' => null,
                'date' => '2024-01-03',
                'content' => 'UI/UX design đóng một vai trò quan trọng trong việc phát triển phần mềm, giúp cải thiện trải nghiệm người dùng. Bài viết này sẽ làm rõ lý do tại sao việc tối ưu hóa giao diện người dùng lại là yếu tố không thể thiếu trong bất kỳ sản phẩm nào...',
                'image' => 'https://res.cloudinary.com/dmwt6xlpf/image/upload/v1736061373/UX-UI-design_owsqeg.jpg',
                'link' => '/blog/post3'
            ]
        ]);
    }
}
