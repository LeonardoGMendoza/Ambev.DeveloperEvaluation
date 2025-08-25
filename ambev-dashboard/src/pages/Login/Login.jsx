import React from 'react';
import { Card, Form, Input, Button, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Formik } from 'formik';

const { Title, Text } = Typography;

const Login = ({ onLogin, loading }) => {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      <Card style={{ width: 400 }}>
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <Title level={2}>Ambev Developer</Title>
          <Text type="secondary">Faça login para acessar o sistema</Text>
        </div>
        
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={async (values, { setSubmitting }) => {
            await onLogin(values.email, values.password);
            setSubmitting(false);
          }}
        >
          {({ values, handleChange, handleSubmit, isSubmitting }) => (
            <Form layout="vertical" onFinish={handleSubmit}>
              <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Por favor, insira seu email!' }]}
              >
                <Input 
                  prefix={<UserOutlined />}
                  placeholder="Seu email"
                  value={values.email}
                  onChange={handleChange}
                />
              </Form.Item>
              
              <Form.Item
                label="Senha"
                name="password"
                rules={[{ required: true, message: 'Por favor, insira sua senha!' }]}
              >
                <Input.Password 
                  prefix={<LockOutlined />}
                  placeholder="Sua senha"
                  value={values.password}
                  onChange={handleChange}
                />
              </Form.Item>
              
              <Form.Item>
                <Button 
                  type="primary" 
                  htmlType="submit" 
                  style={{ width: '100%' }}
                  loading={isSubmitting || loading}
                >
                  Entrar
                </Button>
              </Form.Item>
            </Form>
          )}
        </Formik>
      </Card>
    </div>
  );
};

export default Login;