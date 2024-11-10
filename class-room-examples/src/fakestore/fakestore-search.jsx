
export function FakestoreSearch(){
    return(
        <div>
            <h2>Search</h2>
            <form action="/results">
                <select name="category">
                    <option>All</option>
                    <option>Electronics</option>
                    <option>Footwear</option>
                </select>
                <input type="text" name="product" />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}