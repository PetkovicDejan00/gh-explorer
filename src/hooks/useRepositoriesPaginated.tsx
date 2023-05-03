import axios from 'axios'

export const useRepositoriesPaginated = (page:number, framework:string, sort:string | null, order:string | null) => {
    return axios.get("https://api.github.com/search/repositories?", {
        params: {
            q: framework, 
            per_page: 30,  
            page: page,
            sort: sort,
            order: order,
        }
    })
        .then(res => {
            const hasNext = page * 2 <= res.data.total_count
            return {
                nextPage: hasNext ? page + 1 : undefined,
                previousPage: hasNext ? page - 1 : undefined,
                repositories: res.data
        }
    })
}

