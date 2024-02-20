import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { imagedb } from "./firebase-config";
import { v4 } from "uuid";

const Fileupload = () => {
    const [img,setImg] =useState('')
  const [imgUrl, setImgUrl] = useState([]);
  const handleClick = () =>{
    if(img !==null){
       const imgRef =  ref(imagedb,`files/${v4()}`)
       uploadBytes(imgRef,img).then(value=>{
           console.log(value)
           getDownloadURL(value.ref).then(url=>{
               setImgUrl(data=>[...data,url])
           })
       })
    }
   }

  useEffect(() => {
    listAll(ref(imagedb, "files"))
      .then((imgs) => {
        imgs.items.forEach((val) => {
          getDownloadURL(val)
            .then((url) => {
              setImgUrl((data) => [...data, url]);
            })
            .catch((error) => {
              console.error("Error fetching download URL:", error);
            });
        });
      })
      .catch((error) => {
        console.error("Error listing files:", error);
      });
  }, []);

  return (
    <>
      <div>
        <input type="file" onChange={(e) => setImg(e.target.files[0])} />
        <button onClick={handleClick}>upload</button>
      </div>
      <div className="mb-3">
        {imgUrl.map((dataVal,index) => (
          <div>
            <img key={index} src={dataVal} height="200px" width="200px" />
            <br />
          </div>
        ))}
      </div>
    </>
  );
};

export default Fileupload;
