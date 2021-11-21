const Home = () => {

    const handleClick = (name) => {
        console.log('hello' + name);
    }

    const handleClick2 = (e) => {
        console.log('hello', e);
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={(e) => handleClick('John Smith', e)}>Click me</button>
            <button onClick={handleClick2}>Click 2</button>
        </div>
     );
}
 
export default Home;