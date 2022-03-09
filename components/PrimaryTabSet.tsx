import * as React from 'react';

import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton'

import { IconContext } from "react-icons";
import { SiPython } from 'react-icons/si';
import { GrGolang } from 'react-icons/gr';
import { FaRust } from 'react-icons/fa';
import { FiCode } from 'react-icons/fi';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function ColoredReactIcon({ children }){
  return(
    <IconContext.Provider value={{ color: "coral", className: "global-class-name" }}>
      {children}
    </IconContext.Provider>
  )
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function PrimaryTabSet() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper', width: 1200 }}>
      <AppBar position="static" color="transparent">
        <Tabs          
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Python" icon={<IconButton aria-label="Python"><SiPython /></IconButton>} aria-label="phone"  {...a11yProps(0)} />
          <Tab label="Go Lang" icon={<IconButton aria-label="Golang"><FiCode /></IconButton>} aria-label="phone"  {...a11yProps(1)} />
          <Tab label="Rust" icon={<IconButton aria-label="Rust"><FaRust /></IconButton>} aria-label="phone" {...a11yProps(2)} />
        </Tabs>
      </AppBar>      
        <TabPanel value={value} index={0} dir={theme.direction}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
      
    </Box>
  );
}
