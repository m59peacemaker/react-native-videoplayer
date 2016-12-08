// JavaScript

var React = require('react');
var { requireNativeComponent } = require('react-native');

class VideoPlayer extends React.Component {
  render() {
    return <VideoPlayerView {...this.props} />;
  }
}
VideoPlayer.propTypes = {
  url: React.PropTypes.string
};

var VideoPlayerView = requireNativeComponent('VideoPlayerView', VideoPlayer);
module.exports = VideoPlayer;
