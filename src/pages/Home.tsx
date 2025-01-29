import './home.scss'
const Home = () => {
    return (
      <div className="main-container">
        <div className="navbar">
          <div className="left-navbar">
          <span className='Knowledge-Base'>Knowledge Base</span>
          </div>
          <div className='right-navbar'>
          <ul>
            <li>Home</li>
            <li>Articles</li>
            <li>Categories</li>
            <li>Search</li>
          </ul>
        </div>
        </div>
        <div className='empty'>
        </div>
        <div className='toolBar'>
<div className='toolBar-left'>
<span>card view</span>
<span>card view</span>
<span>card view</span>
</div>
        </div>
      </div>
    );
  };
  
  export default Home;