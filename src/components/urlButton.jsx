import { Button } from '@mui/material';
import { useHandleUrl } from '@/pages/mbti';

export default function UrlButton({ children, url, ...props }) {
  const handleUrl = useHandleUrl();

  return (
    <Button onClick={() => handleUrl(url)} {...props}>
      {children}
    </Button>
  );
}
