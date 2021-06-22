import React from 'react'
import { Sidebar } from './Sidebar'
import { NothingSelected } from './NothingSelected'

export const JournalScrenn = () => {
    return (
        <div className="journal__main-content">
            <Sidebar />
            <main>
                {/* <NothingSelected /> */}
            </main>
        </div>
    )
}
