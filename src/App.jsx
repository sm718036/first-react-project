const App = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <img src="../public/media/img/company-logo.svg" alt="company-logo" />
        </div>
        <div className="nav-menuSearch-container">
          <div className="search-bar-container">
            <img src="../public/media/img/search-icon.svg" alt="search-icon" className="search-icon" />
            <input type="text" className="search-bar-input" placeholder="Want to learn?"/>
            <span className="explore-btn-container">
              Explore
              <img src="../public/media/img/chevron-down-icon.svg" alt="chevron-down" className="chevron-down"/>
            </span>
          </div>
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="" className="nav-link active">Home</a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">About us</a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">Courses</a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">Contact Us</a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">FAQs</a>
            </li>
          </ul>
        </div>
        <div className="account-control-container">
          <a href="" className="sign-in-link">Sign in</a>
          <a href="" className="create-acct-btn">Create free</a>
        </div>
      </nav>
      <main>
        <section className="hero">
          <div className="sec-content-container">
            <div className="sec-title-container">
              <h1 className="sec-title">up your <span>skills</span> to <span>advance</span> your <span>career</span> path</h1>
              <p className="title-desc">Learn UI-UX Design skills with weekend UX . The latest online learning system and material that help your knowledge growing.</p>
              <span className="sec-btns-container">
                <button className="get-started-btn">get started</button>
                <button className="free-trial-btn">get free trial</button>
              </span>
            </div>
            <div className="sec-features-container">
              <div className="feature">
                <img src="../public/media/img/man-icon.svg" alt="public-speaking" />
                public speaking
              </div>
              <div className="feature">
                <img src="../public/media/img/red-bag-icon.svg" alt="public-speaking" />
                careeer-oriented
              </div>
              <div className="feature">
                <img src="../public/media/img/light-icon.svg" alt="public-speaking" />
                creative thinking
              </div>
            </div>
            <img src="..//public/media/img/ellipse-light-green.svg" alt="" />
          </div>
          <div className="sec-img-container">
            <div className="img-container">
              <div className="women-img-container green-circle large"></div>
              <div className="women-img-container green-circle-filled large"></div>
              <div className="women-img-container green-circle-multiple">
                <div className="green-circle-filled small"></div>
                <div className="sub-green-cirlce first"></div>
                <div className="sub-green-cirlce second"></div>
                <div className="sub-green-cirlce third"></div>
                <div className="sub-green-cirlce fourth"></div>
              </div>
              <div className="women-img-container">
                <img src="..//public/media/img/young-student-woman.svg" alt="" className="young-student-woman"/>
              </div>
              <div className="courses-progress">
                <img src="../public/media/img/Progress circle.svg" alt="" className="progress-bar-img"/>
                <p className="stats">5K+</p>
                <p>online courses</p>
              </div>
              <div className="tutors">
                <img src="../public/media/img/Board.svg" alt="" />
                <span>
                  <p>tutors</p>
                  <p className="stats">250+</p>
                </span>
              </div>
              <div className="video-courses">
                <img src="../public/media/img/Online Education.svg" alt="" />
                <span>
                  <p className="stats">2K+</p>
                  <p>video courses</p>
                </span>
              </div>
            </div>
          </div>
          <div className="sec-footer">
            <div className="collaboration">
              <p className="collab-count">250+</p>
              <p className="collab-text">collaboration</p>
            </div>
            <img src="../public/media/img/duolingo logo.svg" alt="" />
            <img src="../public/media/img/Codecov-logo.svg" alt="" />
            <img src="../public/media/img/UserTesting-logo.svg" alt="" />
            <img src="../public/media/img/Magic-leap-logo.svg" alt="" />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;