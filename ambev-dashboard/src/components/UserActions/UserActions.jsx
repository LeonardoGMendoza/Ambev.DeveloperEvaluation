import React from 'react';
import { Button, Row, Col } from 'antd';
import { 
  UserOutlined, 
  DollarOutlined, 
  SettingOutlined, 
  CustomerServiceOutlined 
} from '@ant-design/icons';

const UserActions = ({ onChangeUserType }) => {
  const userTypes = [
    {
      key: 'admin',
      label: 'Admin',
      icon: <SettingOutlined />,
      color: '#3498db'
    },
    {
      key: 'financial',
      label: 'Financeiro',
      icon: <DollarOutlined />,
      color: '#9b59b6'
    },
    {
      key: 'client',
      label: 'Cliente',
      icon: <UserOutlined />,
      color: '#2ecc71'
    },
    {
      key: 'operator',
      label: 'Operador',
      icon: <CustomerServiceOutlined />,
      color: '#e67e22'
    }
  ];

  return (
    <Row gutter={[12, 12]}>
      {userTypes.map((userType) => (
        <Col span={12} key={userType.key}>
          <Button
            style={{ 
              backgroundColor: userType.color,
              color: 'white',
              border: 'none',
              height: '60px',
              width: '100%'
            }}
            icon={userType.icon}
            onClick={() => onChangeUserType(userType.key)}
          >
            {userType.label}
          </Button>
        </Col>
      ))}
    </Row>
  );
};

export default UserActions;