import { getNewsList } from "../_libs/microcms";
import NewsList from"@/app/conponents/NewsList";
import Pagination from "../conponents/Pagination";
import SearchField from "../conponents/SearchField";
import { NEWS_LIST_LIMIT } from "../constants";
export default async function Page() {

    const { contents: news, totalCount } = await getNewsList({
        limit:NEWS_LIST_LIMIT,
    });

    return (
        <>
        <SearchField/>
        <NewsList news={news}/>
        <Pagination totalCount={totalCount} />
        </>
    );
}