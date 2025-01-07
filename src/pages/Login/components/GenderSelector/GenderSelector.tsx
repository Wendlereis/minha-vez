import { useState } from 'react';
import { Icon, Input, Label, Option, OptionsWrapper, Wrapper } from './styles';

export function GenderSelector() {
  const [gender, setGender] = useState<string>();

  return (
    <Wrapper>
      <Label color="text.heading.dark">Gênero</Label>
      <OptionsWrapper>
        <Input
          type="radio"
          name="gender"
          id="female"
          value="female"
          onChange={(e) => setGender(e.target.value)}
        />
        <Option htmlFor="female" selected={gender === 'female'} tabIndex={0}>
          <Icon src="assets/icons/female.png" alt="símbolo feminino" />
          Feminino
        </Option>
        <Input
          type="radio"
          name="gender"
          id="male"
          value="male"
          onChange={(e) => setGender(e.target.value)}
        />
        <Option htmlFor="male" selected={gender === 'male'} tabIndex={0}>
          <Icon src="assets/icons/male.png" alt="símbolo masculino" />
          Masculino
        </Option>
      </OptionsWrapper>
    </Wrapper>
  );
}
