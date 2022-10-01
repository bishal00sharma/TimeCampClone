import { useDispatch, useSelector } from "react-redux";

import { Grid, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { fetchProject } from "../../../Store/Projects/projects.actions";
import ProjectDiv from "./ProjectDiv";

export default function AllProjects() {

    const {loading, data, error} = useSelector((store)=> store.projects)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchProject());
    },[])



    return (
        <Grid gap="10px" px="100px" py="30px">
            {
                data.length===0 ? 
                <Grid border="1px solid rgba(128, 128, 128, 0.299)"  border-radius= "10px" height="100px" alignItems="center">
                    <Text fontWeight="500" color="rgba(128, 128, 128, 0.799)" fontSize="xl"> {loading ? "...loading" : error!=="" ? {error} :  "No Projects"} </Text>
                </Grid> 
                :
                data?.map((p)=>(
                    <ProjectDiv key={p._id} p={p}/>
                ))
            }
        </Grid>
    )
}