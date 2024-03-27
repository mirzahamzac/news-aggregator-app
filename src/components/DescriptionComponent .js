import React, { useState } from 'react';
import Typography from "@mui/material/Typography";

const DescriptionComponent = ({ description  }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <Typography variant="body2" color="text.secondary">
    {description && description.length > 100 ? (
      showFullDescription ? (
        <p>{description}</p>
      ) : (
        <p>
          {description.slice(0, 100)}...{" "}
          <a href="#learn-more" onClick={toggleDescription}>
            Learn More
          </a>
        </p>
      )
    ) : (
      <p>{description}</p>
    )}
  </Typography>
  );
};

export default DescriptionComponent;
