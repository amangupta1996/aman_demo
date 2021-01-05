import React from 'react';
import { withRouter } from 'react-router-dom';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
const AutoplaySlider = withAutoplay(AwesomeSlider);

class SliderComponent extends React.Component {
    
    render() {
        return (
            <div className="col-12 noPad">
                {/* logo */}
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-12 text-center">
                        <img src="../../../assets/logo.png" alt="" className="logoClass" />
                    </div>
                </div>
                {/* close logo */}

                {/* Slide" */}
                <AutoplaySlider
                    play={true}
                    cancelOnInteraction={false} // should stop playing on user interaction
                    interval={3000}
                >
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-12 text-center">
                            <img src="../../../assets/beforeLogin/slide_1.png" alt="" className="logoClass" />
                        </div>
                        <div className="col-12 col-md-12 col-lg-12 sliderContent">
                            <div className="row">
                                <div className="col-12 col-md-12 col-lg-12 sliderContentHeading">
                                    Arrange Your Schedule
                                </div>
                                <div className="col-12 col-md-12 col-lg-12 sliderContentText">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos…
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-12 text-center">
                            <img src="../../../assets/beforeLogin/slide_2.png" alt="" className="logoClass" />
                        </div>
                        <div className="col-12 col-md-12 col-lg-12 sliderContent">
                            <div className="row">
                                <div className="col-12 col-md-12 col-lg-12 sliderContentHeading">
                                    Interactive Learning Video
                                </div>
                                <div className="col-12 col-md-12 col-lg-12 sliderContentText">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos…
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-12 text-center">
                            <img src="../../../assets/beforeLogin/slide_3.png" alt="" className="logoClass" />
                        </div>
                        <div className="col-12 col-md-12 col-lg-12 sliderContent">
                            <div className="row">
                                <div className="col-12 col-md-12 col-lg-12 sliderContentHeading">
                                    Interactive Learning Video
                                </div>
                                <div className="col-12 col-md-12 col-lg-12 sliderContentText">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos…
                                </div>
                            </div>
                        </div>
                    </div>
                </AutoplaySlider>
            </div>
        )
    }
}
export default withRouter(SliderComponent)
