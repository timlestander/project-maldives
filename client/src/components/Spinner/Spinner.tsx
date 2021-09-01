import { Wrapper, Text, Image } from "./Spinner.styles"
import image from '../../assets/frozen-daiquiri.png';

export const Spinner = () => {
  return (
    <Wrapper>
      <Image src={image}></Image>
      <Text>LADDAR IN GULDET</Text>
    </Wrapper>
  )
}