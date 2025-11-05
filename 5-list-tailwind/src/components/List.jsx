const List = ({list}) => {

    return (
        <>
            {!list || list.length === 0 ? <h2>No students are enrolled.</h2>
                                        : <h2 className="bg-gray-700 rounded-3xl p-1 text-slate-50 font-medium">Here are the students:</h2>}
            <ol className=" bg-red-300 rounded-3xl p-8 font-bold list-decimal">
                {list.map(item => <li>{item}</li>)}
            </ol>
        </> 
    );
};

export default List;