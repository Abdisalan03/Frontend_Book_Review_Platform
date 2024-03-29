import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink  } from "react-router-dom";
import logo from "../assets/logo.png";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { FiChevronDown } from "react-icons/fi";
import { BsHouses, BsHouseAdd } from "react-icons/bs";
import { IoLogOutOutline } from "react-icons/io5";
import { MdOutlineSendTimeExtension } from "react-icons/md";
import { LiaUserEditSolid, LiaUserAltSolid } from "react-icons/lia";
import { IoTrash } from "react-icons/io5";
import { useGetUserQuery } from "../Store/api/UserSlice";
import { Text, Avatar, Group, Menu } from "@mantine/core";
import { useUserInfo } from "../components/UserInfo";
import { RiHistoryFill } from "react-icons/ri";

function Header() {
  const { userInfo, handleLogout, handleDeleteUser } = useUserInfo();
  const { data: user = {} } = useGetUserQuery();

  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const [menu, setMenu] = useState(false);

  // header sticky function
  const stickyHeader = () => {
    if (headerRef.current) {
      if (
        document.body.scrollTop > 70 ||
        document.documentElement.scrollTop > 70
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    }
  };

  useEffect(() => {
    stickyHeader();

    // Cleanup function
    return () => {
      if (headerRef.current) {
        window.removeEventListener("scroll", stickyHeader);
      }
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="w-full h-[70px] leading-[70px] flex items-center"
    >
      <div className="container">
        <div className="flex justify-between items-center">
          {/* logo */}
          <Link to="/">
            <figure className="w-[8rem]">
              <img src={logo} alt="" className="w-full" />
            </figure>
          </Link>
          {/* nav links */}
          <div
            ref={menuRef}
            className={`menu ${menu === true ? "show_menu" : ""}`}
          >
            <ul className="flex flex-col md:flex-row md:items-center gap-0 md:gap-8 font-medium">
              <NavLink
                to="/"
                onClick={() => setMenu(!menu)}
                activeClassName="text-primaryColor"
                className="text-[20px] hover:text-primaryColor transition-colors text-primaryColor"
              >
                <li>Home</li>
              </NavLink>
              <Link
                to="/Books"
                onClick={() => setMenu(!menu)}
                className="text-[20px] hover:text-primaryColor transition-colors r"
              >
                <li>Books</li>
              </Link>

              {userInfo === null || userInfo === false ? (
                <>
                  <Link
                    to="/login"
                    className="pb-6 md:pb-0 text-[20px] hover:text-primaryColor transition-colors"
                    onClick={() => setMenu(!menu)}
                  >
                    <li>Login</li>
                  </Link>
                  <Link to="/SignUp" onClick={() => setMenu(!menu)}>
                    <button className="bg-primaryColor px-8 py-2 h-[44px] flex items-center justify-center rounded-3xl text-white duration-100 hover:scale-105">
                      Sign Up
                    </button>
                  </Link>
                </>
              ) : (
                <Menu
                  width={260}
                  position="bottom-end"
                  transitionProps={{ transition: "pop-top-right" }}
                  withinPortal
                >
                  <Menu.Target>
                    <Group gap={7} className="mt-4 md:mt-0 cursor-pointer">
                      <Avatar
                        src={user.avatar}
                        alt={user.name}
                        radius="xl"
                        size={40}
                      />
                      <Text fw={500} size="sm" lh={1} mr={3}>
                        {user.name}
                      </Text>
                      <FiChevronDown />
                    </Group>
                  </Menu.Target>
                  <Menu.Dropdown>
                    {user.role === "admin" && (
                      <>
                        <Link to="/AddBook" onClick={() => setMenu(!menu)}>
                          <Menu.Item leftSection={<BsHouseAdd />}>
                            Add Book
                          </Menu.Item>
                        </Link>
                        <Link to="/Books" onClick={() => setMenu(!menu)}>
                          <Menu.Item leftSection={<BsHouses />}>
                            Your Books
                          </Menu.Item>
                        </Link>
                      </>
                    )}
                    {user.role === "user" && (
                      <>
                        {/* <Link
                          to="/user_activity"
                          onClick={() => setMenu(!menu)}
                        >
                          <Menu.Item
                            leftSection={<MdOutlineSendTimeExtension />}
                          >
                            User activity
                          </Menu.Item>
                        </Link> */}
                        <Link to="/Books" onClick={() => setMenu(!menu)}>
                          <Menu.Item leftSection={<BsHouses />}>
                            Your Books
                          </Menu.Item>
                        </Link>
                      </>
                    )}

                    <Menu.Label>Settings</Menu.Label>
                    <Link
                      to={
                        user && user.name
                          ? `/profile/${user.name
                              .toLowerCase()
                              .split(" ")
                              .join("-")}`
                          : "/profile"
                      }
                      onClick={() => setMenu(!menu)}
                    >
                      <Menu.Item leftSection={<LiaUserAltSolid />}>
                        Profile
                      </Menu.Item>
                    </Link>
                    <Link to="/profile" onClick={() => setMenu(!menu)}>
                      <Menu.Item leftSection={<LiaUserEditSolid />}>
                        Edit Profile
                      </Menu.Item>
                    </Link>
                    <Menu.Item
                      leftSection={<IoLogOutOutline />}
                      onClick={handleLogout}
                    >
                      Logout
                    </Menu.Item>

                    <Menu.Divider />

                    <Menu.Label>Danger zone</Menu.Label>
                    <Menu.Item
                      color="red"
                      onClick={handleDeleteUser}
                      leftSection={<IoTrash />}
                    >
                      Delete account
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              )}
            </ul>
          </div>
          {/* menu toggle */}
          <div
            onClick={() => setMenu(!menu)}
            className="flex md:hidden bg-primaryColor w-[40px] h-[40px] items-center justify-center cursor-pointer text-white text-2xl rounded duration-100 hover:scale-105"
          >
            {!menu ? <FiMenu /> : <IoClose />}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
