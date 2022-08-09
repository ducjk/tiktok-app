import { useState, forwardRef } from 'react';
import images from '~/assets/images';

import classNames from 'classnames';
import styles from './Image.module.scss';

const Image = forwardRef(({ src, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        // eslint-disable-next-line jsx-a11y/alt-text
        <img
            ref={ref}
            className={classNames(styles.wrapper, className)}
            src={fallback || src}
            onError={handleError}
            {...props}
        />
    );
});

export default Image;
