import Items from "./Items";

export default function List({children}){
    return (
     <ul className="list">
        {children}
     </ul>
    )
}
List.Items = Items;