import React from "react";
import AppRoutes from "./AppRoutes";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  contents: {
    padding: '3.5rem 0 2rem 0',
  }, 
}));

function App() {
  const classes = useStyles();

  return (
    <div id="svk">
      <ToastContainer autoClose={3000} hideProgressBar />
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className={classes.contents}> 
              <AppRoutes />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
