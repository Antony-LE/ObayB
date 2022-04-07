/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import './launchButton.scss';
import PropTypes from 'prop-types';

// Import des éléments MUI
import Button from '@mui/material/Button';

function LaunchButton({ handleClickDiagnostic }) {
  return (
    <Button
      onClick={handleClickDiagnostic}
      className="launch-button"
      variant="outlined"
      sx={{
        color: '#E56A4E',
        border: '1px solid #E56A4E',
        margin: '1em',
        ':hover': {
          border: '1px solid #E56A4E',
        },
      }}
    >
      Afficher les astuces !
    </Button>
  );
}

LaunchButton.propTypes = {
  handleClickDiagnostic: PropTypes.func,
};

LaunchButton.defaultProps = {
  handleClickDiagnostic: '',
};

export default LaunchButton;
