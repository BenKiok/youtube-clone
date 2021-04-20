import '../styling/Nav.css';

function Nav() {
  return (
    <div className='nav'>
      <nav>
      <div className='nav-main'>
        <i className='fas fa-bars'/>
        <span className='nav-youtube'>
          <i className='fab fa-youtube'/>
          YouTube
        </span>
      </div>
      <div className='search-bar'>
        <input type='text' placeholder='Search'/>
        <button>
          <i className='fas fa-search'/>
        </button>
        <i className='fas fa-microphone'/>
      </div>
      <div className='nav-other'>
        <i className='fas fa-video'/>
        <i className='fas fa-th'/>
        <i className='fas fa-bell'/>
        <span className='user'>
          B
        </span>
      </div>
      </nav>
    </div>
  );
}

export default Nav;