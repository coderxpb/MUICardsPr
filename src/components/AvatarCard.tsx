import { Avatar, Card, CardContent, Stack, Typography } from '@mui/material';
import { ReactElement } from 'react';
import { IReviewData } from '../IReviewData';

interface PropsType {
  user: IReviewData;
  align?: string;
}
export const AvatarCard = (props: PropsType) => {
  const { align, user } = props;

  console.log(user.avatar);
  return (
    <Stack
      sx={{
        maxWidth: 600,
        alignItems: 'center',
        alignSelf: align || 'flex-start',
      }}>
      <Avatar
        sx={{
          width: 72,
          height: 72,
          top: 40,
        }}
        alt={user.name}
        src={user.avatar}
      />
      <Card sx={{ borderRadius: 4, maxWidth: 500 }}>
        <CardContent>
          <Stack
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: '40px',
            }}
            spacing={1}>
            <Typography
              sx={{ fontSize: 18, fontWeight: 500, textAlign: 'center' }}>
              {user.description}
            </Typography>
            <Typography sx={{ fontSize: 16, fontWeight: 700 }}>
              {user.name}
            </Typography>
            <Typography sx={{ fontSize: 12, fontWeight: 300 }}>
              {user.role}
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
};
