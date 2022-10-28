import { Dna } from 'react-loader-spinner';
import { WrapperLoader } from './Loader.styled';

export const Loader = () => {
  return (
    <WrapperLoader>
      <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        color="red"
      />
    </WrapperLoader>
  );
};
