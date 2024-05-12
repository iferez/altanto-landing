import React from "react";
import { Card, CardContent, Typography, Box, IconButton } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";

function Report({ title, description, dtime, icon, icolor }) {
  const Icono = icon;

  return (
    <Card variant="outlined" className="at-report">
      <CardContent>
        <Box
          marginBottom="12px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          className="at-report-header"
        >
          <Typography variant="h6" component="h4">
            {title}
          </Typography>
          <IconButton style={{ color: icolor }}>
            <Icono />
          </IconButton>
        </Box>
        <Typography variant="body1" color="textSecondary" component="p">
          {description}
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body1" color="textSecondary" component="small">
            {dtime}
          </Typography>
          <IconButton>
            <ThumbUpIcon style={{ color: "#537ac9" }} />
          </IconButton>
          <IconButton>
            <ThumbDownAltIcon style={{ color: "#cc545d" }} />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
}

export default Report;
