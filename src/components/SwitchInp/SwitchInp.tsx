import { Space, Switch } from 'antd';
import { useTheme } from '../../helpers/constants';

const SwitchInp = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Space className="space" direction="vertical">
      <Switch
        style={
          theme
            ? { backgroundColor: '#FFD6A5' }
            : { backgroundColor: '#176B87' }
        }
        onChange={toggleTheme}
        checkedChildren="Light"
        unCheckedChildren="Dark"
        defaultChecked
      />
    </Space>
  );
};

export default SwitchInp;
