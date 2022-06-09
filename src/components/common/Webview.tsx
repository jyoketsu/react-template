import React, { useState, useRef } from "react";
import Loading from "./Loading";

interface Props {
  uri: string;
  id?: string;
  message?: any;
  targetOrigin?: string;
  refreshCache?: boolean;
  allow?: string;
  style?: React.CSSProperties;
}

export default function Webview({
  uri,
  id,
  message,
  targetOrigin,
  refreshCache,
  allow,
  style,
}: Props) {
  const [loading, setloading] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  let url = uri;
  if (refreshCache) {
    if (url.includes("?")) {
      url = `${url}&var=${new Date().getTime()}`;
    } else {
      url = `${url}?var=${new Date().getTime()}`;
    }
  }

  function handleOnload() {
    setloading(false);
    if (
      iframeRef &&
      iframeRef.current &&
      iframeRef.current.contentWindow &&
      message &&
      targetOrigin
    ) {
      iframeRef.current.contentWindow.postMessage(message, targetOrigin);
    }
  }

  return (
    <div style={{ position: "relative" }}>
      <iframe
        id={id || "web-view"}
        ref={iframeRef}
        name="frame-container"
        className="web-view"
        title={window.name}
        src={url}
        frameBorder="0"
        allowFullScreen
        onLoad={handleOnload}
        allow={allow || ""}
        style={style}
      ></iframe>
      {loading ? <Loading /> : null}
    </div>
  );
}
