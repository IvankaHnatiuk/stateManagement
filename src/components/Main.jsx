import List from "./List";
import Section from "./Section";

export default function Main({children}){
    return (
        <>
        <main>
            <List>{children}</List>
        </main>
        </>
    )
}

Main.List = List;
Main.Section = Section;