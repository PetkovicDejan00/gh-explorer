import { useQuery } from 'react-query'
import axios from 'axios'

export const useAppliedLanguages = (repoName: string) => {
    const appliedLanguages = () => {
        return axios.get(`https://api.github.com/repos/${repoName}/languages`)
    }
    return useQuery({
        queryKey: ['appliedLanguages', repoName],
        queryFn: appliedLanguages
    })
}