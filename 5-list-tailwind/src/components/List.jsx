const List = ({list}) => {
    return (
        <ol className=" bg-red-300 rounded-3xl p-8 font-bold list-decimal">
            {list.map(item => <li>{item}</li>)}
        </ol>
    )
}

export default List;