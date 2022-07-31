import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                src="https://p9-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/ddcb57a7bcd8bf0fc01c18338b2caf59~c5_300x300.webp?x-expires=1658073600&x-signature=zp1Fcsb%2BZLN9zEhLN1oH8BqF3VQ%3D"
                alt="Avatar"
                className={cx('avatar')}
            />
            <div className={cx('infor')}>
                <h4 className={cx('username')}>
                    <span>lonelyGhost</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('name')}>Huynh Trong Duc</span>
            </div>
        </div>
    );
}

export default AccountItem;
