import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPastes } from '../Redux/pasteSlice'
import toast from 'react-hot-toast'
import Navbar from './Navbar'

const Paste = () => {

    const pastes = useSelector((state) => state.paste.pastes)
    const dispatch = useDispatch()
    const [searchTerm, setSearchTerm] = useState('')

    const filteredData = pastes.filter(
        (paste) =>
            paste.title
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
    )

    function handleDelete(pasteId) {
        dispatch(removeFromPastes(pasteId))
        toast.success('Paste deleted successfully')
    }

    async function handleShare(paste) {
        const shareUrl = `${window.location.origin}/paste/${paste?._id || paste?.id}`

        try {
            if (navigator.share) {
                await navigator.share({
                    title: paste.title,
                    text: `Check this paste: ${paste.title}`,
                    url: shareUrl,
                })

                toast.success('Share completed')
            } else {
                await navigator.clipboard.writeText(shareUrl)
                toast.success('Share link copied')
            }
        } catch (error) {
            if (error?.name !== 'AbortError') {
                toast.error('Unable to share right now')
            }
        }
    }

    return (
        <div className="min-h-screen bg-slate-950 text-white">

            {/* Navbar */}
            

            {/* Main Content */}
            <main className="px-4 py-8 sm:px-6 lg:px-8">

                <div className="max-w-6xl mx-auto">

                    {/* Page Header */}
                    <div className="mb-8">

                        <h1 className="
                            text-3xl
                            sm:text-4xl
                            font-bold
                            tracking-tight
                        ">
                            My Pastes
                        </h1>

                        <p className="
                            mt-2
                            text-slate-400
                        ">
                            View, edit, copy and manage all your saved pastes.
                        </p>

                    </div>


                    {/* Search Section */}
                    <div className="
                        bg-slate-900
                        border
                        border-slate-800
                        rounded-2xl
                        p-5
                        mb-8
                        shadow-xl
                    ">

                        <div className="relative">

                            {/* Search Icon */}
                            <span className="
                                absolute
                                left-4
                                top-1/2
                                -translate-y-1/2
                                text-slate-500
                            ">
                                🔍
                            </span>

                            <input
                                className="
                                    w-full
                                    px-12
                                    py-3
                                    rounded-xl
                                    bg-slate-800
                                    border
                                    border-slate-700
                                    text-white
                                    placeholder-slate-500
                                    outline-none
                                    transition
                                    focus:border-blue-500
                                    focus:ring-2
                                    focus:ring-blue-500/20
                                "
                                type="search"
                                placeholder="Search your pastes..."
                                value={searchTerm}
                                onChange={(e) =>
                                    setSearchTerm(e.target.value)
                                }
                            />

                        </div>

                        {/* Search Result Count */}
                        <div className="
                            mt-3
                            text-sm
                            text-slate-500
                        ">
                            {filteredData.length}{" "}
                            {filteredData.length === 1 ? "paste" : "pastes"} found
                        </div>

                    </div>


                    {/* Pastes */}
                    {filteredData.length > 0 ? (

                        <div className="
                            grid
                            grid-cols-1
                            md:grid-cols-2
                            xl:grid-cols-3
                            gap-5
                        ">

                            {filteredData.map((paste) => (

                                <div
                                    key={paste?._id || paste?.id}
                                    className="
                                        group
                                        flex
                                        flex-col
                                        bg-slate-900
                                        border
                                        border-slate-800
                                        rounded-2xl
                                        overflow-hidden
                                        shadow-lg
                                        hover:border-slate-700
                                        hover:shadow-2xl
                                        transition-all
                                        duration-300
                                    "
                                >

                                    {/* Card Header */}
                                    <div className="
                                        px-5
                                        py-4
                                        border-b
                                        border-slate-800
                                    ">

                                        <h2 className="
                                            text-lg
                                            font-semibold
                                            text-white
                                            truncate
                                        ">
                                            {paste.title}
                                        </h2>

                                        <p className="
                                            mt-1
                                            text-xs
                                            text-slate-500
                                        ">
                                            {paste.createdAt
                                                ? new Date(
                                                    paste.createdAt
                                                ).toLocaleString()
                                                : 'No date available'
                                            }
                                        </p>

                                    </div>


                                    {/* Paste Content */}
                                    <div className="p-5 flex-1">

                                        <div className="
                                            bg-slate-950
                                            border
                                            border-slate-800
                                            rounded-xl
                                            p-4
                                            h-40
                                            overflow-hidden
                                        ">

                                            <p className="
                                                text-sm
                                                text-slate-400
                                                font-mono
                                                leading-6
                                                whitespace-pre-wrap
                                                break-words
                                            ">
                                                {paste.content}
                                            </p>

                                        </div>

                                    </div>


                                    {/* Action Buttons */}
                                    <div className="
                                        px-5
                                        pb-5
                                    ">

                                        <div className="
                                            grid
                                            grid-cols-3
                                            gap-2
                                            mb-2
                                        ">

                                            {/* Edit */}
                                            <a
                                                href={`/?pasteId=${paste?._id}`}
                                                className="
                                                    flex
                                                    items-center
                                                    justify-center
                                                    gap-1
                                                    px-3
                                                    py-2
                                                    rounded-lg
                                                    bg-slate-800
                                                    hover:bg-blue-600
                                                    text-slate-300
                                                    hover:text-white
                                                    text-sm
                                                    font-medium
                                                    transition-all
                                                    duration-200
                                                "
                                            >
                                                ✏️ Edit
                                            </a>


                                            {/* View */}
                                            <a
                                                href={`/pastes/${paste?._id}`}
                                                className="
                                                    flex
                                                    items-center
                                                    justify-center
                                                    gap-1
                                                    px-3
                                                    py-2
                                                    rounded-lg
                                                    bg-slate-800
                                                    hover:bg-emerald-600
                                                    text-slate-300
                                                    hover:text-white
                                                    text-sm
                                                    font-medium
                                                    transition-all
                                                    duration-200
                                                "
                                            >
                                                👁 View
                                            </a>


                                            {/* Copy */}
                                            <button
                                                onClick={() => {
                                                    navigator.clipboard.writeText(
                                                        paste?.content
                                                    )

                                                    toast.success(
                                                        'Copied to clipboard'
                                                    )
                                                }}
                                                className="
                                                    flex
                                                    items-center
                                                    justify-center
                                                    gap-1
                                                    px-3
                                                    py-2
                                                    rounded-lg
                                                    bg-slate-800
                                                    hover:bg-purple-600
                                                    text-slate-300
                                                    hover:text-white
                                                    text-sm
                                                    font-medium
                                                    transition-all
                                                    duration-200
                                                    cursor-pointer
                                                "
                                            >
                                                📋 Copy
                                            </button>

                                        </div>


                                        <div className="
                                            grid
                                            grid-cols-2
                                            gap-2
                                        ">

                                            {/* Delete */}
                                            <button
                                                onClick={() =>
                                                    handleDelete(
                                                        paste?._id
                                                    )
                                                }
                                                className="
                                                    flex
                                                    items-center
                                                    justify-center
                                                    gap-1
                                                    px-3
                                                    py-2
                                                    rounded-lg
                                                    bg-red-500/10
                                                    hover:bg-red-600
                                                    text-red-400
                                                    hover:text-white
                                                    text-sm
                                                    font-medium
                                                    transition-all
                                                    duration-200
                                                    cursor-pointer
                                                "
                                            >
                                                🗑 Delete
                                            </button>


                                            {/* Share */}
                                            <button
                                                onClick={() =>
                                                    handleShare(paste)
                                                }
                                                className="
                                                    flex
                                                    items-center
                                                    justify-center
                                                    gap-1
                                                    px-3
                                                    py-2
                                                    rounded-lg
                                                    bg-blue-500/10
                                                    hover:bg-blue-600
                                                    text-blue-400
                                                    hover:text-white
                                                    text-sm
                                                    font-medium
                                                    transition-all
                                                    duration-200
                                                    cursor-pointer
                                                "
                                            >
                                                🔗 Share
                                            </button>

                                        </div>

                                    </div>

                                </div>

                            ))}

                        </div>

                    ) : (

                        /* Empty State */
                        <div className="
                            flex
                            flex-col
                            items-center
                            justify-center
                            text-center
                            py-20
                            bg-slate-900
                            border
                            border-slate-800
                            rounded-2xl
                        ">

                            <div className="
                                w-16
                                h-16
                                flex
                                items-center
                                justify-center
                                rounded-full
                                bg-slate-800
                                text-3xl
                                mb-4
                            ">
                                📝
                            </div>

                            <h2 className="
                                text-xl
                                font-semibold
                                text-white
                            ">
                                No pastes found
                            </h2>

                            <p className="
                                mt-2
                                text-slate-500
                                max-w-md
                            ">
                                {searchTerm
                                    ? 'Try searching with a different title.'
                                    : 'You have not created any pastes yet.'
                                }
                            </p>

                            {!searchTerm && (
                                <a
                                    href="/"
                                    className="
                                        mt-5
                                        px-5
                                        py-2.5
                                        rounded-xl
                                        bg-blue-600
                                        hover:bg-blue-700
                                        text-white
                                        font-medium
                                        transition
                                    "
                                >
                                    Create Your First Paste
                                </a>
                            )}

                        </div>

                    )}

                </div>

            </main>

        </div>
    )
}

export default Paste