import React, { useEffect, useState } from 'react'

const useFetchData = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
      const fetchData = async() => {
        try {
          const response = await fetch(url);

          if (!response.ok) {
            setIsError(true);
            setIsLoading(false);
            return;
          }

          const resp = await response.json();
          //console.log(resp);
          setData(resp);
        } catch (error) {
          setIsError(true);
        }
        setIsLoading(false);
      } 
      fetchData();
    }, []);

    return {isLoading, isError, data};
};

export default useFetchData