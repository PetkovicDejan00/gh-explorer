import {
    ReposContainer, RepoCard, 
    CardHeader, RepoStats, OwnerName
} from './css/Container.styled'
import ForkIcon from '../../assets/gh-fork-icon.png'
import StarIcon from '../../assets/gh-star-icon.png'
import LoadingCircle from '../../components/LoadingCircle/LoadingCircle'
import {Link} from 'react-router-dom'
import { IRepository } from '../../common/types'

interface Props {
    repositories: IRepository[],
    isFetching: boolean
}

const RepositoriesContainer = ({repositories, isFetching}:Props) => {

return (
    <ReposContainer>
        {repositories.map((repository) => {
            const {id, forks, stargazers_count: stars, full_name, name, owner} = repository
            const {avatar_url, login: ownerName} = owner
            return (
                <RepoCard key={id}>
                    {isFetching ? <LoadingCircle /> : 
                    <>
                        <CardHeader>
                            <img src={avatar_url} />
                            <Link to={`/repository/${full_name}`}>{name}</Link>
                        </CardHeader>
                        <OwnerName>{ownerName}</OwnerName>
                        <RepoStats>
                            <span>
                                <img src={StarIcon} alt="Star icon" />
                                <p>{stars}</p>
                            </span>
                            <span>
                                <img src={ForkIcon} alt="Fork icon" />
                                <p>{forks}</p>
                            </span>
                        </RepoStats>
                    </>
                    }
                </RepoCard>
            )
        })
        }
    </ReposContainer>
)
}

export default RepositoriesContainer