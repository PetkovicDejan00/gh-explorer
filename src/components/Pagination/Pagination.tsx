import { PaginationButton} from './css/Pagination.styled'
import { IPagination } from '../../common/types'

const Pagination = ({data, setPage, isFetching}:IPagination) => {

    const handleNextPage = () => {
        setPage(data?.nextPage!)
    }
    const handlePrevPage = () => {
        setPage(data?.previousPage!)
    }

    return (
        <>
            <PaginationButton 
                onClick={() => handlePrevPage()}
                disabled={data?.previousPage === 0 || isFetching}>
                    Previous
            </PaginationButton>
            <PaginationButton 
                onClick={() => handleNextPage()}
                disabled={!data?.nextPage || isFetching}>
                    Next
            </PaginationButton>
        </>
    )
}

export default Pagination