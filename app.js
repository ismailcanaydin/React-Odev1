import axios from 'axios';

function getData() {

    const user_id = 2;
    
    const getUserData = (user_id) => {
        return new Promise(async (resolve, reject) => {
            const { data: users } = await axios(
                `https://jsonplaceholder.typicode.com/users/${user_id}`
            );

            resolve(users);
            // reject('Bir sorun oluştu!')
        });
    };
    const getPost = (user_id) => {
        return new Promise(async (resolve, reject) => {
            const { data } = await axios(
                `https://jsonplaceholder.typicode.com/posts?userId=${user_id}`
            );

            resolve(data);
            // reject('Bir sorun daha oluştu!')
        });
    };
    async function start() {
        try {
            
            const users = await getUserData(user_id);

            const post = await getPost(user_id);

            console.log([users,'Posts: ',post]);
            //console.log(post);
        } catch (error) {
            console.log(error)
        }

    }
    start();
}


export default getData();