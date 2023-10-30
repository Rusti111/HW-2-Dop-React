


const Table = ({ data }) => {
    return (
        <>
            {
                JSON.stringify(data) == '{}'
                    ? ""
                    : <table>
                        <tr>
                            <td>Country</td>
                            <td>{data.sys.country}</td>
                        </tr>
                        <tr>
                            <td>City</td>
                            <td>{data.name}</td>
                        </tr>
                        <tr>
                            <td>Temperatura °C</td>
                            <td>{(data.main?.temp - 273.15).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Description</td>
                            <td>{data.weather[0].description}</td>
                        </tr>
                    </table>
            }
        </>
    );
}

export default Table;
