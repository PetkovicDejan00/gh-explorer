import { useQuery } from 'react-query'
import axios from 'axios'

export const useContributors = (repoName) => {
    const contributorsList = () => {
        return axios.get(`https://api.github.com/repos/${repoName}/contributors`)
    }
    return useQuery(['contributors', repoName], contributorsList)
}