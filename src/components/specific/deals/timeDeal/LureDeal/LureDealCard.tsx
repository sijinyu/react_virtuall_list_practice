import Card from '@/components/unit/Card';
import { LureDeal } from '@/types';
import { memo } from 'react';

type LureDealCardProps = {
  deal: LureDeal;
};

const LureDealCard = ({ deal }: LureDealCardProps) => (
  <a className='cursor'>
    <Card className='w-146 h-227 rounded-12'>
      <Card.Image src={deal.image} alt={deal.title} />
      <Card.Content className='px-10 pt-9'>
        <Card.Title title={deal.title} className='text-gray-800' />
        <Card.Price
          discountRate={deal.discountRate}
          discountedPrice={deal.discountedPrice}
          className='text-lg'
        />
      </Card.Content>
    </Card>
  </a>
);

export default memo(LureDealCard);
