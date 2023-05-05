export interface IContributor {
  html_url: string;
  login: string;
  avatar_url: string;
  contributions: number;
}

export interface IRepository {
  id: number;
  forks: number;
  stargazers_count: number;
  full_name: string;
  name: string;
  open_issues: number;
  owner: {
    avatar_url: string;
    login: string;
    owner_name: string;
  };
}

export interface IPagination {
  data:
    | {
        nextPage: number | undefined;
        previousPage: number | undefined;
        repositories: IRepository[];
      }
    | undefined;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  isFetching: boolean;
}

export interface ISotring {
  sorting: number;
  setSorting: React.Dispatch<React.SetStateAction<number>>;
  searchParams: URLSearchParams;
  setSearchParams: Function;
}
