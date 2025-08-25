import React from 'react';
import { Layout, Avatar, Typography, Space, Button } from 'antd';
import { UserOutlined, LogoutOutlined, BarChartOutlined } from '@ant-design/icons';

const { Header: AntHeader } = Layout;
const { Title, Text } = Typography;

const Header = ({ user, onLogout }) => {
  return (
    <AntHeader style={{ 
      background: 'linear-gradient(135deg, #2c3e50, #1a2530)',
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      padding: '0 24px',
      color: 'white'
    }}>
      <Space>
        <BarChartOutlined style={{ color: '#4CAF50', fontSize: '24px' }} />
        <Title level={3} style={{ color: 'white', margin: 0 }}>
          DÜSQUEDA DE TRANSFERENCIAS - OUTRONN
        </Title>
      </Space>
      
      <Space>
        <div style={{ color: 'white', textAlign: 'right' }}>
          <div style={{ fontWeight: '600' }}>{user?.name || 'Usuário'}</div>
          <div style={{ fontSize: '13px', opacity: 0.8 }}>{user?.role || 'Perfil'}</div>
        </div>
        <Avatar size="large" style={{ backgroundColor: '#4CAF50' }} icon={<UserOutlined />} />
        <Button 
          type="text" 
          icon={<LogoutOutlined />}
          style={{ color: 'white' }}
          onClick={onLogout}
        >
          Sair
        </Button>
      </Space>
    </AntHeader>
  );
};

export default Header;