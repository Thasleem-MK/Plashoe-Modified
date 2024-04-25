import { useEffect } from "react";

function TitleHook(title) {
  useEffect(() => {
    document.title = `${title} - Recycled Shoe Store`;
  }, [title]);
}

export default TitleHook;
