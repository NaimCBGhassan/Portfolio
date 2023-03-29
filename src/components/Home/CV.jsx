import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function CV({ open, setOpen }) {
  const descriptionElementRef = useRef(null);

  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        scroll={"paper"}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">CV PREVIEW</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <embed src="/public/CV.pdf" type="application/pdf" width="500px" height="500px" />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const Button = styled.button`
  font-size: 1.2rem;
  font-weight: bold;
  color: #ffffff;
  background-color: transparent;
  padding: 0.7rem 1.3rem;
  background-color: #e91e63;
  border-radius: 0.5rem;

  &:hover {
    color: #e91e63;
    background-color: #e91e6399;
  }
`;
