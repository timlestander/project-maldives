import { Title, Value, Wrapper } from "./InfoBox.styles";

type Props = {
  title: string;
  value: number;
  suffix: string;
}

export const InfoBox: React.FC<Props> = ({ title, value, suffix }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Value>{value}{suffix && suffix}</Value>
    </Wrapper>
  )
}

export default InfoBox;