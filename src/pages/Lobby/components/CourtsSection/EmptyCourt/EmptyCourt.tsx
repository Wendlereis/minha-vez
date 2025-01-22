import { EmptyCourtImage, StyledCard } from './styles';

export function EmptyCourt() {
  return (
    <StyledCard variant="court">
      <EmptyCourtImage
        src="assets/sports-equipment-backpack.webp"
        alt="Mochila com equipamentos de esporte"
      />
    </StyledCard>
  );
}
