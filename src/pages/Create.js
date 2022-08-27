import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
const useStyles = makeStyles({});
export default function Create() {
  const classes = useStyles();
  return (
    <Container>
      {/* <Typography variant="h1" color="primary" align="center">
        Create a New Note
      </Typography> */}
      <Typography
        variant="h6"
        component="h2"
        color="textSecondary"
        gutterBottom
      >
        Create a New Note
      </Typography>
      <Button
        className={classes.btn}
        type="submit"
        color="secondary"
        variant="contained"
        onClick={() => {
          alert("You clicked me");
        }}
        endIcon={<ArrowForwardIosSharpIcon />}
      >
        Submit
      </Button>
      {/* icons */}
      <br />
    </Container>
  );
}
