import { useQuery } from 'react-query'
import axios from 'axios'

export const useSingleRepo = (repoName) => {
    const singleRepo = () => {
        return axios.get(`https://api.github.com/repos/${repoName}`)
    }
    return useQuery('single-repo', singleRepo)
}

