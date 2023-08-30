import Card from "./card";
import "./styles.css";
import { useGetRoomsQuery } from "../redux/apiSlice";
import { LinearProgress, Stack } from "@mui/material";
import { useSelector } from "react-redux";

function Content() {
  const { category, filterableField } = useSelector(state=> state.filter)

  let queryString =
  filterableField?.length > 0 && filterableField.map(tag => `${tag}=tags-value`).join('&')
  console.log(queryString);

  

  // let queryString : string =
  // tags?.length > 0 ? tags.map((tag) => `tags_like=${tag}`).join('&') + `&id_ne=${id}&_limit=${limit}` : `id_ne=${id}&_limit=${limit}`;
  // console.log(queryString);
  
  // const res = await axios.get(`/blogs?${queryString}`);

  
  // const keyword = keyword || undefined 
  const {data, isLoading, isError} = useGetRoomsQuery(undefined)
  const rooms = data?.data

  let content = null;
  if (isLoading) content = <Stack sx={{ width: '100%', color: 'grey.500'}}><LinearProgress color="success" /></Stack>
  if (!isLoading && isError) content = <h1> There is an error </h1>;
  if (!isLoading && !isError && rooms?.length === 0) { content = <h5>There is no rooms</h5> }
  if (!isLoading && !isError && rooms?.length !== 0) { 
    content = rooms.filter(room=> {
      if (category === 'Amazing') {
        return (room.category === category)
      }
      else if (category === 'Farm') {
        return (room.category === category)
      }
      else if (category === 'Tropical') {
        return (room.category === category)
      }
      else if (category === 'Rooms') {
        return (room.category === category)
      }
      else if (category === 'New') {
        return (room.category === category)
      }
      else if (category === 'Trending') {
        return (room.category === category)
      }
      else {
        return room
      }
    }).map( room => ( <Card room={room} key={room.id} />)) }


  return (
    <div className="cards-flex">
      {
        content
      }
    </div>
  );
}

export default Content;
