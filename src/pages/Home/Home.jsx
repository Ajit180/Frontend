import { UserButton } from "@/components/atoms/UserButton/UserButton";
import { useFetchWorkspace } from "@/hooks/apis/workspaces/useFetchWorkspace";
import { useCreateWorkspaceModals } from "@/hooks/context/useCreateWorkspaceModals";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Home =()=>{

    const  {isFetching,workspaces} = useFetchWorkspace();


    const {setOpenCreateWorkSpaceModal}=useCreateWorkspaceModals(); 


    const navigate = useNavigate();

    useEffect(()=>{
        if(isFetching)return;

        console.log('Workspace download is',workspaces);

        if(workspaces.length==0|| ! workspaces){
            console.log('No workSpace found , creating one');
            setOpenCreateWorkSpaceModal(true);


            
        }else{
            navigate(`/workspaces/${workspaces[0]._id}`);
            
        }
        
    },[isFetching,workspaces,navigate]);

    return(
        <>
           <h1>Home</h1>
           <UserButton/>
        </>
    );
}