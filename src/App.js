import './App.css';
import Footer from './components/Footer' 
function App() {
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.Nav');
    if (window.scrollY > 0) {
      header.classList.add('header-scroll');
    } else {
      header.classList.remove('header-scroll');
    }
  })
  return (
    <div className="App">
      <div className='Banner'>
        <div className='Nav'>
          <a className='logo' href='#'>
            <h1>ARSHA</h1>
          </a>
          <ul className='nav-bar'>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Team</li>
            <li className='drop-down1'>
              Drop down
              <i className="fa-solid fa-chevron-down"> </i>
              <ul className='menu1'>
                <li>Drop Down 1</li>
                <li className='drop-down2'>Deep Drop Down
                  <i className="fa-solid fa-chevron-right"></i>
                  <ul className='menu2'>
                    <li>Deep Drop Down 1</li>
                    <li>Deep Drop Down 2</li>
                    <li>Deep Drop Down 3</li>
                    <li>Deep Drop Down 4</li>
                    <li>Deep Drop Down 5</li>
                  </ul>
                </li>
                <li>Drop Down 2</li>
                <li>Drop Down 3</li>
                <li>Drop Down 4</li>
              </ul>
            </li>
            <li>Contact</li>
            <li>
              <button className='btn'>
                <h4>Get Started</h4>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className='container'>
        <div className='content-left'>
          <h1 className='text1'>Better Solutions For Your Business</h1>
          <h3 className='text2'>We are team of talented designers making websites with Bootstrap</h3>
          <div className='container-btn'>
            <a className='btn2' href ='#'>
              Get started
            </a>

            <a className='btn3' href='#'>
            <i class="fa-regular fa-circle-play"></i>
              <span>Watch video</span>
            </a>
          </div>
        </div>
        <div className='content-right'>
          <img className='anh1' src='https://bootstrapmade.com/demo/templates/Arsha/assets/img/hero-img.png'/>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
