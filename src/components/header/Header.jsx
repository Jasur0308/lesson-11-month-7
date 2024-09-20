import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TbBrandGravatar } from "react-icons/tb";
import { Menu, Dropdown, Button, Input } from 'antd';
import { UserOutlined, SearchOutlined, MenuOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { useSearch } from '../search/SearchContext'; // Import the context

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const { token, profile } = useSelector(state => state.auth);
  const { setSearchQuery } = useSearch();

  // Define the menu for the Dropdown
  const menu = (
    <Menu>
      <Menu.Item key="profile">
        <Link to="/dashboard/profile">Profile</Link>
      </Menu.Item>
      <Menu.Item key="logout">
        <Link to="/logout">Logout</Link>
      </Menu.Item>
    </Menu>
  );

  if (pathname.includes("auth") || pathname.includes("dashboard")) return null;

  return (
    <header className="bg-gradient-to-r from-yellow-600 to-red-400 shadow-lg">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6 relative">
        {/* Mobile Menu Button */}
        <Button
          className="block lg:hidden"
          icon={<MenuOutlined />}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />

        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-4">
          <div className="flex items-center bg-white p-3 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300">
            <span className="font-bold text-3xl text-green-600">A</span>
            <div className="flex flex-col items-center ml-2">
              <span className="font-bold text-sm text-yellow-500">R</span>
              <TbBrandGravatar className="text-yellow-500 text-3xl" />
            </div>
            <span className="font-bold text-3xl text-lime-700 ml-2">J</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className={`flex space-x-8 text-white text-lg font-semibold ${isMenuOpen ? 'block' : 'hidden'} lg:flex`}>
          <li>
            <Link to="/" className="hover:text-yellow-300 hover:underline transition ease-in-out duration-200">
              Home
            </Link>
          </li>
          {token ? (
            <li>
              <Dropdown overlay={menu} trigger={['click']}>
                <Button icon={<UserOutlined />} className="hover:text-yellow-300 transition ease-in-out duration-200">
                  {profile?.profilePictureUrl ? (
                    <img
                      src={profile.profilePictureUrl}
                      alt="User Profile"
                      className="w-10 h-10 rounded-full border-2 border-white"
                    />
                  ) : (
                    <span>User</span>
                  )}
                </Button>
              </Dropdown>
            </li>
          ) : (
            <>
              <li>
                <Link to="auth/signUp" className="hover:text-yellow-300 hover:underline transition ease-in-out duration-200">
                  Register
                </Link>
              </li>
              <li>
                <Link to="auth/login" className="hover:text-yellow-300 hover:underline transition ease-in-out duration-200">
                  Login
                </Link>
              </li>
            </>
          )}
        </ul>

        {/* Search Bar */}
        <div className="hidden lg:flex items-center">
          <Input
            placeholder="Search..."
            prefix={<SearchOutlined />}
            onChange={(e) => setSearchQuery(e.target.value)} // Update the search query
            className="w-64"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;