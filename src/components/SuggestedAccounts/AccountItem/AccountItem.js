import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from './AccountItem.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Image from '~/components/Image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import AccountPreview from '../AccountPreview';

const cx = classNames.bind(styles);

function AccountItem({ data = {} }) {
    const renderPreview = (props) => (
        <div tabIndex="-1" {...props}>
            <PopperWrapper>
                <AccountPreview data={data} />
            </PopperWrapper>
        </div>
    );
    return (
        <Tippy delay={[1000, 0]} offset={[-16, 0]} interactive placement="bottom" render={renderPreview}>
            <div className={cx('wrapper')}>
                <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />
                <div className={cx('body')}>
                    <p className={cx('nickname')}>
                        <strong>{data.nickname}</strong>
                        {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                    </p>
                    <p className={cx('name')}>{`${data.first_name} ${data.last_name}`}</p>
                </div>
            </div>
        </Tippy>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object,
};

export default AccountItem;
