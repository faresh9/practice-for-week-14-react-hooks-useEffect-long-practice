import { useEffect, useState } from "react";

function Message({ size }) {
  const [sizeClass, setSizeClass] = useState("");
  const [message, setMessage] = useState("");
  useEffect(() => {
    console.log("PictureDisplay size", size);
    let cname = "";
    switch (size) {
      case "m":
        cname = "medium";
        break;
      case "l":
        cname = "large";
        break;
      case "xl":
        cname = "xlarge";
        break;
      default:
        cname = "small";
        break;
    }
    setSizeClass(cname);
    //console.log(cname);
  }, [size]);

  return <div className={`message ${sizeClass}`}>{message}</div>;
}

export default Message;
