import {useContributors} from '../../hooks/useContributors'
import LoadingCircle from '../../components/LoadingCircle/LoadingCircle'
import { ContributorsContainer, Card } from './css/Contributors.styled'
import { IContributor } from '../../common/types'

interface Prop {
    repository: string
}

const Contributors = ({repository}:Prop) => {
    const {isLoading, error, data} = useContributors(`${repository}`)
    const contributors = data?.data
    
    if (isLoading) {
        return <LoadingCircle />
    }
    if (error instanceof Error) {
        return <h2>{error.message}</h2>
      } 
    
    return (
        <div>
            <h2>Contributors List ⬇</h2>
            <ContributorsContainer>
                {contributors.map((contributor:IContributor, index:number) => {
                    const {html_url, login, avatar_url, contributions} = contributor
                    if (index >= 10) {
                        return
                    }
                    return (
                        <Card href={html_url} target="_blank" key={index}>
                            <h4>{login}</h4>
                            <img src={avatar_url} />
                            <p>Number of contributions: {contributions}</p>
                        </Card>
                    )
                })}
            </ContributorsContainer>
        </div>
    )
}

export default Contributors