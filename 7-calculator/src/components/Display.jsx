const Display = ({textToShow}) => {
    return <div className="w-56 mb-4 p-1 border-4 border-blue-950 hover:bg-blue-100 ">
    {textToShow ? <p>{textToShow}</p> : <p>0</p>}
    </div>
}

export default Display;