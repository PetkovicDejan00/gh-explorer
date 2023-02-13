import React from 'react'
import {useAppliedLanguages} from '../../hooks/useAppliedLanguages'
import LoadingCircle from '../../components/LoadingCircle/LoadingCircle'
import {LanguagesContainer} from './css/Languages.styled'


const AppliedLanguages = ({repository}) => {
    const {isLoading, isError, error, data} = useAppliedLanguages(`${repository}`)
    
    if (isLoading) {
        return <LoadingCircle />
    }
    if (isError) {
        return <h4>{error.message}</h4>
    }
    const appliedLanguages = Object.entries(data?.data)

    return (
        <LanguagesContainer>
            <h2>Applied Languages</h2>
            {appliedLanguages.length !== 0 ? 
                <div>
                    {appliedLanguages.map((key, value) => {
                        return (
                            <p key={value}>{key[0]}: {key[1]}</p>
                        )
                    })}
                </div>
            : 
                <p empty={true}>No applied languages to show</p>
            }

            {/* {appliedLanguages.length === 0 && <p empty={true}>No applied languages to show</p>} */}
        </LanguagesContainer>
    )
}

export default AppliedLanguages