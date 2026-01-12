
import axios from "axios";

const  Dataget= async(search,api_key) =>{

try {

            const response = await axios.get(

                `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${search}&key=${api_key}&type=video`


            );


            

          return response;

        } catch (error) {


            console.error('Error fetching YouTube videos', error);
        }

}

export default Dataget;