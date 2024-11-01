import { TGetCellData } from '../types';
import TimeDealItem from './TimeDealItem';

type TimeDealCellProps = {
  columnIndex: number;
  rowIndex: number;
  data: TGetCellData;
};

const TimeDealCell = ({ columnIndex, rowIndex, data }: TimeDealCellProps) => {
  const cellData = data(columnIndex, rowIndex);

  if (!cellData) return null;
  if (cellData.isLoading) return <div style={cellData.style}>Loading...</div>;

  return <TimeDealItem item={cellData.item} isOpen={cellData.isOpen} />;
};

export default TimeDealCell;
