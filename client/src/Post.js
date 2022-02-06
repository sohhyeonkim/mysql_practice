import axios from "axios";
import React, { useState } from "react";
function Post() {
  const [content, setContent] = useState("");
  const [uploadedImg, setUploadedImg] = useState({
    filePath: "",
  });
  const handleImg = (e) => {
    console.log(e.target.files[0]);
    setContent(e.target.files[0]);
  };
  const handleUpload = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("img", content);

    axios
      .post("http://localhost:8081/upload", formData)
      .then((res) => {
        console.log(res.data.file);
        setUploadedImg({
          filePath: res.data.file,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <form encType="multipart/form-data" onSubmit={handleUpload}>
        <div>
          <h1>File upload</h1>
          <input type="file" onChange={handleImg} />
        </div>
        <button type="submit">Submit</button>
        <img src="/server/public/uploads/1.png" />
        {/* {uploadedImg ? (
          <>
            <img src={uploadedImg.filePath} alt="" />
          </>
        ) : (
          <p>hellp</p>
        )} */}
      </form>
    </div>
  );
}

export default Post;
