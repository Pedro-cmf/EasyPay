import { FooterContainer } from './footerStyles';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <span>&copy; {currentYear}</span> EasyPay Instituição de Pagamento S/A
      <span>|</span> CNPJ 00.000.000/0000-21
      <span>|</span> Brasília - DF
    </FooterContainer>
  );
}

export default Footer;
