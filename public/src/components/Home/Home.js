import { useEffect,useState } from 'react';
import React from 'react';
import { Container,Grow,Grid} from "@material-ui/core";
import Form from '../Form/Form';
import Posts from '../Posts/Posts';
import {getPosts} from '../../actions/posts';
import { useDispatch } from "react-redux";

const Home = () => {
  const [currentId,setCurrentId]= useState(null);
  const dispatch= useDispatch();
  useEffect(() =>{
      dispatch(getPosts());
  },[currentId,dispatch])
  return (
    <Grow in>
<Container>
    <Grid container justify="space-between" justifyContent="space-between" alignItems="stretch" spacing={3}>
        <Grid item xs={12} sm={7}>
                <Posts setCurrentId={setCurrentId}/>
        </Grid>
        <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId}/>
        </Grid>
    </Grid>
</Container>
</Grow>
  )
}

export default Home
