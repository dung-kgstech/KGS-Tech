<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PostResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,  // Trả về ID bài viết
            'title' => $this->title,  // Trả về tiêu đề bài viết
            'author' => $this->author,  // Trả về tác giả bài viết
            'date' => $this->date,  // Trả về ngày viết bài
            'content' => $this->content,  // Trả về nội dung bài viết
            'image' => $this->image,  // Trả về đường dẫn hình ảnh
            'link' => $this->link,  // Trả về liên kết đến bài viết
        ];
    }
}
