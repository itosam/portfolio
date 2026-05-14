import { useEffect, useState } from "react";
import Load from "./Load";

const AssetLoader = ({ assets, children, className = "", dark = false }) => {
  const [loading, setLoading] = useState(assets.length > 0);

  useEffect(() => {
    if (assets.length === 0) {
      setLoading(false);
      return undefined;
    }

    let isMounted = true;
    let loadedCount = 0;

    setLoading(true);

    const handleAssetComplete = () => {
      loadedCount += 1;

      if (isMounted && loadedCount >= assets.length) {
        setLoading(false);
      }
    };

    const images = assets.map((asset) => {
      const image = new Image();
      image.onload = handleAssetComplete;
      image.onerror = handleAssetComplete;
      image.src = asset;
      return image;
    });

    return () => {
      isMounted = false;
      images.forEach((image) => {
        image.onload = null;
        image.onerror = null;
      });
    };
  }, [assets]);

  if (loading) {
    return (
      <div className={`flex min-h-screen items-center justify-center ${dark ? "bg-black text-white" : "bg-[#F0F6F6] text-black"} ${className}`}>
        <Load />
      </div>
    );
  }

  return children;
};

export default AssetLoader;
