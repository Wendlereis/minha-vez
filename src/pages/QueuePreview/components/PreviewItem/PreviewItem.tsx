import { Typography } from '@shared/components/Typography';
import { Circle, Content, Item } from './styles';
import { PreviewItemProps } from './types';

export function PreviewItem({ title, description, number }: PreviewItemProps) {
  return (
    <Item>
      <div>
        <Circle>
          <Typography variant="h2" color="text.heading.light">
            {number}
          </Typography>
        </Circle>
      </div>
      <Content>
        <Typography variant="h3" color="text.heading.dark">
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Content>
    </Item>
  );
}
