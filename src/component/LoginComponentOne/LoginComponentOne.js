import React from 'react'
import cookies from 'react-cookies'
import { Grid, Button, Container, Input } from 'semantic-ui-react'
// import TopHeader from "../../container/TopHeader/TopHeader";
import './LoginComponentOne.css'
import { withRouter } from 'react-router-dom'
import * as RoutePath from '../../shared/utils/routeLink'
import image2 from '../../assets/images/home-default-1-960x640.jpg'
import image3 from '../../assets/images/home-default-2-652x491.jpg'
import Videojs from './video.js'
let db;
const employeeData = [
  { id: "00-01", name: "gopal", age: 35, email: "gopal@tutorialspoint.com" },
  { id: "00-02", name: "prasad", age: 32, email: "prasad@tutorialspoint.com" }
];
let request = window.indexedDB.open("newDatabase", 1);

request.onerror = (event) => {
    console.log("error: ");
};

request.onsuccess = (event) => {
    db = request.result;
    console.log("success: "+ db);
};

request.onupgradeneeded = (event) => {
    var db = event.target.result;
    var objectStore = db.createObjectStore("employee", {keyPath: "id"});
    
    for (var i in employeeData) {
      objectStore.add(employeeData[i]);
    }
}

const videoJsOptions = {
  html5: {
    hls: {
      overrideNative: true
    }
  },
  autoplay: true,
  playbackRates: [0.5, 1, 1.25, 1.5, 2],
  controls: true,
  sources: [
    {
      src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      type: 'video/mp4'
    }
  ]
}


class LoginComponentOne extends React.Component {
  state = {
    firstBlock: {
      title: 'The Power of Bootstrap Toolkit',
      content: 'We heve made a huge effort to provide you with the extreme power of site building via Bootstrap Toolkit. It is one of the most modern and flexible solutions for everyone who wants their website working properly and according to the latest standards.'
    },
    secondBlock: {
      title: 'Content Driven Design',
      content: 'Unlike many other templates, Monstroid² is built around user content but not vice versa. Thus you may be sure when you add your own texts and images the template will look same cool and appealing.'

    }
  }

  componentDidMount () {
    
  }

  redirectHandler = name => {
    if (this.props.history.location.pathName !== name) {
      switch (name) {
        case RoutePath.DASHBOARD: {
          this.props.history.push(RoutePath.DASHBOARD)
          break
        }
        default: {
        }
      }
    }
  }

  add = () => {

    console.log('adding data');
     var request = db.transaction(["employee"], "readwrite")
     .objectStore("employee")
     .add({ id: "00-03", name: "Kenny", age: 19, email: "kenny@planet.org" });
     
     request.onsuccess = (event) => {
        console.log("Kenny has been added to your database.");
     };
     
     request.onerror = (event) => {
        console.log("Unable to add data\r\nKenny is aready exist in your database! ");
     }
  }
  
  remove = () => {
     var request = db.transaction(["employee"], "readwrite")
     .objectStore("employee")
     .delete("00-03");
     
     request.onsuccess = (event) => {
        console.log("Kenny's entry has been removed from your database.");
     };
  }

  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  getCustomData = () => {
    let shownData = [1,2,3,4,5,6,7,8,9,0];

    this.setState({
      shownData
    })
  }

  render () {
    const { videoLink } = this.state
    return (
      <Container fluid>
        <Grid columns={1}>
          <Grid.Row>
            <Grid.Column className="videoContainer">
              
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className="firstBlock">
            <Grid.Column centered>
              <h1 className="headingFirst">Consistency is the key</h1>
            </Grid.Column>
            <Grid.Column>
              <button onClick ={() => this.add()}>Add data </button>
              <button onClick ={() => this.remove()}>Delete data </button>
              <button onClick={() => {
                this.getCustomData()
              }}>Get Custom Data</button>
            </Grid.Column>
            <Grid.Column>
              {this.state.shownData && <ul>
                  {this.state.shownData.map(element => {
                    return <li> custom number {element}</li>
                  })}
                </ul>}
            </Grid.Column>
            <Grid.Column>
              <div className="firstColumnWidth">Monstroid² boasts clean and crispy design, bulletproof layout
              consistency and intuitive navigation. The template was created by
              top industry leaders in web design and user experience. Improve
              your audience engagement and loyalty with simple and user friendly
              tools offered by our template.</div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid columns={2}>
          <Grid.Row className="flexBox noPad">
            <Grid.Column className="noPad">
              <Grid columns={1} className="noMar secondBlock">
                <Grid.Row className="">
                  <Grid.Column className="bootstrapPowerTitle">{this.state.firstBlock.title}</Grid.Column>
                  <Grid.Column className="bootstrapPowerText">
                    {this.state.firstBlock.content}
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
            <Grid.Column className="noPad">
              <img src={image2} />
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Grid stackable columns={2} className="padding-t-b-5">
          <Grid.Row className="flexBox noPad">
            <Grid.Column className="noPad rightSideImage">
              <img src={image3} />
            </Grid.Column>
            <Grid.Column className="noPad">
              <Grid columns={1} className="noMar thirdBlock">
                <Grid.Row className="">
                  <Grid.Column className="bootstrapPowerTitle">{this.state.secondBlock.title}</Grid.Column>
                  <Grid.Column className="bootstrapPowerText">
                    {this.state.secondBlock.content}
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Grid columns={1}>
          <Grid.Row>
              <Grid.Column>
                    <div className="parallax-container bg-image rd-parallax-light" data-parallax-img="images/parallax-01.jpg">
                        <div className="parallax material-parallax parallax">
                          <img src="images/parallax-01.jpg" alt="" className="parallelBox" />
                        </div>
                        <div className="parallax-content">
                            <div className="container section-xxl textCenter">
                                <h2 className="parallax_heading">Like What We Offer?</h2>
                                <p className="parallax-text">Start with this demo now or check out the others to choose what you need.</p>
                                <a className="enrollButton" href="#">Enroll Now</a>
                            </div>
                        </div>
                    </div>
              </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid columns={1} className="padding-t-b-5">
          <Grid.Row className="flexBox noPad letterSubscribe">
            <Grid.Column className="bootstrapPowerTitle textCenter">
              Get the latest news delivered daily!
              <br />
              We will send you breaking news right to your inbox.
            </Grid.Column>
            <Grid.Column className="textCenter">
              <input type='text' className="inputBox" placeholder="Enter your email id..." />
              <button className="submitButton">submit</button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Container fluid className="footerBlock">
          <Container>
            <Grid>
              <Grid.Row>
                <Grid.Column>
                  <Grid columns={4}>
                    <Grid.Row>
                      <Grid.Column>
                        <div className="footerHeading">About</div>
                        <div>
                          Monstroid² is HTML template that fits both developers and
                          beginners. It comes loaded with an assortment of tools and
                          features that make customization process much easier. A
                          pack of child themes, specially designed for various
                          business niches, allows users to create a fully functional
                          site for any specific business quickly and worry-free.
                        </div>
                      </Grid.Column>
                      <Grid.Column>
                        <div className="footerHeading">Navigation</div>
                        <div>
                          <ul className="footerNavs">
                            <li>About</li>
                            <li>About</li>
                            <li>About</li>
                            <li>About</li>
                            <li>About</li>
                          </ul>
                        </div>
                      </Grid.Column>
                      <Grid.Column>
                        <div className="footerHeading">Recent Comments</div>
                        <div>
                          <span>Brian Williamson on</span>

                          <span>
                            Site Speed and Search Engines Optimization Aspects
                          </span>
                        </div>
                        <div>
                          <span>Brian Williamson on</span>

                          <span>
                            Site Speed and Search Engines Optimization Aspects
                          </span>
                        </div>
                        <div>
                          <span>Brian Williamson on</span>

                          <span>
                            Site Speed and Search Engines Optimization Aspects
                          </span>
                        </div>
                      </Grid.Column>
                      <Grid.Column>
                        <div className="footerHeading">Contacts</div>
                        <div>Address 4578 Marmora Road, Glasgow, D04 89GR</div>
                        <div>Phones (800) 123-0045 (800) 123-0045</div>
                        <div>E-mail info@demolink.org</div>
                        <div>We are open Mn-Fr: 10 am-8 pm</div>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Container>
      </Container>
    )
  }
}
export default withRouter(LoginComponentOne)