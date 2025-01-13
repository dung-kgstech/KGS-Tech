import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Flag from "react-world-flags";
import { Link } from "react-router-dom";

const Header = ({ home, company, business, blog }) => {
  const { t, i18n } = useTranslation();

  const [language, setLanguage] = useState("vi"); // Ngôn ngữ mặc định
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Trạng thái menu

  const handleLanguageChange = (event) => {
    const value = event.target.value;
    setLanguage(value);
    i18n.changeLanguage(value);
  };

  return (
    <header className="flex w-full justify-center items-center p-4 text-white bg-transparent absolute top-0 z-50">
      <button
        className="md:hidden text-2xl"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* Menu Desktop */}
      <div className="flex w-[1280px] justify-end">
        <nav className="hidden font-beVietnam font-semibold md:flex mr-8 gap-8">
          <Link to="/" className="hover:text-accent">
            {t("Home")}
          </Link>
          <Link to="/company" className="hover:text-accent">
            {t("Company")}
          </Link>
          <Link to="/business" className="hover:text-accent">
            {t("Business")}
          </Link>
          <Link to="/blog" className="hover:text-accent">
            {t("Blog")}
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <select
            value={language}
            onChange={handleLanguageChange}
            className="px-2"
          >
            <option value="vi">
              <Flag code="VN" className="inline-block mr-2" />
              VN
            </option>
            <option value="en">
              <Flag code="US" className="inline-block mr-2" />
              EN
            </option>
            <option value="ja">
              <Flag code="JP" className="inline-block mr-2" />
              JP
            </option>
          </select>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white p-4 absolute top-16 right-0 w-full">
          <nav className="flex flex-col gap-4">
            <Link to="/" className="hover:text-accent">
              {t("Home")}
            </Link>
            <Link to="/company" className="hover:text-accent">
              {t("Company")}
            </Link>
            <Link to="/business" className="hover:text-accent">
              {t("Business")}
            </Link>
            <Link to="/blog" className="hover:text-accent">
              {t("Blog")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
