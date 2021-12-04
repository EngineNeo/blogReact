import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setisLoading] = useState(true);
    const [error, setError] = useState(null);

    //start jsonserver
    //npx json-server --watch data/db.json --port 8000
    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, { signal : abortCont.signal})
          .then(res => {
              if(!res.ok) {
                  throw Error('Data was unable to be fetched')
              }
              return res.json();
          })
          .then (data => {
              setData(data);
              setisLoading(false);
              setError(null);
          })
          .catch (err => {
              if (err.name === 'AbortError') {
                  console.log('fetch aborted');
              } else
              setisLoading(false);
              setError(err.message)
          })

          return () => abortCont.abort();
    }, [url]);

    return { data, isLoading, error }
}
 
export default useFetch;