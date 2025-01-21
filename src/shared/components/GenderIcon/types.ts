import { Gender } from '@shared/types';

export type Size = 'small' | 'large';

export interface GenderIconProps {
  gender: Gender;
  size: Size;
}

export type IconProps = Pick<GenderIconProps, 'size'>;
