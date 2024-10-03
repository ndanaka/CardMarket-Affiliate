import React, { useState } from "react";

import LevelOverview from "../../homepage/levelUpgrade/LevelOverview";
import ImageUpload from "./ImageUpload";

const Rank = () => {
  const [count, setCount] = useState(1);

  return (
    <>
      <LevelOverview />
      {/* <ImageUpload /> */}
    </>
  );
};

export default Rank;
