import React from 'react'
import { useState } from 'react'
import data from '../data/data.json'

const Emoji = () => {
    const [search, setSearch] = useState("")

    return (
        <div>
            <div>
                <input type="search" value={search} placeholder='Search Emoji' onChange={(e) => setSearch(e.target.value.toLowerCase())} />
            </div>
            <div>
                {data.map((emoji, index) => {
                    let keywords = emoji.keywords.trim().split(" ");

                    if (search != " ") {
                        if (keywords.includes(search)) {
                            return (
                                <div key={index} onClick={() => navigator.clipboard.writeText(emoji.symbol)}>
                                    <h1>{emoji.symbol}</h1>
                                    <h3>{emoji.title}</h3>
                                </div>
                            )
                        }
                        // else {
                        //     return (<div><h1>No such Emojies found</h1></div>)
                        // }
                    }
                })}
            </div>
        </div>
    )
}

export default Emoji