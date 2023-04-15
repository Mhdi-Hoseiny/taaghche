import { useEffect, useState } from 'react';
import axios from 'axios';

const useInfinite = (limit, loaderRef, url) => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${url}${page}.json`);
      setData(prev => [...prev, ...res.data]);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const target = entries[0];
        if (target.isIntersecting && page <= limit && !loading) {
          setPage(prev => prev + 1);
          getData();
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 1,
      }
    );
    if (loaderRef) observer.observe(loaderRef.current);

    return () => {
      if (observer) observer.disconnect();
    };
  }, [loading]);

  return { data, error, loading };
};

export default useInfinite;
