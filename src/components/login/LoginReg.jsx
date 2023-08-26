import { Grid, Card, Typography, Tabs, Tab, Box } from "@mui/material";
// import login3 from '../../../images/login3.jpg'
import { useState } from "react";
import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import UserLogin from "./UserLogin";
import Registration from "./Registration";
import { hover } from "@testing-library/user-event/dist/hover";
import './LoginReg.css'
import vegelogin1 from '../../assets/vegelogin1.png';

const TabPanel = (props) => {
  const { children, value, index } = props;
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

const LoginReg = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Grid className="loginreg-grid-pic" variant="outlined" container sx={{ height: "100vh" }}>
        <Grid
          item
          lg={7}
          sm={5}
          sx={{
           // backgroundImage: `url("vegelogin")`,
            backgroundImage:`url(${vegelogin1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "570px",
            backgroundPosition: "center",
            //marginTop: "20px",
            display: { xs: "none", sm: "block" },
          }}
        ></Grid>
        <Grid  className="loginreg-grid" item lg={5} sm={7} xs={12}>
          <Card sx={{ width: "90%", marginTop: "100px" }}>
            <Box className="loginreg-box1">
              <Box >
                <Tabs className="loginreg-tabs"
                  value={value}
                  textColor="primary"
                  indicatorColor="primary"
                  onChange={handleChange}
                >
                  <Tab className="loginreg-login"
                    label="Login"
                    sx={{
                      fontWeight: "bold",
                      marginLeft: "90px",
                      justifyContent: "center",
                      color: "green",
                    }}
                  ></Tab>
                  <Tab
                    label="Registration"
                    sx={{
                      fontWeight: "bold",
                      marginLeft: "90px",
                      color: "green",
                    }}
                  ></Tab>
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <UserLogin />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Registration />
              </TabPanel>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default LoginReg;
