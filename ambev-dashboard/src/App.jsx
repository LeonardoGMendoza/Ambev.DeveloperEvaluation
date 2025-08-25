import React from 'react';
import { Layout, Spin, message } from 'antd';
import { useAuth } from './hooks/useAuth';
import Header from './components/Header';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const { Content } = Layout;

function App() {
  const { user, login, logout, loading, isAuthenticated } = useAuth();

  const handleLogin = async (email, password) => {
    const result = await login(email, password);
    
    if (result.success) {
      message.success('Login realizado com sucesso!');
    } else {
      message.error(result.error || 'Erro ao fazer login');
    }
    
    return result;
  };

  const handleLogout = () => {
    logout();
    message.info('Logout realizado com sucesso!');
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Spin size="large" />
      </div>
    );
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {isAuthenticated && <Header user={user} onLogout={handleLogout} />}
      <Content>
        {!isAuthenticated ? (
          <Login onLogin={handleLogin} loading={loading} />
        ) : (
          <Dashboard user={user} />
        )}
      </Content>
    </Layout>
  );
}

export default App;