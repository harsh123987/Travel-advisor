import axios from 'axios';
  

export const getPlacesData = async (type,sw,ne)=>{
    try{
        const { data: { data }} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'X-RapidAPI-Key': 'df6bddc230msh75dd74b305ec7cfp142b51jsnd4dffe717190',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
          });
           return data;
    }
    catch (error) {
    console.log(error);
    }
}


