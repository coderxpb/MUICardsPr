import {Avatar, Card, CardContent, Stack, Typography} from "@mui/material";

interface IAvatarCard{
  avatar: string
  title: string
  subtitle: string
  description: string
}

export const AvatarCard = (props: IAvatarCard) => {
  const {avatar, title, subtitle, description} = props;

  return (
    <Card sx={{maxWidth: 600, background: "mistyrose"}}>
      <CardContent>
        <Stack sx={{justifyContent: "center", alignItems: "center"}}>
          <Avatar alt={title} src={avatar}/>
          <Typography>{description}</Typography>
          <Typography>{title}</Typography>
          <Typography>{subtitle}</Typography>
        </Stack>
      </CardContent>
    </Card>
  )
}