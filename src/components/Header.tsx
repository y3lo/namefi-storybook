import {useMemo} from "react"
import { HeaderSearchBar } from "./HeaderSearchBar"
import { UserAuthState, UserAuthStateProps } from "./UserAuthState"

type HeaderProps = {
        includeSearchBar?:boolean,
        authStateProps?: UserAuthStateProps
    }
export const Header = ({includeSearchBar, authStateProps }: HeaderProps) => {
   

    return (
        <header className="namefi-cont namefi-header relative h-[80px] pl-6 pr-[10px] lg:rounded-[50px] ">
            <nav className="relative w-full h-full m-0 flex justify-between items-center">
                <div className="relative flex items-center gap-[6rem]">
                    <img src="/assets/namefi.svg" width={90} alt="logo" role="svg"/>
                </div>
                {includeSearchBar && <HeaderSearchBar />}
                <UserAuthState {...authStateProps} />
            </nav>
        </header>
    )
}
