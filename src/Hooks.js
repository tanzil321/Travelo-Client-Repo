import { useEffect } from "react"


const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Travelo`;
    }, [title])
}

export default useTitle