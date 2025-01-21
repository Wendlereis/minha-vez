import { useState } from 'react';
import { Input, Label, Option, OptionsWrapper, Wrapper } from './styles';
import { GenderIcon } from '@shared/components/GenderIcon';
import { Gender } from '@shared/types';

export function GenderSelector() {
  const [gender, setGender] = useState<Gender>();

  return (
    <Wrapper>
      <Label color="text.heading.dark">Gênero</Label>
      <OptionsWrapper>
        <Input
          type="radio"
          name="gender"
          id="female"
          value="female"
          onChange={(e) => setGender(e.target.value as Gender)}
        />
        <Option htmlFor="female" selected={gender === 'female'} tabIndex={0}>
          <GenderIcon gender="female" size="large" />
          Feminino
        </Option>
        <Input
          type="radio"
          name="gender"
          id="male"
          value="male"
          onChange={(e) => setGender(e.target.value as Gender)}
        />
        <Option htmlFor="male" selected={gender === 'male'} tabIndex={0}>
          <GenderIcon gender="male" size="large" />
          Masculino
        </Option>
      </OptionsWrapper>
    </Wrapper>
  );
}
