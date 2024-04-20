import * as React from 'react';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

const Root = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  color: '#ffffff',
  // color: theme.palette.text.primary,
  '& > :not(style) ~ :not(style)': {
    marginTop: theme.spacing(2),
  },
}));

export default function DividerChips({ centerText, leftText, rightText }) {
  return (
    <Root>
      <Divider>{centerText}</Divider>
      {/* {content} */}
      {/* <Divider textAlign="left">{leftText}</Divider> */}
      {/* {content} */}
      {/* <Divider textAlign="right">{rightText}</Divider> */}
      {/* {content} */}
      {/* <Divider>
        <Chip label="Chip" size="small" />
      </Divider> */}
      {/* {content} */}
    </Root>
  );
}
