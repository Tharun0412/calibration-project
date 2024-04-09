import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import ReportIcon from "@mui/icons-material/Report";
import MenuIcon from "@mui/icons-material/Menu";
import "../styles/Sidebar.css";

const Sidebar = () => {
  const [open, setOpen] = React.useState(true);
  const [reportExpanded, setReportExpanded] = React.useState(false);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  const toggleReport = () => {
    setReportExpanded(!reportExpanded);
  };

  return (
    <Box>
      <MenuIcon
        sx={{
          position: "fixed",
          top: 30,
          left: 150,

          zIndex: 10,
          cursor: "pointer",
          border: "1px solid black",
          fontSize: "3.8rem",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={toggleSidebar}
      />
      <Box
        sx={{
          width: 250,
          backgroundColor: "#f0f0f0",
          height: "100vh",
          position: "fixed",
          top: 150,
          left: open ? 0 : -250,
          transition: "left 0.3s ease-in-out",
        }}
      >
        <List>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="HOME" />
          </ListItemButton>
        </List>
        <Divider />
        <List>
          <ListItemButton onClick={toggleReport}>
            <ListItemIcon>
              <ReportIcon />
            </ListItemIcon>
            <ListItemText primary="REPORT" />
          </ListItemButton>
          {reportExpanded && (
            <List>
              <ListItemButton>
                <ListItemText inset primary="Sub Report 1" />
              </ListItemButton>
              <ListItemButton>
                <ListItemText inset primary="Sub Report 2" />
              </ListItemButton>
            </List>
          )}
        </List>
        <Divider />
      </Box>
    </Box>
  );
};

export default Sidebar;
