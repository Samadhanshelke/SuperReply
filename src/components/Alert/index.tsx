// GlobalAlert.js
import React from 'react';
// import { useAlert } from '@/contexts/AlertContext'; // Adjust the path as per your project structure
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const Alert = () => {
  // const { globalAlert, hideAlert } = useAlert();

  return (
    // <Snackbar
    //   open={globalAlert.open}
    //   autoHideDuration={3000}
    //   onClose={hideAlert}
    //   anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
    //   <MuiAlert
    //     onClose={hideAlert}
    //     severity={globalAlert.severity}
    //     sx={{ width: '100%' }}
    //   >
    //     <AlertTitle>{globalAlert.title}</AlertTitle>
    //     {globalAlert.message}
    //   </MuiAlert>
    // </Snackbar>
    <div>hello</div>
  );
};

export default Alert;
