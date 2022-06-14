//import VideoList from './VideoList.js';
var VideoListEntry = ({video, videoid, index, handleClick, changeVideo}) => {

  var videoThumbnail = video.snippet.thumbnails.default.url;

  return (
    <div className="video-list-entry media" videoid={videoid}>
      <div className="media-left media-middle">
        <img className="media-object" src={videoThumbnail} videoid={videoid} alt="" />
      </div>
      <div className="media-body">
        <div className="video-list-entry-title" onClick={changeVideo} index={index} videoid={videoid}>{video.snippet.title}</div>
        <div className="video-list-entry-detail" videoid={videoid}>{video.snippet.description}</div>
      </div>
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;
