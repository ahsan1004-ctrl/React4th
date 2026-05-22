import React from 'react'
import { Link } from 'react-router-dom'
import { HomeOutlined, LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Dropdown, Space } from 'antd';
import { useAuth } from '../../context/Auth';

const Navbar = () => {
  const { handleLogout, isAuth } = useAuth()

  // FIXED: Simplified the items array to follow Ant Design menu rules
  const items = [
    {
      key: '1',
      label: <Link to='/dashboard' className='nav-link'>Profile</Link>,
      icon: <UserOutlined />,
    },
    {
      key: '2',
      label: <Link to='/' className='nav-link'>Settings</Link>,
      icon: <SettingOutlined />,
    },
    {
      type: 'divider',
    },
    {
      key: '3',
      label: 'Logout',
      icon: <LogoutOutlined />,
      danger: true, // Automatically colors text and icon red
      onClick: handleLogout, // Pass the handler directly to the item!
    },
  ];

  const functionStyles = info => {
    const { props } = info;
    const isClick = props.trigger?.includes('click');
    if (isClick) {
      return {
        root: {
          borderColor: '#1890ff',
          borderRadius: '8px',
        },
      };
    }
    return {};
  };

  const sharedProps = {
    menu: { items },
    placement: 'bottomLeft',
  };

  return (
    <>
      <nav class="navbar navbar-expand-md navbar-dark bg-primary">
        <div class="container">
          <Link to='/' className="navbar-brand">My Todo</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className='navbar-nav me-auto'>
              <li className="nav-item">
                <Link to='/' className="nav-link"><HomeOutlined /> Home</Link>
              </li>
              <li className="nav-item">
                <Link to='/todos' className="nav-link">Todos</Link>
              </li>
            </ul>
            <div class="d-flex" role="search">
              {isAuth ? (
                <div className="d-flex align-items-center">
                  <Dropdown {...sharedProps} styles={functionStyles} trigger={['click']}>
                    <div style={{ cursor: 'pointer' }}>
                      <Avatar size='large' icon={<UserOutlined />} />
                    </div>
                  </Dropdown>
                </div>
              ) : (
                <Space>
                  <Link to='/auth/login'><Button color='green' variant='solid'>Login</Button></Link>
                  <Link to='/auth/register'><Button type='primary'>Register</Button></Link>
                </Space>
              )}
            </div>
          </div>
        </div>
      </nav>
      {/* <nav className="navbar navbar-expand navbar-dark bg-primary">
        <div className="container">
          <Link to='/' className="navbar-brand">My Todo</Link>

          <ul className='navbar-nav me-auto'>
            <li className="nav-item">
              <Link to='/' className="nav-link"><HomeOutlined /> Home</Link>
            </li>
            <li className="nav-item">
              <Link to='/todos' className="nav-link">Todos</Link>
            </li>
          </ul>

          {isAuth ? (
            <div className="d-flex align-items-center">
              <Dropdown {...sharedProps} styles={functionStyles} trigger={['click']}>
                <div style={{ cursor: 'pointer' }}>
                  <Avatar size='large' icon={<UserOutlined />} />
                </div>
              </Dropdown>
            </div>
          ) : (
            <Space>
              <Link to='/auth/login'><Button color='green' variant='solid'>Login</Button></Link>
              <Link to='/auth/register'><Button type='primary'>Register</Button></Link>
            </Space>
          )}
        </div>
      </nav> */}
    </>
  )
}

export default Navbar