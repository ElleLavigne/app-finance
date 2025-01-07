import { checkDateGreeting } from "@/utils/checkDateGreeting";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";



export function Header(){
    const currentDate = new Date()
    return(
       <div className="flex items-center gap-2">
        <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
            <h3 className="font-medium text-zinc-800 text-[1rem]">Nome da conta</h3> 
            <p className="font-medium text-zinc-400 text-[0.75rem]">{checkDateGreeting(currentDate)} {currentDate.toLocaleDateString()}</p>
        </div>
       </div>
    )
}