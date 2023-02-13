import React from 'react'
import {useContributors} from '../../hooks/useContributors'
import LoadingCircle from '../../components/LoadingCircle/LoadingCircle'
import { ContributorsContainer, Card } from './css/Contributors.styled'

const Contributors = ({repository}) => {
    const {isLoading, isError, error, data} = useContributors(`${repository}`)
    const contributors = data?.data
    
    if (isLoading) {
        return <LoadingCircle />
    }
    if (isError) {
        return <h2>{error.message}</h2>
    }
    
    return (
        <div>
            <h2>Contributors List ⬇</h2>
            <ContributorsContainer>
                {contributors.map((contributor, index) => {
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