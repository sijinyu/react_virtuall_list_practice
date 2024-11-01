import { useInfiniteQuery } from '@tanstack/react-query';
import { TTimeDealType } from '../types';
import { fetchTimeDeals } from '../api';
import { queryKeys } from '@/constants';

export const useTimeDeal = (initialType: TTimeDealType) => {
  return useInfiniteQuery({
    queryKey: [queryKeys.TIME_DEALS, initialType],
    queryFn: ({ pageParam = 1 }) => fetchTimeDeals(pageParam),
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.isLastPage) return undefined;
      return pages.length + 1;
    },
    initialPageParam: 1,
  });
};
