import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, BotaoTema, SidebarSticky } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarSticky>
      <Avatar />
      <Titulo fontSize={20}>Daniel Cardoso</Titulo>
      <Paragrafo tipo="secundario">danieltwentynine</Paragrafo>
      <Descricao fontSize={12} tipo={'principal'}>
        Engenheiro da Computação
      </Descricao>
      <BotaoTema>Troca Tema</BotaoTema>
    </SidebarSticky>
  </aside>
)

export default Sidebar
