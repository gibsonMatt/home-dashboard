"use client"

import { useState, useEffect } from 'react'

type quote = {
    text: string,
    author: string
}



export function Quote() {
    const [myquote, setQuote] = useState<string>("")

    useEffect(() => {
        const quote = require('inspirational-quotes');

        const this_quote: quote = quote.getQuote()

        const formatted: string = "\"" + this_quote.text + "\"" + " -" + this_quote.author 
        setQuote(formatted)
    }, [])

    return (
        <div>
            <blockquote className="mt-6 border-l-2 pl-6 italic">
                {myquote}
            </blockquote>
        </div>
    )

}
