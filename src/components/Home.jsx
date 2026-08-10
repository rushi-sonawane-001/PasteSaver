import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addToPastes, updateToPastes } from '../Redux/pasteSlice';
import toast from 'react-hot-toast';

const Home = () => {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const pasteId = searchParams.get("pasteId");
    const dispatch = useDispatch();
    const allPastes = useSelector((state) => state.paste.pastes);

    useEffect(() => {
        if (pasteId) {
            const paste = allPastes.find((p) => p._id === pasteId);
            setTitle(paste.title);
            setValue(paste.content);
        }

    }, [pasteId])

    function createPaste() {
        const paste = {
            title: title,
            content: value,
            _id: pasteId ||
                Date.now().toString(36),
            createdAt: new Date().toISOString(),
        }

        // Check if title is empty
        if (!title.trim()) {
            toast.error("Please enter a title");
            return;
        }


        if (pasteId) {
            //update
            dispatch(updateToPastes(paste));
        }
        else {
            //create
            dispatch(addToPastes(paste));
        }

        //after creation or updation
        setTitle('');
        setValue('');
        setSearchParams({});
    }

    return (
        <div className="min-h-screen bg-slate-950 text-white px-4 py-8">
            <div className="max-w-5xl mx-auto">

                {/* Page Header */}
                <div className="mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                        Paste Saver
                    </h1>
                    <p className="text-slate-400 mt-2">
                        Create, save and manage your notes and code snippets.
                    </p>
                </div>

                {/* Main Editor Card */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-5 md:p-7">

                    {/* Title + Button */}
                    <div className="flex flex-col md:flex-row gap-4 mb-5">

                        {/* Title Input */}
                        <input
                            className="
                            flex-1
                            px-5 py-3
                            rounded-xl
                            bg-slate-800
                            border border-slate-700
                            text-white
                            placeholder-slate-500
                            outline-none
                            transition
                            focus:border-blue-500
                            focus:ring-2
                            focus:ring-blue-500/20
                        "
                            type="text"
                            placeholder="Enter paste title..."
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />

                        {/* Create / Update Button */}
                        <button
                            onClick={createPaste}
                            className="
                            px-6 py-3
                            rounded-xl
                            bg-blue-600
                            hover:bg-blue-700
                            active:bg-blue-800
                            text-white
                            font-semibold
                            transition-all
                            duration-200
                            shadow-lg
                            shadow-blue-600/20
                            hover:shadow-blue-600/30
                            whitespace-nowrap
                            cursor-pointer
                        "
                        >
                            {pasteId ? "Update My Paste" : "Create My Paste"}
                        </button>
                    </div>

                    {/* Content Label */}
                    <div className="flex items-center justify-between mb-2">
                        <label className="text-sm font-medium text-slate-300">
                            Content
                        </label>

                        <span className="text-xs text-slate-500">
                            {value.length} characters
                        </span>
                    </div>

                    {/* Textarea */}
                    <textarea
                        className="
                        w-full
                        min-h-[400px]
                        resize-y
                        rounded-xl
                        bg-slate-950
                        border border-slate-700
                        p-5
                        text-slate-200
                        placeholder-slate-600
                        font-mono
                        text-sm
                        leading-6
                        outline-none
                        transition
                        focus:border-blue-500
                        focus:ring-2
                        focus:ring-blue-500/20
                    "
                        value={value}
                        placeholder="Enter your content here..."
                        onChange={(e) => setValue(e.target.value)}
                        rows={20}
                    />

                    {/* Bottom Info */}
                    <div className="flex justify-between items-center mt-4 text-xs text-slate-500">
                        <span>
                            Your paste is ready to be saved.
                        </span>

                        <span>
                            {value.split(/\s+/).filter(Boolean).length} words
                        </span>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Home
