import { data } from '../tempData';
import { useState } from 'react';
import {Avatar, IconButton, Stack} from '@mui/material';
import { AvatarCard } from './AvatarCard';
import { IReviewData } from '../IReviewData';

export const CardContainer = () => {
  const [centerCard, setCenterCard] = useState<IReviewData>(data[2]);
  const [leftCard, setLeftCard] = useState<IReviewData>(data[1]);
  const [rightCard, setRightCard] = useState<IReviewData>(data[3]);

  return (
    <Stack
      direction={'row'}
      sx={{ justifyContent: 'center', height: 330 }}
      spacing={10}>
      <AvatarCard user={rightCard} align={'flex-end'} />
      <Stack spacing={4}>
        <AvatarCard user={centerCard} align={'flex-start'} />


      </Stack>

      <AvatarCard user={leftCard} align={'flex-end'} />
    </Stack>
  );
};
