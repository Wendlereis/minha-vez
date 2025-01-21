import { GenderIconProps, IconAttributes } from './types';
import { Icon } from './styles';

const iconAttributes: IconAttributes = {
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
  return <Icon size={size} {...iconAttributes[gender]} />;
}
