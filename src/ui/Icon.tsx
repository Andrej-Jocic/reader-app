import { BsFillBookmarkFill, BsFillBookmarkCheckFill } from 'react-icons/bs';
import {
  IoCheckmarkDoneCircleSharp,
  IoCheckmarkDoneCircleOutline,
} from 'react-icons/io5';

import styles from './Icon.module.css';

type IconProps = {
  onClick: () => void;
  title: 'Bookmark' | 'Done';
  active: boolean;
  absoulte?: boolean;
};

type ShowIcon = {
  active: boolean;
};

const Icon = ({ onClick, title, active, absoulte = false }: IconProps) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.btn} ${absoulte ? styles.bookmark : ''} `}
      title={title}
    >
      {title === 'Bookmark' && <Bookmark active={active} />}
      {title === 'Done' && <Done active={active} />}
    </button>
  );
};

const Bookmark = ({ active }: ShowIcon) => {
  return (
    <>
      {active ? (
        <BsFillBookmarkCheckFill size={24} color="#00c46a" />
      ) : (
        <BsFillBookmarkFill size={24} />
      )}
    </>
  );
};

const Done = ({ active: showIcon }: ShowIcon) => {
  return (
    <>
      {showIcon ? (
        <IoCheckmarkDoneCircleSharp size={24} color="#00c46a" />
      ) : (
        <IoCheckmarkDoneCircleOutline size={24} color="#42484d" />
      )}
    </>
  );
};

export default Icon;
