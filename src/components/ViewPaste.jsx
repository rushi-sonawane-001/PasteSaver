import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import Navbar from './Navbar'

const ViewPaste = () => {

  const { id } = useParams()

  const allPastes = useSelector(
    (state) => state.paste.pastes
  )

  const paste = allPastes.find(
    (p) => p._id === id
  )

  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(paste.content)

      setCopied(true)
      toast.success('Content copied to clipboard')

      setTimeout(() => {
        setCopied(false)
      }, 2000)

    } catch (error) {
      toast.error('Failed to copy content')
    }
  }

  return (
    <div className="
            min-h-screen
            bg-slate-950
            text-white
        ">





      {/* Main Content */}
      <main className="
                px-4
                py-8
                sm:px-6
                lg:px-8
            ">

        <div className="
                    max-w-5xl
                    mx-auto
                ">

          {/* Page Header */}
          <div className="mb-8">

            <div className="
                            flex
                            flex-col
                            sm:flex-row
                            sm:items-center
                            sm:justify-between
                            gap-4
                        ">

              <div>

                <h1 className="
                                    text-3xl
                                    sm:text-4xl
                                    font-bold
                                    tracking-tight
                                ">
                  View Paste
                </h1>

                <p className="
                                    mt-2
                                    text-slate-400
                                ">
                  View your saved paste content.
                </p>

              </div>


              {/* Back Button */}
              <Link
                to="/pastes"
                className="
                                    inline-flex
                                    items-center
                                    justify-center
                                    px-5
                                    py-2.5
                                    rounded-xl
                                    bg-slate-800
                                    hover:bg-slate-700
                                    border
                                    border-slate-700
                                    text-slate-200
                                    font-medium
                                    transition
                                "
              >
                ← Back to Pastes
              </Link>

            </div>

          </div>


          {/* Paste Card */}
          <div className="
                        bg-slate-900
                        border
                        border-slate-800
                        rounded-2xl
                        shadow-2xl
                        overflow-hidden
                    ">

            {/* Card Header */}
            <div className="
                            px-5
                            sm:px-7
                            py-5
                            border-b
                            border-slate-800
                        ">

              <div className="
                                flex
                                items-center
                                justify-between
                                gap-4
                            ">

                <div className="flex-1 min-w-0">

                  <p className="
                                        text-xs
                                        uppercase
                                        tracking-wider
                                        text-slate-500
                                        mb-1
                                    ">
                    Paste Title
                  </p>

                  <h2 className="
                                        text-xl
                                        sm:text-2xl
                                        font-semibold
                                        text-white
                                        break-words
                                    ">
                    {paste.title}
                  </h2>

                </div>

              </div>

              {/* Created Date */}
              <p className="
                                mt-3
                                text-xs
                                text-slate-500
                            ">
                Created: {' '}
                {paste.createdAt
                  ? new Date(
                    paste.createdAt
                  ).toLocaleString()
                  : 'Unknown'
                }
              </p>

            </div>


            {/* Content Section */}
            <div className="p-5 sm:p-7">

              <div className="
                                flex
                                items-center
                                justify-between
                                mb-3
                            ">

                <label className="
                                    text-sm
                                    font-medium
                                    text-slate-300
                                ">
                  Content
                </label>

                <span className="
                                    text-xs
                                    text-slate-500
                                ">
                  {paste.content?.length || 0} characters
                </span>

              </div>


              {/* Content */}
              {/* Content Section */}
              <div className="p-5 sm:p-7">


                {/* Textarea Container */}
                <div className="relative">

                  {/* Copy Button */}
                  <button
                    onClick={handleCopy}
                    className="
                absolute
                top-3
                right-3
                z-10

                px-3
                py-1.5

                rounded-lg

                bg-slate-800
                hover:bg-blue-600

                border
                border-slate-700
                hover:border-blue-500

                text-xs
                font-medium
                text-slate-300
                hover:text-white

                transition-all
                duration-200

                cursor-pointer

                shadow-lg
            "
                  >
                    {copied ? "✓ Copied" : "📋 Copy"}
                  </button>


                  {/* Paste Content */}
                  <textarea
                    className="
                w-full
                min-h-[450px]
                resize-y

                rounded-xl

                bg-slate-950

                border
                border-slate-700

                p-5
                pr-24

                text-slate-300

                font-mono
                text-sm
                leading-6

                outline-none

                cursor-default

                focus:border-slate-700
            "
                    value={paste.content}
                    disabled
                    readOnly
                  />

                </div>

              </div>

            </div>


            {/* Footer */}
            <div className="
                            px-5
                            sm:px-7
                            py-4
                            border-t
                            border-slate-800
                            flex
                            flex-col
                            sm:flex-row
                            sm:items-center
                            sm:justify-between
                            gap-3
                        ">

              <span className="
                                text-xs
                                text-slate-500
                            ">
                Paste ID: {paste._id}
              </span>

              <Link
                to={`/?pasteId=${paste._id}`}
                className="
                                    inline-flex
                                    items-center
                                    justify-center
                                    px-5
                                    py-2.5
                                    rounded-xl
                                    bg-blue-600
                                    hover:bg-blue-700
                                    text-white
                                    text-sm
                                    font-medium
                                    transition
                                "
              >
                ✏️ Edit Paste
              </Link>

            </div>

          </div>

        </div>

      </main>

    </div>
  )
}

export default ViewPaste