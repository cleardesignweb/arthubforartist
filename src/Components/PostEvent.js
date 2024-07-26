import React, { useState } from "react";
import "../Style/Admin.css";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { auth, db, storage } from "../Data/Firebase";
import { toast } from "react-toastify";

const PostEvent = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState(null);
  const [logoThumUrl, setLogoThumUrl] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadThum, setUploadThum] = useState(
    "https://static.vecteezy.com/system/resources/previews/004/640/699/non_2x/circle-upload-icon-button-isolated-on-white-background-vector.jpg"
  );

  const [logoThum, setLogoThum] = useState(
    "https://static.vecteezy.com/system/resources/thumbnails/000/421/494/small_2x/Multimedia__28128_29.jpg"
  );

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setThumbnailUrl(e.target.result);
      };
      reader.readAsDataURL(file);
      setUploadThum(URL.createObjectURL(file));

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
          setThumbnailUrl(downloadURL);
        }
      );
    } else {
      setThumbnailUrl(null);
      setUploadThum(
        "https://static.vecteezy.com/system/resources/previews/004/640/699/non_2x/circle-upload-icon-button-isolated-on-white-background-vector.jpg"
      );
    }
  };

  const handleEventImgChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setLogoThumUrl(e.target.result);
      };
      reader.readAsDataURL(file);
      setLogoThum(URL.createObjectURL(file));

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
          setLogoThumUrl(downloadURL);
        }
      );
    } else {
      setLogoThumUrl(null);
      setLogoThum(
        "https://static.vecteezy.com/system/resources/thumbnails/000/421/494/small_2x/Multimedia__28128_29.jpg"
      );
    }
  };

  const handleUpload = async () => {
    try {
      await addDoc(collection(db, "events"), {
        title,
        eventDate,
        imageUrl: thumbnailUrl,
        galletyLogo: logoThumUrl,
      });
      navigate("/event");
      toast.success("Event uploaded successfully!");
    } catch (error) {
      console.error("Error uploading event:", error);
      toast.error("Failed to upload event.");
    }
  };

  const triggerFileInput = (id) => {
    document.getElementById(id).click();
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
          <img
            src={uploadThum}
            alt="Upload Thumbnail"
            className="uploadThum"
            onClick={() => triggerFileInput("fileupload")}
          />
          <div className="titleContainer">
            <img
              src={logoThum}
              alt="Logo Thumbnail"
              className="uploadThum"
              onClick={() => triggerFileInput("logofile")}
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleEventImgChange}
              id="logofile"
              style={{ display: "none" }}
            />
            <input
              type="text"
              placeholder="Event Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="imageTitle"
            />
            <input
              type="text"
              placeholder="Event Date"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              className="imageTitle"
            />
          </div>
        </div>

        {uploadProgress > 0 && <p>Upload Progress: {uploadProgress}%</p>}
        <div className="uploadImageButton" onClick={handleUpload}>
          <h2>Upload Event</h2>
        </div>
      </div>
    </div>
  );
};

export default PostEvent;
