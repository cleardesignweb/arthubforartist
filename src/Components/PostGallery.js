import React, { useState } from "react";
import "../Style/Admin.css";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { auth, db, storage } from "../Data/Firebase";

const PostGallery = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState('')
  const [website, setWebsite] = useState('')
  const [imageFile, setImageFile] = useState(null);
  const [thumbnailUrl, setThumbnailUrl] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadThum, setUploadThum] = useState(
    "https://static.vecteezy.com/system/resources/previews/004/640/699/non_2x/circle-upload-icon-button-isolated-on-white-background-vector.jpg"
  );
 

  const handleFileChange = async (event) => {
    try {
      const file = event.target.files[0];
      setImageFile(file);

      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setThumbnailUrl(e.target.result);
        };
        reader.readAsDataURL(file);
        setUploadThum(URL.createObjectURL(file));
      } else {
        setThumbnailUrl(null);
        setUploadThum(
          "https://static.vecteezy.com/system/resources/previews/004/640/699/non_2x/circle-upload-icon-button-isolated-on-white-background-vector.jpg"
        );
      }

      const storageRef = ref(storage, `images/${Date.now()}${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
        },
        (error) => {
          console.log(error.message);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          setImageFile({ downloadURL });
        }
      );
    } catch (error) {
      console.error("Error handling file change:", error);
    } finally {
      setUploadProgress(0);
    }
  };

  const handleUpload = async () => {
    try {
      const today = new Date();
      const date = today.toDateString();
      const Hours = today.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      const time = today.toLocaleDateString();

      if (imageFile && imageFile.downloadURL) {
        const imageRef = await addDoc(collection(db, "galleries"), {
          title: title,
          imageFile: imageFile.downloadURL,
          location:location, 
          website:website,
           
        });
        navigate("/admin");
        alert("Image uploaded successfully");
        console.log("Image uploaded successfully with ID:", imageRef.id);
      }
    } catch (error) {
      console.error("Error uploading image to Firebase", error);
    }
  };

  const File = () => {
    document.getElementById("fileupload").click();
  };
 

  return (
    <div className="profile">
      <div className="uploadContainer">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          id="fileupload"
          style={{ display: "none" }}
        />
        <div className="uploadImageContainer">
 
          <img src={uploadThum} alt="" className="uploadThum" onClick={File} />
          <div className="titleContainer">
            <input
              type="text"
              placeholder="Title of Gallery"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="imageTitle"
            />

<input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="imageTitle"
            />

<input
              type="text"
              placeholder="Website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              className="imageTitle"
            />
          </div>
        </div>
 
        {uploadProgress > 0 && <p>Upload Progress: {uploadProgress}%</p>}
        <div className="uploadImageButton" onClick={handleUpload}>
          <h2>Upload Image</h2>
        </div>
      </div>
    </div>
  );
};

export default PostGallery;
