import "./App.css";
import Block from "./components/content";
import NavBar from "./components/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoArray from "./logoArray.json";
function App() {
  const logosArray = logoArray;

  const logoElements = logosArray.map((logo, index) => (
    <img
      key={index}
      src={logo.src}
      alt={logo.alt}
      className={`logo logo` + index}
    />
  ));

  return (
    <>
      <div className="App">
        <NavBar />
        <div className="blockContainer">
          <Block
            colorClass={"gradient-purple aboutme"} // Pass gradient class
            title={<h2>About Me</h2>}
            info={
              <p>
                Hi! I'm Award.A passionate Junior Software Engineer based in
                Kosovo.
              </p>
            }
          />
          <Block
            colorClass={"gradient-purple1 logoCon"}
            blocks={
              <div>
                <div className="logoContainer">{logoElements}</div>
              </div>
            }
          />
          <Block
            colorClass={"gradient-purple logoCon1"}
            title={<h2>Projects</h2>}
          />
          <Block
            colorClass={"gardient-red logoCon logoCon2 git"}
            title={
              <div className="projectFit">
                <h2 className="projectName">SurfShark-Acc-Gen</h2>
                <p>
                  Generates a Temporary Email for SurfShark VPN.
                  <br />
                  Project was built using NodeJS + Libraries.
                  <br />
                  Public.(Discontinued)
                </p>
              </div>
            }
            info={
              <a
                href="https://github.com/Awardxz/surfshark-acc-gen"
                target="__BLANK"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                  alt="githubrepo"
                  width={"100px"}
                  height={"100px"}
                ></img>
              </a>
            }
          />
          <Block
            colorClass={"gardient-red logoCon logoCon3 git"}
            title={
              <div className="projectFit">
                <h2 className="projectName">SurfShark-Acc-Gen (Frontend)</h2>
                <p>
                  Frontend of SurfShark-Acc-Gen
                  <br />
                  Project was built using React + Libraries
                  <br />
                  Public
                </p>
              </div>
            }
            info={
              <a
                href="https://github.com/Awardxz/surfsharkgen-frontend"
                target="__BLANK"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                  alt="githubrepo"
                  width={"100px"}
                  height={"100px"}
                ></img>
              </a>
            }
          />
          <Block
            colorClass={"gardient-red logoCon logoCon5 git"}
            title={
              <div className="projectFit">
                <h2 className="projectName">age-counter</h2>
                <p>
                  website that shows your age in real-time
                  <br />
                  Project was built using HTML , CSS , JS
                  <br />
                  Public - Live Site
                </p>
              </div>
            }
            info={
              <a href="https://age-counter-lake.vercel.app/" target="__BLANK">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                  alt="githubrepo"
                  width={"100px"}
                  height={"100px"}
                ></img>
              </a>
            }
          />
          <Block
            colorClass={"gardient-red logoCon logoCon6 git"}
            title={
              <div className="projectFit">
                <h2 className="projectName">quizzizV2</h2>
                <p>
                  javascript script that shows answers during a quizziz game,
                  although a rework was done with api support and much more it
                  was left unfinished from demotivation
                  <br />
                  Project was built JS
                  <br />
                  Public
                </p>
              </div>
            }
            info={
              <a href="https://github.com/Awardxz/quizzizV2" target="__BLANK">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                  alt="githubrepo"
                  width={"100px"}
                  height={"100px"}
                ></img>
              </a>
            }
          />
          <Block
            colorClass={"gardient-red logoCon logoConShort git"}
            title={
              <div className="projectFit">
                <h2 className="projectName">waledFPS</h2>
                <p>
                  A application which unlocked your fps in Roblox
                  <br />
                  Project was built using ElectronJS
                  <br />
                  Public
                </p>
              </div>
            }
            info={
              <a href="https://github.com/Awardxz/waledFPS" target="__BLANK">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                  alt="githubrepo"
                  width={"100px"}
                  height={"100px"}
                ></img>
              </a>
            }
          />
          <Block
            colorClass={"gardient-red logoCon logoConShort logoConShort1 git"}
            title={
              <div className="projectFit">
                <h2 className="projectName">waledsoft</h2>
                <p>
                  Roblox Enhanced Feature (ESP , Aimbot) - Script
                  <br />
                  Project was built using Lua
                  <br />
                  Private (Discontinued)
                </p>
              </div>
            }
            info={
              <a href="https://github.com/Awardxz/waledFPS" target="__BLANK">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                  alt="githubrepo"
                  width={"100px"}
                  height={"100px"}
                ></img>
              </a>
            }
          />
          <Block
            colorClass={"gardient-red logoCon logoConShort logoConShort2 git"}
            title={
              <div className="projectFit">
                <h2 className="projectName">waledShooter</h2>
                <p>
                  Spaceship Shooter 2D Game
                  <br />
                  Project was built HTML , CSS , JS
                  <br />
                  Public - Live Site
                </p>
              </div>
            }
            info={
              <a href="https://waledshooter.vercel.app/" target="__BLANK">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                  alt="githubrepo"
                  width={"100px"}
                  height={"100px"}
                ></img>
              </a>
            }
          />
          <Block
            colorClass={"gardient-red logoCon logoCon7 git"}
            title={
              <div className="projectFit">
                <h2 className="projectName">????</h2>
                <p>
                  Confidential
                  <br />
                  Project was built ?????
                  <br />
                  Private
                </p>
              </div>
            }
          />

          <Block
            colorClass={"gardient-red logoCon logoCon4 git"}
            title={
              <div className="projectFit">
                <h2 className="projectName">
                  Youtube Channel Automation (Contribution)
                </h2>
                <p>
                  Contributed to Open Source GitHub Project
                  <br />
                  Project was built on NodeJS with libraries
                  <br />
                  Public
                </p>
              </div>
            }
            info={
              <a
                href="https://github.com/Taulant21/youtube-channel-automation"
                target="__BLANK"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                  alt="githubrepo"
                  width={"100px"}
                  height={"100px"}
                ></img>
              </a>
            }
          />
          <Block
            colorClass={"gardient-red logoCon logoCon8"}
            title={
              <div className="projectFit">
                <h2 className="projectName contact">Contacts</h2>
                <p>
                  If you'd like to contact me , you can find me here
                  <div className="contactChildren">
                    <a href="https://github.com/Awardxz">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                        alt="github"
                        width={"50px"}
                        height={"50px"}
                      ></img>
                    </a>
                    <a href="https://steamcommunity.com/id/awardq/">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/2048px-Steam_icon_logo.svg.png"
                        alt="github"
                        width={"50px"}
                        height={"50px"}
                      ></img>
                    </a>
                    <a href="https://github.com/Awardxz">
                      <img
                        src="https://www.svgrepo.com/show/353655/discord-icon.svg"
                        alt="github"
                        width={"50px"}
                        height={"50px"}
                      ></img>
                    </a>
                    <a href="mailto:awardxzdeveloper@gmail.com">
                      <img
                        src="https://www.svgrepo.com/show/14478/email.svg"
                        alt="github"
                        width={"50px"}
                        height={"50px"}
                      ></img>
                    </a>
                  </div>
                </p>
              </div>
            }
          />
        </div>
      </div>
    </>
  );
}

export default App;
