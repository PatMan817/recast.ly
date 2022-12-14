import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import searchYouTube from '../lib/searchYouTube.js';
import Search from './Search.js';

/*var App = () => (
  <div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <div><h5><em>search</em> view goes here</h5></div>
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <div><h5><em>videoPlayer</em> view goes here</h5></div>
      </div>
      <div className="col-md-5">
        <VideoList videos={ exampleVideoData }/>
      </div>
    </div>
  </div>
);*/

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

/*
App
  Search
  VideoPlayer
  VideoList
    VideoListEntry
*/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoData: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };
    this.changeVideo = this.changeVideo.bind(this);
    this.handleClick = this.handleClick.bind(this);
    //this.setState = this.setState.bind(this);
  }

  getYouTubeVideos(query) {
    searchYouTube(query, (videos) => {
      this.setState({
        videoData: videos,
        currentVideo: videos[0]
      });
    });
  }

  componentDidMount() {
    this.getYouTubeVideos('react');
  }

  changeVideo(event) {
    var newVideoIndex = event.target.getAttribute('index');
    this.setState({currentVideo: this.state.videoData[newVideoIndex]});
  }
  handleClick(event) {
    console.log(event.target.getAttribute('index'));
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleSearch={this.getYouTubeVideos.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={ this.state.currentVideo }/>
          </div>
          <div className="col-md-5">
            <VideoList
              videos={ this.state.videoData }
              handleClick={this.handleClick}
              changeVideo={this.changeVideo}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;