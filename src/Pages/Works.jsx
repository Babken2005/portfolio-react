function Works() {
  return (
    <div className="work j-c">
      <div className="workLeft workLeft-on">
        <div className="workLeftParent a-c j-c">
          <h1 >Babken<span>.</span></h1>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="2550" className="workLeft workLeft-off">
        <div className="workLeftParent a-c j-c">
          <h1 >Babken<span>.</span></h1>
        </div>
      </div>
      <div className="workRight">
        <div data-aos="fade-down" data-aos-duration="1500" className="worksTop">
          <div className="worksTopParent a-c">
            <p>01.</p>
            <h4>Nufruit.</h4>
          </div>
          <div className="worksTopParent a-c">
            <p>02.</p>
            <h4>Plantex.</h4>
          </div>
          <div className="worksTopParent a-c">
            <p>03.</p>
            <h4>Singleton.</h4>
          </div>
        </div>
        <div className="worksCenter">
          <p data-aos="fade-right" data-aos-duration="1500">Latest Works</p>
        </div>
        <div className="worksBottom">
          <div data-aos="fade-up" data-aos-duration="1500" className="workCard">
            <div className="workCardTop a-c j-c">
              <img src="./images/nufruit.png" alt="nufruit" />
            </div>
            <div className="workCardBottom a-c">
              <div className="cardBottomLeft">
                <p>Nufruit</p>
                <p>Responsive landing page</p>
              </div>
              <a href="https://angry-thompson-9fc361.netlify.app/?fbclid=IwAR1SYYBdPeHjmL40jBCBQNQ0tAQ5aVnxPHg4pIh7EFLReHbSASRde4O3lj0">
              <div className="cardBottomRight a-c j-c">
                <img width="24" src="./images/eye.svg" alt="eye" />
              </div>
              </a>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="1500" className="workCard">
            <div className="workCardTop a-c j-c">
              <img src="./images/plantex.png" alt="plantex" />
            </div>
            <div className="workCardBottom a-c">
              <div className="cardBottomLeft">
                <p>Plantex</p>
                <p>Responsive landing page</p>
              </div>
              <a href="https://hardcore-neumann-b0a612.netlify.app/?fbclid=IwAR3kJcdlvdxA6ND2PGwMnFo3izohRlUGV4E-39I2_ZjAWe9xt0nemhb2F7A">
              <div className="cardBottomRight a-c j-c">
                <img width="24" src="./images/eye.svg" alt="eye" />
              </div>
              </a>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="1500" className="workCard">
            <div className="workCardTop a-c j-c">
              <img src="./images/singleton.svg" alt="Singleton" />
            </div>
            <div className="workCardBottom a-c">
              <div className="cardBottomLeft">
                <p>Singleton</p>
                <p>Responsive landing page</p>
              </div>
              <a href="https://upbeat-brown-23ab5b.netlify.app/?fbclid=IwAR0CtWjEf36GbFgyoH7OVaqm4XzaoQAdXBQ-_7pTJz2sZsSssktMfBRvKwQ">
              <div className="cardBottomRight a-c j-c">
                <img width="24" src="./images/eye.svg" alt="eye" />
              </div>
              </a>
            </div>
          </div>
        </div>
        <p className="secondTxt">They are just my 3 recent shots. To see more, please go to <span><a href="https://github.com/Babken2005">my github</a></span></p>
      </div>
    </div>
  )
}

export default Works;