import { FooterContainer } from './styles'

export function Footer() {
  return (
    <FooterContainer className="container">
      <div>
        <a href="#">
          <strong>FitDicas 💪</strong>
        </a>
        <p>
          Esse site te ajuda com dicas preciosas para você não perder seu tempo
          procurando informações em diversos lugares.
        </p>
      </div>

      <div>
        Desenvolvido por <strong>Kayke Alves</strong>
      </div>
    </FooterContainer>
  )
}
