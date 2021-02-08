import React, { FC } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@material-ui/core";

interface Props {
  open: boolean;
  onClose: () => void;
}

const InformationDialog: FC<Props> = ({ open, onClose }) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle>Applikation installieren</DialogTitle>
    <DialogContent>
      <Typography variant="body1" gutterBottom>
        Falls der Button deaktiviert ist, kann die Installation folgendermaßen
        manuell durchgeführt werden:
      </Typography>
      <ol style={{ fontSize: 16 }}>
        <li>Kontextmenü rechts oben in der Ecke öffnen (Drei-Punkte-Menü)</li>
        <li>Menüpunkt "Arbeitszeitrechner installieren..." auswählen</li>
      </ol>
    </DialogContent>
    <DialogActions>
      <Button variant="text" color="primary" onClick={onClose}>
        Verstanden
      </Button>
    </DialogActions>
  </Dialog>
);

export default InformationDialog;
