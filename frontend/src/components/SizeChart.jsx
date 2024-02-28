import { useState } from "react";
import { Button, Modal, Typography } from "@mui/material";

const SizeChartModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpenAndClose = () => {
    setOpen(!open);
  };

  return (
    <>
      <Button
        style={{ backgroundColor: "black", color: "white" }}
        variant="outlined"
        onClick={handleOpenAndClose}
      >
        Size Chart
      </Button>
      <Modal
        open={open}
        onClose={handleOpenAndClose}
        aria-labelledby="size-chart-modal-title"
        aria-describedby="size-chart-modal-description"
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <Typography variant="h5" id="size-chart-modal-title" gutterBottom>
            TrendFlare Size Chart
          </Typography>
          <Typography
            variant="body1"
            id="size-chart-modal-description"
            gutterBottom
          >
            Find the right size for you with this chart!
          </Typography>
          <Typography variant="body1" gutterBottom>
            Small: Chest 34"-36", Waist 28"-30"
          </Typography>
          <Typography variant="body1" gutterBottom>
            Medium: Chest 38"-40", Waist 32"-34"
          </Typography>
          <Typography variant="body1" gutterBottom>
            Large: Chest 42"-44", Waist 36"-38"
          </Typography>
          <Typography variant="body1" gutterBottom>
            X-Large: Chest 46"-48", Waist 40"-42"
          </Typography>
          <Button
            variant="outlined"
            onClick={handleOpenAndClose}
            style={{ marginTop: "20px" }}
          >
            Close
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default SizeChartModal;
