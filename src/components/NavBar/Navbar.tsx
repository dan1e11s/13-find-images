import { Layout } from 'antd';
import FormInp from '../Form/FormInp';
import SwitchInp from '../SwitchInp/SwitchInp';
import { useTheme } from '../../helpers/constants';

const { Header } = Layout;

const Navbar = () => {
  const { theme } = useTheme();

  return (
    <Header
      style={{
        position: 'relative',
        height: '150px',
        backgroundColor: `${theme ? '#FF9B9B' : '#001C30'}`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div>
        <h1 style={{ color: '#fff', textAlign: 'center' }}>Find image</h1>
        <FormInp />
      </div>
      <SwitchInp />
    </Header>
  );
};

export default Navbar;
