import { data } from '../tempData';
import { useState } from 'react';
import { Avatar, IconButton, Stack, useMediaQuery } from '@mui/material';
import { AvatarCard } from './AvatarCard';
import { IReviewData } from '../IReviewData';
import { ButtonGroup } from './ButtonGroup';

export const CardContainer = () => {
  const size = data.length;
  const [centerCard, setCenterCard] = useState(2);

  const matches = useMediaQuery('(min-width:1000px)');
  console.log(matches);
  const wrapLeft = (num: number) => (num - 1 >= 0 ? num - 1 : size - 1);
  const wrapRight = (num: number) => (num + 1 <= size - 1 ? num + 1 : 0);
  const onLeftClicked = () => setCenterCard(prevState => wrapLeft(prevState));
  const onRightClicked = () => setCenterCard(prevState => wrapRight(prevState));

  return (
    <Stack
      direction={matches?'row':'column'}
      sx={{ justifyContent: 'center', height: 330}}
      spacing={10}>
      {matches && <AvatarCard user={data[wrapLeft(centerCard)]} align={'flex-end'} />}
      <Stack spacing={4} sx={{alignItems: 'center', justifyContent: 'center'}}>
        <AvatarCard user={data[centerCard]} align={matches?'flex-start':'center'} />
        <ButtonGroup
          onLeftClicked={onLeftClicked}
          onRightClicked={onRightClicked}
        />
      </Stack>
      {matches && <AvatarCard user={data[wrapRight(centerCard)]} align={'flex-end'} />}
    </Stack>
  )
};
