import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { firestore } from "../firebase";
import "./preview.css";

let PublicPreview = () => {
  let { rid } = useParams();

  let [previewData, setPreviewData] = useState(null);

  useEffect(() => {
    firestore
      .collection("resume")
      .doc(rid)
      .get()
      .then((doc) => {
        let data = doc.data();
        setPreviewData(data);
      });
  }, []);

  return (
    <>
      {previewData ? (
        <>
          <p className={`template-${previewData.code}`}>
            {previewData.details.fname}
          </p>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default PublicPreview;