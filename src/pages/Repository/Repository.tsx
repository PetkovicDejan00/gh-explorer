import React from 'react'
import Contributors from '../../containers/Contributors/Contributors'
import AppliedLanguages from '../../containers/AppliedLanguages/AppliedLanguages'
import { useParams } from 'react-router-dom'
import {useSingleRepo} from '../../hooks/useSingleRepo'
import LoadingCircle from '../../components/LoadingCircle/LoadingCircle'
import {RepositoryContainer, Avatar, RepoStats} from './css/Repository.styled'
import ForkIcon from '../../assets/gh-fork-icon.png'
import StarIcon from '../../assets/gh-star-icon.png'
import { ErrorMessage } from '../Framework/css/Framework.styled'
import { IRepository } from '../../common/types'

const Repository = () => {
  const { '*': repository } = useParams()

  const {isLoading, error, data} = useSingleRepo(repository)
  const repoData = data?.data
  if (isLoading) return <LoadingCircle />

  if (error instanceof Error) {
    return <ErrorMessage>{error.message}</ErrorMessage>
  } 
  
  const {stargazers_count: stars, forks, open_issues, owner}:IRepository = repoData
  const {login: owner_name, avatar_url} = owner
  return (
    <RepositoryContainer>
      <div>
        <h2>{owner_name}</h2>
        <Avatar src={avatar_url} />
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
        <h3>Number of open issues: {open_issues}</h3>
        {repository && <AppliedLanguages repository={repository}/>}
      </div>
      {repository && <Contributors repository={repository}/>}
    </RepositoryContainer>
  )
}

export default Repository