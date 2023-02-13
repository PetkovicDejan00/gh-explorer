import React from 'react'
import {
    ReposContainer, 
    RepoCard, 
    CardHeader, 
    RepoStats, 
    RepoName
} from './css/Container.styled'
import ForkIcon from '../../assets/gh-fork-icon.png'
import StarIcon from '../../assets/gh-star-icon.png'
import LoadingCircle from '../../components/LoadingCircle/LoadingCircle'
import {Link} from 'react-router-dom'

const RepositoriesContainer = ({repositories, isFetching}) => {

return (
    <ReposContainer>
        {repositories.map((repository) => {
            const {id, forks, stargazers_count: stars, full_name} = repository
            const {avatar_url, login: ownerName} = repository.owner
            return (
                <RepoCard key={id}>
                    {isFetching ? <LoadingCircle /> : 
                    <>
                    <CardHeader>
                        <img src={avatar_url} />
                        <Link to={`/repository/${full_name}`}>{full_name}</Link>
                    </CardHeader>
                    <RepoName>{ownerName}</RepoName>
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