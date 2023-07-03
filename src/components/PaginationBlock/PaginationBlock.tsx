import { Pagination } from 'antd';
import { usePhotos } from '../../helpers/constants';

const PaginationBlock = () => {
  const {
    fetchPhotos,
    searchKeyWord,
    totalPages,
    currentPage,
    setCurrentPage,
  } = usePhotos();

  console.log(currentPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    fetchPhotos(searchKeyWord, page);
  };

  return (
    <Pagination
      style={{ textAlign: 'center' }}
      current={currentPage}
      total={totalPages}
      onChange={(page) => handlePageChange(page)}
    />
  );
};

export default PaginationBlock;
