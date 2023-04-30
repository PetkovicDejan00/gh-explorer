import { useQuery } from 'react-query'
import axios from 'axios'

export const useContributors = (repoName: string) => {
    const contributorsList = () => {
        return axios.get(`https://api.github.com/repos/${repoName}/contributors`)
    }
    return useQuery({
        queryKey: ['contributors', repoName],
        queryFn: contributorsList
    })
}