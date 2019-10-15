import React, { useState } from 'react';

const DropAndDragField = () => {

  const [state, setState] = useState({
    file_upload: "Drop and drag your file..."
  });

  const fileUpload = event => {
    setState({file_upload: event.target.value.split(/(\\|\/)/g).pop()});
  }

  return(
    <div className="file-upload-section">
      <div className="first-home-page-rect">
        <div className="second-home-page-rect">
          <div className="upload-icon">
            <img src="https://cdn2.iconfinder.com/data/icons/50-material-design-round-corner-style/52/Upload_2-512.png" alt="upload icon" />
            <p>{state.file_upload}</p>
          </div>
        </div>
        <form class="file-upload-form">
          <input type="file" onChange={fileUpload} multiple />
        </form>
      </div>
    </div>
  );
};


export default DropAndDragField;
