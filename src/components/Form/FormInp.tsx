import { Form, Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { usePhotos, useTheme } from '../../helpers/constants';

const FormInp = () => {
  const {
    fetchPhotos,
    currentPage,
    setCurrentPage,
    searchKeyWord,
    setSearchKeyWord,
  } = usePhotos();
  const { theme } = useTheme();

  const handlePhotos = () => {
    if (searchKeyWord) {
      setCurrentPage(1);
      fetchPhotos(searchKeyWord, currentPage);
    }
  };

  return (
    <Form
      name="basic"
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input image name!' }]}
      >
        <Input
          value={searchKeyWord}
          onChange={(e) => setSearchKeyWord(e.target.value)}
          style={
            theme
              ? { border: '2px solid #FFD6A5' }
              : { border: '2px solid #176B87' }
          }
          placeholder="Enter an image name"
        />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 2 }}>
        <Button
          onClick={handlePhotos}
          style={
            theme
              ? { backgroundColor: '#FFD6A5' }
              : { backgroundColor: '#176B87' }
          }
          type="primary"
          icon={<SearchOutlined />}
        >
          Search
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormInp;
