import React, { useState } from 'react';
import { Select } from 'antd';
import { useTranslation } from 'react-i18next';

const { Option } = Select;

const Header = () => {
  const { t, i18n } = useTranslation();

  const [language, setLanguage] = useState('vi'); // Ngôn ngữ mặc định

  const [isMenuOpen, setIsMenuOpen] = useState(false); // Trạng thái menu

  const handleLanguageChange = (value) => {
    setLanguage(value);
    i18n.changeLanguage(value);
  };

  return (
    <header className="flex w-full justify-center items-center p-4 bg-primary text-black">
      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>
      {/* Menu Desktop */}
      <div className="flex w-[1280px] justify-end ">
        <nav className="hidden md:flex mr-8  gap-8">
          <a href="home" className="hover:text-accent">
            {t('home')}
          </a>
          <a href="company" className="hover:text-accent">
            {t('company')}
          </a>
          <a href="business" className="hover:text-accent">
            {t('business')}
          </a>
          <a href="blog" className="hover:text-accent">
            {t('blog')}
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Select
            defaultValue={language}
            onChange={handleLanguageChange}
            dropdownStyle={{
              width: 120,
              backgroundColor: '#A9BFA8',
              color: '#ffffff',         
            }}
            className="custom-select"
          >
            <Option value="vi">VN</Option>
            <Option value="en">EN</Option>
            <Option value="ja">JP</Option>
          </Select>
        </div>
      </div>


      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary p-4 absolute top-16 right-0 w-full">
          <nav className="flex flex-col gap-4">
            <a href="home" className="hover:text-accent">
              {t('home')}
            </a>
            <a href="company" className="hover:text-accent">
              {t('company')}
            </a>
            <a href="business" className="hover:text-accent">
              {t('business')}
            </a>
            <a href="blog" className="hover:text-accent">
              {t('blog')}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;