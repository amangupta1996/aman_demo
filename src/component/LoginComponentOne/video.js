import React from 'react';
import videojs from 'video.js';
import videojsHlsQualitySelector from 'videojs-hls-quality-selector';

export default class VideoPlayer extends React.Component {
  componentDidMount() {
    
    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
      console.log('onPlayerReady', this);
    });
    this.player.hlsQualitySelector({
        displayCurrentQuality: true,
    });

    // this.track = this.player.addRemoteTextTrack({
    //   kind: 'captions',
    //   label: parsed.captions[0].stream,
    //   default: true,
    //   language: 'en'
    // }, false);
  
    // this.track.addCue(parsed.captions[0]);
  }

  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  render() {
    return (
      <div data-vjs-player>
        <video ref={node => (this.videoNode = node)} className="video-js" />
      </div>
    );
  }
}
