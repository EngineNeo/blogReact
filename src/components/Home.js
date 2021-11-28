import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [isLoading, setisLoading] = useState(true);
    const [error, setError] = useState(null);


    //start jsonserver
    //npx json-server --watch data/db.json --port 8000
      useEffect(() => {
          fetch('https://localhost:8000/blogs')
            .then(res => {
                if(!res.ok) {
                    throw Error('Data was unable to be fetched')
                }
                return res.json();
            })
            .then (data => {
                console.log(data);
                setisLoading(false);
            })
            .catch (err => {
                setisLoading(false);
                setError(err.message)
            })
      }, []);

    return ( 
        <div className="home">
            { error && <div> { error } </div>}
            { isLoading && <div>Loading . . . </div> }
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
     );
}
 
export default Home;