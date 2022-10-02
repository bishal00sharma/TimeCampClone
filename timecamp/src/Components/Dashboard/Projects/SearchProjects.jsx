import { Button, Flex, Grid, Img, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProject, fetchProject } from "../../../Store/Projects/projects.actions";
import style from "./Search.module.css";

const initState = {
    title: "Project",
    role: "Administrator",
    description: "",
    budget: 0,
    tag: "new-project",
}

export default function SearchProjects () {

    const [project, setProject] = useState(initState);
    const dispatch = useDispatch();

    const handleData = (e) => {
        const {name, value} = e.target;
        setProject({...project, [name]: value});
    }

    const handleAdd = async (e) =>{
        e.preventDefault();
        await dispatch(addProject(project));
        dispatch(fetchProject());
        setProject(initState);
    }
    return (
        <Grid className={style.search} templateColumns="2fr 2fr 0.2fr" p="20px" px="100px"> 
            <Flex>
                <Input placeholder="Search" size="md" name="title" onChange={handleData}/>
                <Button colorScheme="green" p="0 30px" onClick={handleAdd}>Add Project</Button>
            </Flex>
            <Flex>
                <Flex>
                    <Img src={require("../../../Resources/icons/dashboard/user-menu/filter.png")}/>
                    <Text>Filter</Text>
                </Flex>
                <Flex>
                    <Img src={require("../../../Resources/icons/dashboard/user-menu/collapse.png")}/>
                </Flex>
                <Flex>
                    <Text>Archived</Text>
                </Flex>
                <Flex>
                    <Img src={require("../../../Resources/icons/dashboard/user-menu/h-more.png")}/>
                </Flex>
            </Flex>
            <Flex onClick={()=> dispatch(fetchProject())}>
                <Text>Refresh</Text>
            </Flex>
        </Grid>
    )
}