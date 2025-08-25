import React, { useState } from 'react';
import { Card, Row, Col, Input, Button, Divider, Typography, Statistic } from 'antd';
import { 
  BarChartOutlined, 
  DollarOutlined, 
  UserOutlined, 
  CreditCardOutlined 
} from '@ant-design/icons';
import UserActions from '../../components/UserActions';

const { Title, Text } = Typography;

const Dashboard = () => { // ✅ REMOVEU o parâmetro 'user' não utilizado
  const [activeSearch, setActiveSearch] = useState('1T');
  
  const transferData = {
    document: "44533017",
    sendAddress: "Espanha - Euro",
    exchangeType: "LUBO = 0.9222950 EUR",
    idx: "+ 500,00",
    paymentMethod: "Espanha - Euro",
    sendAmount: "2.045,00 €",
    promotionCode: "OUTRONN2023",
    promotionDetails: "Desconto de 5% aplicado",
    notes: "2.045",
    promotionName: "Transferência Outronn Premium"
  };

  const handleUserTypeChange = (userType) => {
    // Lógica para mudar o tipo de usuário
    console.log('Tipo de usuário selecionado:', userType);
  };

  return (
    <div style={{ padding: "24px", maxWidth: "1200px", margin: "0 auto" }}>
      <Row gutter={24}>
        <Col span={24}>
          <Card title="Dashboard de Transferências" style={{ marginBottom: "24px" }}>
            <Row gutter={16}>
              <Col span={6}>
                <Statistic title="Total Transferências" value={1128} prefix={<BarChartOutlined />} />
              </Col>
              <Col span={6}>
                <Statistic title="Valor Total" value={125043} prefix={<DollarOutlined />} suffix="€" />
              </Col>
              <Col span={6}>
                <Statistic title="Usuários Ativos" value={28} prefix={<UserOutlined />} />
              </Col>
              <Col span={6}>
                <Statistic title="Transações Hoje" value={12} prefix={<CreditCardOutlined />} />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col xs={24} md={8}>
          <Card title="BÚSQUEDA FREM-TEMTE" style={{ marginBottom: "24px" }}>
            <div style={{ marginBottom: "16px" }}>
              <Text type="secondary">TÉCNICO de documento</Text>
              <Input 
                value={transferData.document} 
                style={{ marginTop: "8px" }}
                readOnly
              />
            </div>
            
            <div className="search-options" style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
              {['1T', '2T', '3T'].map(option => (
                <div 
                  key={option}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: activeSearch === option ? '#1890ff' : '#f0f4f8',
                    color: activeSearch === option ? 'white' : 'inherit',
                    borderRadius: '20px',
                    fontSize: '14px',
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                  }}
                  onClick={() => setActiveSearch(option)}
                >
                  {option}
                </div>
              ))}
            </div>
          </Card>

          <Card title="Ações do Usuário">
            <UserActions onChangeUserType={handleUserTypeChange} />
          </Card>
        </Col>

        <Col xs={24} md={16}>
          <Card title="INFORMACIÓN DE LA TRANSFERENCIA">
            <Row gutter={16}>
              <Col span={12}>
                <div style={{ marginBottom: "16px" }}>
                  <Text type="secondary">Adecuada de envía</Text>
                  <div style={{ fontSize: "16px", fontWeight: "500" }}>{transferData.sendAddress}</div>
                </div>
              </Col>
              <Col span={12}>
                <div style={{ marginBottom: "16px" }}>
                  <Text type="secondary">Abuse En alternaciones</Text>
                  <div style={{ fontSize: "16px", fontWeight: "500" }}>Não especificado</div>
                </div>
              </Col>
              <Col span={12}>
                <div style={{ marginBottom: "16px" }}>
                  <Text type="secondary">Tipo de cambio</Text>
                  <div style={{ fontSize: "16px", fontWeight: "500" }}>{transferData.exchangeType}</div>
                </div>
              </Col>
              <Col span={12}>
                <div style={{ marginBottom: "16px" }}>
                  <Text type="secondary">IDX</Text>
                  <div style={{ fontSize: "16px", fontWeight: "500" }}>{transferData.idx}</div>
                </div>
              </Col>
            </Row>

            <Divider />

            <div style={{ background: "#f9f9f9", padding: "16px", borderRadius: "8px" }}>
              <Title level={5}>Pela de pago</Title>
              <Row gutter={16} style={{ marginTop: "16px" }}>
                <Col span={12}>
                  <div style={{ marginBottom: "16px" }}>
                    <Text type="secondary">España - Euro</Text>
                    <div style={{ fontSize: "16px", fontWeight: "500" }}>{transferData.paymentMethod}</div>
                  </div>
                </Col>
                <Col span={12}>
                  <div style={{ marginBottom: "16px" }}>
                    <Text type="secondary">Cantidad de envía</Text>
                    <div style={{ fontSize: "16px", fontWeight: "500" }}>{transferData.sendAmount}</div>
                  </div>
                </Col>
                <Col span={12}>
                  <div style={{ marginBottom: "16px" }}>
                    <Text type="secondary">Código de promoción</Text>
                    <div style={{ fontSize: "16px", fontWeight: "500" }}>{transferData.promotionCode}</div>
                  </div>
                </Col>
                <Col span={12}>
                  <div style={{ marginBottom: "16px" }}>
                    <Text type="secondary">Abuse detalles de la Promoción</Text>
                    <div style={{ fontSize: "16px", fontWeight: "500" }}>{transferData.promotionDetails}</div>
                  </div>
                </Col>
              </Row>
            </div>

            <Divider />

            <div style={{ marginBottom: "16px" }}>
              <Text type="secondary">Notas a aviso:</Text>
              <div style={{ fontSize: "16px", fontWeight: "500" }}>{transferData.notes}</div>
            </div>

            <div style={{ marginBottom: "24px" }}>
              <Text type="secondary">Nombre de promoción</Text>
              <div style={{ fontSize: "16px", fontWeight: "500", color: "#1890ff" }}>
                {transferData.promotionName}
              </div>
            </div>

            <div style={{ display: "flex", gap: "12px" }}>
              <Button type="primary" size="large">
                Aprovar Transferência
              </Button>
              <Button size="large">
                Editar Detalhes
              </Button>
              <Button type="default" size="large" danger>
                Cancelar
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;