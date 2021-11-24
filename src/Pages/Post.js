import { useLocation } from "react-router"

const Post = ({ match }) => {
    const query = new URLSearchParams(useLocation().search)
    return (
        <>
            <h2>
                Id is = {match.params.id}
            </h2>
            <h2>{query.get("first")}</h2>
            <h2>{query.get("last")}</h2>
        </>
    )
}

export default Post
