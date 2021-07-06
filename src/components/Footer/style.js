import styled from 'styled-components'

export const FooterBlock = styled.footer`
  border-top: 3px solid #00000042;
  width: 100%;
`

export const DivApps = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 30px auto;
  column-gap: 10px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
`

export const DivOffers = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  text-transform: uppercase;
  color: #585858;
  font-weight: 600;
`

export const InputOffers = styled.input`
  width: 174px;
  border: 0;
  border-bottom: 2px solid #00000042;
  padding: 5px 0 5px;
  margin: 0 10px;
  outline: 0;
  color: #585858;
  font-weight: 600;
  font-style: italic;
  padding-right: 40px;
  transition: border-bottom 0.3s ease-in-out;
  &:hover,
  &:focus {
    border-bottom: 2px solid #585858;

    &::-webkit-input-placeholder {
      color: #00000042;
    }
  }
`

export const ButtonOffers = styled.button`
  color: #585858;
  background-color: #00000042;
  border: 0;
  border-radius: 3px;
  font-weight: 500;
  margin: 0;
  padding: 8px 12px;
  text-transform: uppercase;
`

export const DivMobileApps = styled.div`
  display: flex;
  column-gap: 15px;
  align-items: center;
  justify-content: space-around;
  text-transform: uppercase;
  font-weight: 600;
  color: #585858;
  & img {
    width: 100px;
  }
`

export const DivContactsLink = styled.div`
  background-color: #f6f6f6;
  width: 100%;
  padding: 40px 0;
`

export const ContactsLinkGrid = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 3fr;
  padding: 0 30px;
  grid-gap: 40px;
`

export const DivContacts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: start;
  text-align: center;
  cursor: pointer;
  padding-top: 10px;
  padding-right: 25px;
  border-right: 1px solid #00000042;

  & img {
    height: 25px;
    margin-bottom: 10px;
  }

  & p {
    color: #585858;
    font-weight: 600;
    &:hover {
      text-decoration: underline;
    }
  }
`
export const UlLinks = styled.ul`
  display: flex;
  gap: 30px;
  justify-content: flex-end;
  margin-top: 40px;
`

export const LinksOptions = styled.li`
  display: flex;
  color: #000;
  & a {
    font-weight: 400;
    line-height: 30px;
    text-decoration: none;
    font-size: 13px;
    &:hover {
      text-decoration: underline;
    }
  }
`

export const TitleOption = styled.h3`
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 16px;
`

export const DivPaymentAcce = styled.div`
  display: grid;
  grid-template-columns: 4fr 3fr 2fr;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`

export const DivPayment = styled.div`
  padding: 30px;
`

export const TitlePaymentAcce = styled.h3`
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 16px;
`

export const DivSocial = styled.div`
  display: flex;
  padding: 30px;
  flex-direction: column;
`

export const SocialIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: start;
  text-align: center;

  & img {
    height: 25px;
  }

  & p {
    font-size: 12px;
  }
`

export const DivAcce = styled.div`
  padding: 30px;
`

export const DivCopyAndComplain = styled.div`
  background-color: #f6f6f6;
  width: 100%;
`

export const CopyAndComplainGrid = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  padding: 30px;
`

export const Copyright = styled.div`
  font-size: 9px;
`

export const Complaints = styled.div`
  text-align: center;
`
