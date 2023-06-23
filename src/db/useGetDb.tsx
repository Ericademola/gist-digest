import { useEffect, useState } from 'react';
import { Posts } from '../interfaces/posts';

const useGetDb = () => {

    let [retrieve, setRetrieve] = useState<Posts[]>()

    useEffect(() => {

        const json:any = localStorage.getItem('news');
        
        retrieve = JSON.parse(json);

    })

    return retrieve;

}
export default useGetDb;