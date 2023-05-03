import { useQuery } from 'react-query'
import axios from 'axios'

export const useSingleRepo = (repoName: string | undefined) => {
    const fetchSingleRepo = () => {
        return axios.get(`https://api.github.com/repos/${repoName}`)
    }
    return useQuery({
        queryKey: ['repository', repoName],
        queryFn: fetchSingleRepo
    })
}

