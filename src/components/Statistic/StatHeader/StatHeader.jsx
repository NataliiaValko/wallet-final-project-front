import s from './StatHeader.module.css';
import BackButton from './BackButton';
import Balance from './Balance';
import Period from './Period';

const StatHeader = () => {
  return (
    <div className={s.statHeader}>
      <BackButton />
      <Balance />
      <Period />
    </div>
  );
};

export default StatHeader;
