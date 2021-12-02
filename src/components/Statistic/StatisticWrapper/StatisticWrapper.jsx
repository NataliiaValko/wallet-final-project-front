import StatHeader from './../StatHeader';
import IncomeCosts from '../IncomeCosts';
import Categories from '../Categories';
import GraphDetails from '../GraphDetails';
import s from './StatisticWrapper.module.css';

const StatisticWrapper = () => {
  return (
    <>
      <StatHeader></StatHeader>
      <IncomeCosts></IncomeCosts>
      <Categories />
      <GraphDetails />
    </>
  );
};

export default StatisticWrapper;
