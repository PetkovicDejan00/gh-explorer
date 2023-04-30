import {useQuery} from 'react-query'
import {useState, useEffect} from 'react';
import { useRepositoriesPaginated } from '../../hooks/useRepositoriesPaginated';
import Sort from '../../components/SortComponent/Sort'
import Pagination from '../../components/Pagination/Pagination'
import { useParams, useSearchParams } from 'react-router-dom'
import LoadingCircle from '../../components/LoadingCircle/LoadingCircle'
import RepositoriesContainer from '../../containers/RepositoriesContainer/RepositoriesContainer';
import {ErrorMessage} from './css/Framework.styled'

const Framework = () => {
  const [page, setPage] = useState(1)
  const [searchParams, setSearchParams] = useSearchParams()
  const [sorting, setSorting] = useState(0)
  const {framework = 'react'} = useParams()  
  const sort = searchParams.get('sort')
  const order = searchParams.get('order')

  const {isLoading, error, data, refetch, isFetching} = useQuery({
    queryKey: [`${framework}-repos`, { page }],
    queryFn: () => useRepositoriesPaginated(page, framework, sort, order)
  })
  let repositories = data?.repositories?.items

  const sortingProps = {sorting, setSorting, searchParams, setSearchParams}
  const reposContainerProps = {repositories, isFetching}
  const paginationProps = {data, setPage, isFetching}

  useEffect(() => {
    refetch()
  }, [sorting])

  useEffect(() => {
    setSorting(0)
    refetch()
  }, [framework])

  if (error instanceof Error) {
    return <ErrorMessage>{error.message}</ErrorMessage>
  } 
  
  return (
    <>
        <Pagination {...paginationProps}/>
        <Sort {...sortingProps}/>
        {isLoading ? <LoadingCircle /> : <RepositoriesContainer {...reposContainerProps} />}
    </>
  )
}

export default Framework