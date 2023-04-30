import { useQuery } from 'react-query'
import axios from 'axios'

export const useSingleRepo = (repoName: string | undefined) => {
    const singleRepo = () => {
        return axios.get(`https://api.github.com/repos/${repoName}`)
    }
    return useQuery({
        queryKey: ['single-repo', repoName],
        queryFn: singleRepo
    })
}

