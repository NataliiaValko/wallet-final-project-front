import s from './Balance.module.css';

const Balance = ({ income = '100$', costs = '88$' }) => {
  return (
    <div>
      <p>Доходы:</p> {income}
      <p>Расходы:</p> {costs}
    </div>
  );
};

export default Balance;
