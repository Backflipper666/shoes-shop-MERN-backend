// ImageShow.jsx
import React from 'react';
import { Box } from '@admin-bro/design-system';
import './styles/ImageShow.css';
import styled from 'styled-components';

const ImageShow = (props) => {
  console.log('uhu');
  const { record } = props;
  const imageUrl = record.params.image;

  return (
    <Box variant="grey" width={256}>
      <img src={imageUrl} alt="Shoe" style={{ width: '50%', height: 'auto' }} />
    </Box>
  );
};

export default ImageShow;
