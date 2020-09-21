import React from 'react';

const withPlaceholder = (WrappedComponent) => {
  return () => {
    return (
      <WrappedComponent
        placeholder="Mon HOC"
      />
    );
  }
};

export default withPlaceholder;