import { React, useState } from "react";
import { CheckCircleOutlined } from '@ant-design/icons';
import { Helmet } from 'react-helmet';

const Value = () => {
    return (
        <div className="max-w-7xl p-10 mx-auto">
            <h3 className="text-3xl text-primary py-7 text-center  font-bold sm:text-4xl">Giá trị cốt lõi</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                <div className="text-center rounded-md bg-white p-5">
                    <img
                        src="https://res.cloudinary.com/dmwt6xlpf/image/upload/v1736318858/innovation-creativity-icon_tr9o7t.png"
                        alt="innovation-creativity-icon"
                        className="w-32 h-32 rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-xl font-semibold">Đổi mới sáng tạo</h3>
                    <p className="text-gray-500">
                        Chúng tôi không ngừng sáng tạo và đổi mới để mang đến những giải pháp công nghệ tiên tiến,
                        giúp giải quyết các vấn đề phức tạp trong thế giới hiện đại.
                        Mỗi sản phẩm và dịch vụ chúng tôi phát triển đều là kết quả bởi sự thúc đẩy bởi khát vọng đổi mới và sáng tạo.
                    </p>
                </div>

                <div className="text-center rounded-md bg-white p-5">
                    <img
                        src="https://res.cloudinary.com/dmwt6xlpf/image/upload/v1736319040/reward_icon_ctahxe.png"
                        alt="reward_icon"
                        className="w-32 h-32 rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-xl font-semibold">Chất lượng và Uy tín</h3>
                    <p className="text-gray-500">
                        Chúng tôi cam kết mang lại các sản phẩm, dịch vụ và trải nghiệm chất lượng cao nhất cho khách hàng.
                        Uy tín và sự tin cậy là nền tảng cho mọi quyết định và hành động của chúng tôi.
                        Chất lượng vượt trội luôn là tiêu chí hàng đầu trong mọi giai đoạn phát triển.
                    </p>
                </div>

                <div className="text-center rounded-md bg-white p-5">
                    <img
                        src="https://res.cloudinary.com/dmwt6xlpf/image/upload/v1736318625/cooperation_scgt0t.png"
                        alt="cooperation-icon"
                        className="w-32 h-32 rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-xl font-semibold">Tính bền vững và Trách nhiệm xã hội</h3>
                    <p className="text-gray-500">
                        Chúng tôi hướng tới việc phát triển công nghệ bền vững, có lợi cho môi trường và cộng đồng.
                        Mọi sáng kiến và giải pháp của chúng tôi đều chú trọng đến việc cải thiện chất lượng sống và bảo vệ tài nguyên thiên nhiên.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Value;

