import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [isLoading, setisLoading] = useState(true);

      useEffect(() => {
          fetch('https://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then (data => {
                console.log(data);
                setisLoading(false);
            })
      }, []);

    return ( 
        <div className="home">
            { isLoading && <div>Loading . . . </div> }
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
     );
}
 
export default Home;