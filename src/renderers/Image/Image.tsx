import { useState } from "react";
import * as React from "react";
import { InputLabel, Box, TextField, Button } from "@mui/material";

interface ImageProps {
  id?: string;
  value: string;
  updateValue: (newValue: string) => void;
  label: any;
  schema: any;
  uischema: any;
}

export const Image: React.FC<ImageProps> = ({
  id,
  value,
  updateValue,
  label,
  schema,
  uischema,
}) => {
  let fullId = "#properties/" + id;
  let imagePath = uischema.options.imagePath;
  let imageLabel = label ? (
    <div>
      <label>{label}</label>
    </div>
  ) : (
    ""
  );

  /** Event handler for when user selects a new image from the file browser
   **/
  const handleTheChange = (event) => {
    //converts a File object into a string url that the browser can access
    const objectURL = window.URL.createObjectURL(event.target.files[0]);
    updateValue(objectURL);
    //if you open the value, it will load the previous image because it is still being set
    //while the window is opening, the value is set to the correct path.
    window.open(objectURL);
  };

  return (
    <div id={fullId} className="image">
      <h1>{imageLabel}</h1>
      <Box sx={{ height: 50, width: "100%", display: "flex" }}>
        <input
          id="outlined-basic"
          accept="image/*"
          type="file"
          onChange={handleTheChange}
        ></input>
      </Box>
      <img src={value} alt="no value" width="24" height="39" />
    </div>
  );
};
