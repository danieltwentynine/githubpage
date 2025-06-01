import { useEffect, useState } from 'react'
import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'
import { Card, LinkBotao } from './styles'

interface Repositorio {
  id: number
  name: string
  description: string
  html_url: string
}

const Projeto = () => {
  const nomeUsuario = 'danieltwentynine'
  const [repos, setRepos] = useState<Repositorio[]>([])

  const [erro, setErro] = useState<string | null>(null)

  useEffect(() => {
    fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Erro na resposta da API')
        }
        return res.json()
      })
      .then((resJson) => {
        setRepos(resJson)
      })
      .catch((erro) => {
        console.error('Erro ao buscar repositórios:', erro)
        setErro('Falha ao carregar repositórios. Tente novamente mais tarde.')
      })
  }, [nomeUsuario])

  return (
    <>
      <div style={{ gridColumn: '1 / -1' }}>
        {' '}
        {/* Ocupa toda a largura para o título */}
        <Titulo fontSize={18}>{`Repositórios de ${nomeUsuario}`}</Titulo>
      </div>

      {erro ? (
        <div style={{ gridColumn: '1 / -1' }}>
          <Paragrafo tipo="principal">{erro}</Paragrafo>
        </div>
      ) : repos.length > 0 ? (
        repos.map((repo) => (
          <Card key={repo.id}>
            <Titulo fontSize={16}>{repo.name}</Titulo>
            <Paragrafo tipo="secundario">
              {repo.description || 'Sem descrição'}
            </Paragrafo>
            <LinkBotao href={repo.html_url} target="_blank" rel="noreferrer">
              Visualizar
            </LinkBotao>
          </Card>
        ))
      ) : (
        <div style={{ gridColumn: '1 / -1' }}>
          <Paragrafo tipo="principal">Nenhum repositório encontrado.</Paragrafo>
        </div>
      )}
    </>
  )
}

export default Projeto
