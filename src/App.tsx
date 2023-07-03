import Navbar from './components/NavBar/Navbar';
import PaginationBlock from './components/PaginationBlock/PaginationBlock';
import PhotoList from './components/PhotoList/PhotoList';
import { useTheme } from './helpers/constants';

const App = () => {
  const { theme } = useTheme();

  return (
    <div>
      <Navbar />
      <div
        style={
          theme
            ? { backgroundColor: '#FFD6A5' }
            : { backgroundColor: '#176B87' }
        }
      >
        <PhotoList />
        <PaginationBlock />
      </div>
    </div>
  );
};

export default App;
