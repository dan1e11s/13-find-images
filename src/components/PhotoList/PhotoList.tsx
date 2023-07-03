import { Card, Image } from 'antd';
import { usePhotos } from '../../helpers/constants';
import Loader from '../Loader/Loader';

const PhotoList = () => {
  const { photos, loading } = usePhotos();

  if (!photos || photos.length === 0) {
    return (
      <div
        className="list"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <p
          style={{
            fontFamily: 'sans-serif',
            fontWeight: '700',
            textTransform: 'uppercase',
            color: '#909090',
          }}
        >
          you haven't looked for anything yet
        </p>
      </div>
    );
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="list">
      {photos?.map((photo) => (
        <Card
          key={photo.id}
          style={{
            margin: '0 0.5rem 0.5rem 0',
            display: 'inline-block',
            width: '100%',
            boxShadow: '5px 5px 5px rgba(0,0,0,0.5)',
          }}
        >
          <Image src={photo.urls.regular} />
        </Card>
      ))}
    </div>
  );
};

export default PhotoList;
