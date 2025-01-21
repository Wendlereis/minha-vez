import { GenderIconProps, ImageAttributes } from './types';
import { Icon } from './styles';

const imageAttributes: ImageAttributes = {
  female: {
    src: 'assets/icons/female.png',
    alt: 'símbolo feminino',
  },
  male: {
    src: 'assets/icons/male.png',
    alt: 'símbolo masculino',
  },
};

export function GenderIcon({ gender, size }: GenderIconProps) {
  return <Icon size={size} {...imageAttributes[gender]} />;
}
