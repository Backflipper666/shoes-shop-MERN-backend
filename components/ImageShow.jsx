// ImageShow.jsx
import React from 'react';
import { Box } from '@admin-bro/design-system';

const ImageShow = (props) => {
  console.log('uhu');
  const { record } = props;
  const imageUrl = record.params.image;

  return (
    <Box variant="grey">
      <img
        src={imageUrl}
        alt="Shoe image"
        style={{ width: '100%', height: 'auto' }}
      />
    </Box>
  );
};

export default ImageShow;
