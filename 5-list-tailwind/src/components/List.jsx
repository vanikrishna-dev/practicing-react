const List = ({list}) => {
    return (
        <ol className="ml-8 list-decimal">
            {list.map(item => <li>{item}</li>)}
        </ol>
    )
}

export default List;