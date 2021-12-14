import { Avatar, IconButton, Stack } from '@mui/material';
import blueLeftArrow from '../assets/blue-left-arrow.png';

interface PropTypes {
  onLeftClicked(): void;
  onRightClicked(): void;
}

export const ButtonGroup = (props: PropTypes) => {
  const { onLeftClicked, onRightClicked } = props;
  return (
    <Stack direction={'row'} spacing={4}>
      <IconButton sx={{ width: 44, height: 44 }} onClick={onLeftClicked}>
        <Avatar src={blueLeftArrow} />
      </IconButton>
      <IconButton sx={{ width: 44, height: 44, transform: 'rotate(180deg)' }} onClick={onRightClicked}>
        <Avatar src={blueLeftArrow} />
      </IconButton>
    </Stack>
  );
};
