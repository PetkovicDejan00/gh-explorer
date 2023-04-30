import React from 'react'
import {useAppliedLanguages} from '../../hooks/useAppliedLanguages'
import LoadingCircle from '../../components/LoadingCircle/LoadingCircle'
import {LanguagesContainer} from './css/Languages.styled'

interface Prop {
    repository: string
}

const AppliedLanguages = ({repository}:Prop) => {
    const {isLoading, error, data} = useAppliedLanguages(`${repository}`)

    if (isLoading) {
        return <LoadingCircle />
    }
    if (error instanceof Error) {
        return <h2>{error.message}</h2>
      } 
    const appliedLanguages = Object.entries(data?.data)

    return (
        <LanguagesContainer>
            <h2>Applied Languages</h2>
            {appliedLanguages.length !== 0 ? 
                <div>
                    {appliedLanguages.map((key:any, value) => {
                        return (
                            <p key={value}>
                                {key[0]}: {key[1]}
                            </p>
                        )
                    })}
                </div>
            : 
                <p>No applied languages to show</p>
            }
        </LanguagesContainer>
    )
}

export default AppliedLanguages