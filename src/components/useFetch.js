import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setisLoading] = useState(true);
    const [error, setError] = useState(null);

    //start jsonserver
    //npx json-server --watch data/db.json --port 8000
    useEffect(() => {
        fetch(url)
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
              setisLoading(false);
              setError(err.message)
          })
    }, [url]);

    return { data, isLoading, error }
}
 
export default useFetch;