import { Space, Spin } from 'antd';

const Loader = () => {
  return (
    <Space
      size="middle"
      style={{
        width: '100%',
        height: '75vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Spin size="large" />
    </Space>
  );
};

export default Loader;
