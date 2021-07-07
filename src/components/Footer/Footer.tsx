import React from 'react';
import {
  DivMobileApps,
  ButtonOffers,
  DivApps,
  DivOffers,
  FooterBlock,
  DivContactsLink,
  ContactsLinkGrid,
  DivContacts,
  InputOffers,
  UlLinks,
  LinksOptions,
  TitleOption,
  DivPayment,
  DivPaymentAcce,
  SocialIcons,
  TitlePaymentAcce,
  DivSocial,
  DivAcce,
  DivCopyAndComplain,
  CopyAndComplainGrid,
  Copyright,
  Complaints,
} from './style';

import googlePlay from '../../assets/images/google-play.webp';
import appStore from '../../assets/images/app-store.webp';
import attendance from '../../assets/icons/ico-attendance.svg';
import faq from '../../assets/icons/ico-faq.svg';
import invoice from '../../assets/icons/ico-invoice-and-statement.svg';
import work from '../../assets/icons/ico-work-with-us.svg';
import complaints from '../../assets/images/ra1000.webp';
import accessibility from '../../assets/images/ico-a11y.webp';
import linkedin from '../../assets/icons/ico-linkedin.svg';
import youtube from '../../assets/icons/ico-youtube.svg';
import twitter from '../../assets/icons/ico-twitter.svg';
import pinterest from '../../assets/icons/ico-pinterest.svg';
import instagram from '../../assets/icons/ico-instagram.svg';
import facebook from '../../assets/icons/ico-facebook.svg';
import rchlo1 from '../../assets/images/ico-cartao-rchlo1.webp';
import rchlo2 from '../../assets/images/ico-cartao-rchlo2.webp';
import rchlo3 from '../../assets/images/ico-cartao-rchlo3.webp';
import visa from '../../assets/images/ico-cartao-visa.png';
import master from '../../assets/images/ico-cartao-master.webp';
import amex from '../../assets/images/ico-cartao-amex.webp';
import diners from '../../assets/images/ico-cartao-diners.png';
import elo from '../../assets/images/ico-cartao-elo.png';
import boleto from '../../assets/images/ico-boleto.webp';
import paypal from '../../assets/images/ico-paypal.png';

export const Footer: React.FC = () => (
  <FooterBlock>
    <DivApps>
      <DivOffers>
        <p>Receba ofertas e novidades por e-mail</p>
        <form>
          <InputOffers type="email" placeholder="Digite aqui seu e-mail" />
          <ButtonOffers>Cadastrar</ButtonOffers>
        </form>
      </DivOffers>
      <DivMobileApps>
        <p>Baixe nosso App</p>
        <div>
          <img src={googlePlay} alt="Google Play" />
          <img src={appStore} alt="App Store" />
        </div>
      </DivMobileApps>
    </DivApps>
    <DivContactsLink>
      <ContactsLinkGrid>
        <DivContacts>
          <div>
            <img src={attendance} alt="atendimento" />
            <p>Atendimento</p>
          </div>
          <div>
            <img src={faq} alt="Perguntas frequentes" />
            <p>Perguntas frequentes</p>
          </div>
          <div>
            <img src={invoice} alt="Fatura e Extrato" />
            <p>Fatura e Extrato</p>
          </div>
          <div>
            <img src={work} alt="Trabalhe conosco" />
            <p>Trabalhe conosco</p>
          </div>
        </DivContacts>
        <div>
          <UlLinks>
            <LinksOptions>
              <div>
                <TitleOption>Cartão Riachuelo</TitleOption>
                <ul>
                  <li>
                    <a href="/#">Midway Financeira</a>
                  </li>
                  <li>
                    <a href="/#">Saiba como adquirir</a>
                  </li>
                  <li>
                    <a href="/#">Veja sua fatura e extrato</a>
                  </li>
                  <li>
                    <a href="/#">Buscando quitar suas dívidas?</a>
                  </li>
                </ul>
              </div>
            </LinksOptions>
            <LinksOptions>
              <div>
                <TitleOption>Sobre a Riachuelo</TitleOption>
                <ul>
                  <li>
                    <a href="/#">A Empresa</a>
                  </li>
                  <li>
                    <a href="/#">Portal de Fornecedores</a>
                  </li>
                  <li>
                    <a href="/#">Relação com Investidores</a>
                  </li>
                  <li>
                    <a href="/#">Assessoria de Imprensa</a>
                  </li>
                  <li>
                    <a href="/#">Trabalhe Conosco</a>
                  </li>
                  <li>
                    <a href="/#">Programa Jovem Aprendiz</a>
                  </li>
                  <li>
                    <a href="/#">Cadastro de Startups</a>
                  </li>
                  <li>
                    <a href="/#">Mapa do Site</a>
                  </li>
                  <li>
                    <a href="/#">Guide Shop</a>
                  </li>
                  <li>
                    <a href="/#">Venda na Riachuelo Marketplace</a>
                  </li>
                </ul>
              </div>
            </LinksOptions>
            <LinksOptions>
              <div>
                <TitleOption>Moda que Transforma</TitleOption>
                <ul>
                  <li>
                    <a href="/#">Na prática</a>
                  </li>
                  <li>
                    <a href="/#">Entre Costuras</a>
                  </li>
                  <li>
                    <a href="/#">Jeans Mais Transparente</a>
                  </li>
                  <li>
                    <a href="/#">Ações Covid-19</a>
                  </li>
                  <li>
                    <a href="/#">Free Free</a>
                  </li>
                </ul>
              </div>
            </LinksOptions>
            <LinksOptions>
              <div>
                <TitleOption>Ajuda</TitleOption>
                <ul>
                  <li>
                    <a href="/#">Atendimento</a>
                  </li>
                  <li>
                    <a href="/#">Perguntas Frequentes</a>
                  </li>
                  <li>
                    <a href="/#">Trocas e Devoluções</a>
                  </li>
                  <li>
                    <a href="/#">Portal da Privacidade</a>
                  </li>
                  <li>
                    <a href="/#">Política de Privacidade</a>
                  </li>
                  <li>
                    <a href="/#">Termos e Condições de Uso</a>
                  </li>
                  <li>
                    <a href="/#">Regras e Resultados de Sorteios</a>
                  </li>
                </ul>
              </div>
            </LinksOptions>
          </UlLinks>
        </div>
      </ContactsLinkGrid>
    </DivContactsLink>
    <DivPaymentAcce>
      <DivPayment>
        <TitlePaymentAcce>Formas de Pagamento</TitlePaymentAcce>
        <img src={rchlo1} alt="rchlo1" />
        <img src={rchlo2} alt="rchlo2" />
        <img src={rchlo3} alt="rchlo3" />
        <img src={visa} alt="visa" />
        <img src={master} alt="master" />
        <img src={amex} alt="amex" />
        <img src={diners} alt="diners" />
        <img src={elo} alt="elo" />
        <img src={boleto} alt="boleto" />
        <img src={paypal} alt="paypal" />
      </DivPayment>
      <DivSocial>
        <TitlePaymentAcce>Siga a Riachuelo</TitlePaymentAcce>
        <SocialIcons>
          <img src={facebook} alt="Facebook" />
          <div>
            <img src={instagram} alt="Instagram" />
            <p>RCHLO</p>
          </div>
          <div>
            <img src={instagram} alt="Instagram" />
            <p>CASA RCHLO</p>
          </div>
          <img src={pinterest} alt="Pinterest" />
          <img src={twitter} alt="Twitter" />
          <img src={youtube} alt="Youtube" />
          <img src={linkedin} alt="LinkedIn" />
        </SocialIcons>
      </DivSocial>
      <DivAcce>
        <TitlePaymentAcce>Acessibilidade</TitlePaymentAcce>
        <img src={accessibility} alt="Acessibilidade" />
      </DivAcce>
    </DivPaymentAcce>
    <DivCopyAndComplain>
      <CopyAndComplainGrid>
        <Copyright>
          <p>
            © Copyright 2017 - 2019. Todos os direitos reservados. Lojas
            Riachuelo S/A. Rua Landri Sales, 1.070, G02 Anexo B, Guarulhos - SP
            - Brasil CEP 07250-130 CNPJ 33.200.056/0441-97 | IE 796.420.926.112
            | SAC 4003-0515.Direção de fotografia de produtos por Adriano
            Adrião. Pagamento com Cartão Riachuelo, parcelas mínimas de R$
            15,00. Para os demais cartões Visa, Mastercard, Elo, Diners,
            Hipercard e American Express, parcelas mínimas de R$ 30,00. * COMPRE
            NO SITE e RETIRE NA LOJA com FRETE GRÁTIS, conforme lojas
            participantes. Consulte as lojas participantes nas opções de frete
            do seu pedido, conforme CEP de entrega cadastrado. Frete único de R$
            4,99 para Sul e Sudeste em compras a partir de R$ 129,00. Demais
            regiões o valor estará sujeito a variações. Condição por tempo
            indeterminado, para tipo de entrega “normal”. Preços, promoções,
            condições de pagamento, valores de frete e disponibilidade de
            estoque são aplicados somente nas compras efetuadas na loja online
            Riachuelo. Existe uma limitação de peças iguais no mesmo pedido que
            muda de acordo com o tipo de produto. Em caso de divergência de
            valores entre a página do produto e a Sacola de Compras, a Riachuelo
            se reserva a garantir o valor exibido na Sacola de Compras.
          </p>
        </Copyright>
        <Complaints>
          <img src={complaints} alt="Complaints" />
        </Complaints>
      </CopyAndComplainGrid>
    </DivCopyAndComplain>
  </FooterBlock>
);
