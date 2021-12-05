import PropTypes from 'prop-types';
import style from '../BalanceTable/BalanceTable.module.scss';

const ReportTable = ({ data }) => {
  return (
    <div className={style.thumb}>
      <h3 className={style.title}>Сводка за 2021 год</h3>
      <ul className={style.list}>
        {data.map(item => (
          <li key={item.id} className={style.item}>
            <p>{item.month}</p>
            <p>{item.totalsum}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

ReportTable.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ReportTable;
