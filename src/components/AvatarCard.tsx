import { Avatar, Card, CardContent, Stack, Typography } from '@mui/material';
import {ReactElement} from "react";

interface IAvatarCard {
  avatar: string;
  title: string;
  subtitle: string;
  description: string;
  doodle?: ReactElement;
}

export const AvatarCard = (props: IAvatarCard) => {
  const { avatar, title, subtitle, description } = props;
  console.log(avatar);
  return (
    <Stack sx={{maxWidth: 600, alignItems: 'center' }}>
      <Avatar
        sx={{
          width: 72,
          height: 72,
          top: 40,
        }}
        alt={title}
        src={avatar}
      />
      <Card sx={{ maxWidth: 500, background: 'mistyrose'}}>
        <CardContent>
          <Stack sx={{ justifyContent: 'center', alignItems: 'center', paddingTop: '40px' }}>
            <Typography sx={{ fontWeight: 500, textAlign: 'center' }}>
              {description}
            </Typography>
            <Typography sx={{ fontWeight: 700 }}>{title}</Typography>
            <Typography sx={{ fontWeight: 300 }}>{subtitle}</Typography>
          </Stack>
        </CardContent>
      </Card>
    </Stack>

  );
};
