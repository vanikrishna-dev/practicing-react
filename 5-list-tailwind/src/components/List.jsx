const List = ({list}) => {
    if (!list || list.length === 0){
        return <h2 className=" bg-red-300 rounded-3xl p-8 font-bold text-center">No students are enrolled.</h2>
    }
    
    return (
        <ol className=" bg-red-300 rounded-3xl p-8 font-bold list-decimal">
            {list.map(item => <li>{item}</li>)}
        </ol> 
    )
}

export default List;