const TableHeader = ({ headers }) => {
    console.log(headers)

    return (
        <thead>
            <tr>
                {headers.map((item, index) => (
                    <th key={index}>{item}</th>
                ))}
            </tr>
        </thead>
    )
}

export default TableHeader
