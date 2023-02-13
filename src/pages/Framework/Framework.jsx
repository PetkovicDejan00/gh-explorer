import {useQuery} from 'react-query'
import {useState, useEffect} from 'react';
import {getRepositoriesPaginated} from '../../api/RepositoriesPaginated'
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

  const {isLoading, isError, error, data, refetch, isFetching} = useQuery({
    queryKey: [`${framework}-repos`, { page }],
    queryFn: () => getRepositoriesPaginated(page, framework, sort, order)
  })
  let repositories = data?.repositories?.items

  const sortingProps = {sorting, setSorting, searchParams, setSearchParams}
  const reposContainerProps = {repositories, isFetching}
  const paginationProps = {data, setPage, isFetching}

  useEffect(() => {
    refetch()
  }, [sorting])

  useEffect(() => {
    setSorting('0')
  }, [framework])


  if (isError) return (
    <ErrorMessage>{error.message}</ErrorMessage>
  )
  
  return (
    <>
        <Pagination {...paginationProps}/>
        <Sort {...sortingProps}/>
        {isLoading ? <LoadingCircle /> : <RepositoriesContainer {...reposContainerProps} />}
    </>
  )
}

export default Framework