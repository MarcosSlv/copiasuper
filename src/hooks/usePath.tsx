import { useLocation } from 'react-router-dom';

export const usePath = () => {
  const isCurrentPage = (link: string) => {
    const { pathname } = useLocation();

    if (pathname === link) {
      return true;
    }

    return false;
  };

  return {
    isCurrentPage,
  };
};
