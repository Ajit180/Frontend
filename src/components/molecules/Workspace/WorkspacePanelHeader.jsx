import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useAuth } from "@/hooks/context/useAuth";
import { useWorkPreferenceModal } from "@/hooks/context/useWorkPreferenceModal";
import { ChevronDown, ChevronDownIcon, ListFilter, ListFilterIcon, SquarePenIcon } from "lucide-react";
import { useEffect } from "react";

export const WorkspacePanelHeader=({workspace})=>{

      console.log('Workspace is ',workspace);

      const {setWorkspace}=useWorkPreferenceModal();

      const workspacememebers = workspace?.members;

      const {auth}=useAuth();

      console.log('UseAuth',auth);

      const isLoggedInUserAdminWorkspace = workspacememebers?.find(member=>member.memberId==auth?.user?._id
        && member.role=='admin'
      );

      console.log(isLoggedInUserAdminWorkspace);


      const {setInitialValue,setOpenPreference}= useWorkPreferenceModal();

      useEffect(()=>{
        setWorkspace(workspace)
      },[]);
            

    return(
        <div   className='flex items-center justify-between px-4 h-[50px] gap-0.5'>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Button
                      variant='transparent' 
                      className='font-semibold text-lg'
                    >
                        <span className="truncate">
                            {workspace?.name}
                        </span>
                        <ChevronDownIcon className="size-5 ml-1"/>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent side="bottom" align="start" className='w-64'>
                    <DropdownMenuItem>
                        <div className="size-9 relative overflow-hidden text-white
                        font-semibold text-xl rounded-md flex items-center justify-center
                        mr-2 bg-[#616061]">
                        {workspace?.name.charAt(0).toUpperCase()}
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="font-bold">
                                {workspace?.name}
                            </p>
                            <p className="text-xs text-muted-foreground">
                               Active Workspace
                            </p>
                        </div>
                    </DropdownMenuItem>

                     {isLoggedInUserAdminWorkspace && (
                        <>
                           <DropdownMenuItem  className="cursor-pointer py-2"
                             onClick={()=>{
                                setOpenPreference(true);
                                setInitialValue(workspace?.name);
                             }
                             }
                           >
                                 Preferences
                           </DropdownMenuItem>
                           <DropdownMenuSeparator/>
                           <DropdownMenuItem  className="cursor-pointer py-2">
                            Invite people to {workspace?.name}
                           </DropdownMenuItem>
                        </>
                     )}

                </DropdownMenuContent>
            </DropdownMenu>
         <div  
             className="flex items-center gap-0.5"
         >
            <Button 
             variant='transparent'
             size="iconSm">
                <ListFilterIcon className="size-5" />
            </Button>

            <Button 
              variant='transparent'
              size='iconSm'
            >
                <SquarePenIcon className="size-5"/>
            </Button>
         </div>

        </div>
    );
};