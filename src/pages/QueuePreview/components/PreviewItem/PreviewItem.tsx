import { Typography } from '@shared/components/Typography';
import { theme } from '@shared/theme';
import { Circle, Content, Item } from './styles';
import { PreviewItemProps } from './types';

export function PreviewItem({ title, description, number }: PreviewItemProps) {
  return (
    <Item>
      <div>
        <Circle>
          <Typography variant="H2" color={theme.colors.text.heading.light}>
            {number}
          </Typography>
        </Circle>
      </div>
      <Content>
        <Typography variant="H3" color={theme.colors.text.heading.dark}>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Content>
    </Item>
  );
}
