import { useEffect, useState } from 'react';
import posts from '../constants/posts';
import { Posts } from '../interfaces/posts';

const useSetDb = () => {

    // const [storage, setStorage] = useState<Posts[]>(posts);

    useEffect(() => {

        const storage: Posts[] = posts;
        const setJson = JSON.stringify(storage);        
        localStorage.setItem('news', setJson);

    }, [])

}
export default useSetDb;