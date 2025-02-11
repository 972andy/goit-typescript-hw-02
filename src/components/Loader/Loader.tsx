import { Vortex } from 'react-loader-spinner'

import css from './Loader.module.css';
import { FC } from 'react';

const Loader: FC = () => {
  return (
    <div className={css.loader}>
      <Vortex
                visible={true}
                height="80"
                width="80"
                ariaLabel="vortex-loading"
                wrapperStyle={{}}
                wrapperClass="vortex-wrapper"
                colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
                 />
    </div>
  );
};

export default Loader;