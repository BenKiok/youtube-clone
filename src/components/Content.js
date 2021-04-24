import '../styling/Content.css';

function Content() {
  return (
    <div className='content'>
      <iframe
        src="https://www.youtube.com/embed/sL1AUp8c8QQ" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
      ></iframe>
      <div className='about'>
        <div className='title'>
          <h2>E Y E C A N D Y</h2>
          <h3>69,002,692 views • July 11, 2019</h3>
        </div>
        <div className='icons'>
          <span className='ratio'>
            <i className='fas fa-thumbs-up'/>
            582K
            <i className='fas fa-thumbs-down'/>
            3.2K
          </span>
          <span>
            <i className='fas fa-share'/>
            SHARE
          </span>
          <span>
            <i className='fas fa-plus-circle'/>
            SAVE
          </span>
          <span>
            <i className='fas fa-ellipsis-h'/>
          </span>
        </div>
      </div>
      <div className='more-info'>
          <span className='profile'/>
          <div className='description'>
            <h3>tokyoko<i className='fas fa-check-circle'/></h3>
            <h4>69K subscribers</h4>
            <div className='hashtags'>
              <a href='#'>#eyecandy</a>
              <a href='#'>#dance</a>
            </div>
            <p>Just a lil edit for the culture</p>
            <h4>SHOW MORE</h4>
          </div>
          <button className='subscribe'>SUBSCRIBE</button>
        </div>
    </div>
  );
}

export default Content;