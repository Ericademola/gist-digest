import { useEffect, useState } from 'react';
import { Posts } from '../interfaces/posts';

const useFetchDb = () => {

    let [retrieve, setRetrieve] = useState<Posts[]>()

    useEffect(() => {

        const json:any = localStorage.getItem('news');

        retrieve = JSON.parse(json);
        console.log('hi');
        

    })

    return {retrieve};

}
export default useFetchDb;