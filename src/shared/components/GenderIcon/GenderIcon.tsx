import { GenderIconProps } from './types';
import { Icon } from './styles';
import { Gender } from '@shared/types';

function getImageAttributes(gender: Gender) {
  switch (gender) {
    case 'female':
      return {
        src: 'assets/icons/female.png',
        alt: 'símbolo feminino',
      };

    case 'male':
      return {
        src: 'assets/icons/male.png',
        alt: 'símbolo masculino',
      };
  }
}

export function GenderIcon({ gender, size }: GenderIconProps) {
  return <Icon size={size} {...getImageAttributes(gender)} />;
}
