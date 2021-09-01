import { Link } from 'react-router-dom';
import { Wrapper, Logo, Navbar,  } from './Header.styles';

const Header = () => {
  return (
    <Wrapper>
      <Logo>BankBankBank</Logo>
      <Navbar>
        <Link to="/">Översikt</Link>
        <Link to="/graphs">Träffligan</Link>
        <Link to="/graphs">Vinstligan</Link>
      </Navbar>
    </Wrapper>
  )
}

export default Header;