import React from 'react';
import {Link,Route, Routes} from 'react-router-dom';
function Header() {
  return (
    <header className="a-c">
    <div className="headerLeft">
    <Link to="/"><p>B<span>.</span></p></Link>
    </div>
    <Routes>
      <Route path="/works" element={
        <div className="headerCenter">
        <p>I uptade<span><a href="https://github.com/Babken2005"> my github</a></span> more frequently. Please go there to see more.</p>
        </div>
      }></Route>
    </Routes>
    <div className="headerRight">
        <Routes>
        <Route path="/" exact element={<Link to="/say-hi"><p>say hi.</p></Link>}></Route>
        <Route path="/works" exact element={<Link to="/say-hi"><p>say hi.</p></Link>}></Route>
        <Route exact path='/say-hi' element={<Link to="/"><img data-aos="fade-down" data-aos-duration="1500" width="24" src="./images/multiply.svg" alt="close" /></Link>} />
        </Routes>
    </div>
  </header>
  )
};

export default Header;