import { Box, Text, Button } from '@mantine/core';
import React from 'react';

const Donate = () => {
  return (
    <Box>
      <Text>Please consider supporting me and donating a small amount!</Text>
      <Text></Text>
      <br></br>
      <VenmoProfile></VenmoProfile>
    </Box>
  );
};
function VenmoDonateButton() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html:
          '<iframe src="https://venmo.com/btn/donate_yellow.html?amount=10&recipients=Matvi-Pronchick&purpose=Donation&compact=true" width="100" height="25" frameborder="0" scrolling="no"></iframe>',
      }}
    ></div>
  );
}

const VenmoProfile = () => {
  return (
    <Box>
      {' '}
      <a href="https://venmo.com/Matvi-Pronchick?embed=true">
        <Button> Venmo</Button>
      </a>
    </Box>
  );
};

export default Donate;
