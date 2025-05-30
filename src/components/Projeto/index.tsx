import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'

import { Card, LinkBotao } from './styles'

const Projeto = () => {
  return (
    <Card>
      <Titulo>Projeto lista de tarefas</Titulo>
      <Paragrafo tipo="secundario">Lista de tarefas feitas em VueJS</Paragrafo>
      <LinkBotao>Vizualizar</LinkBotao>
    </Card>
  )
}

export default Projeto
