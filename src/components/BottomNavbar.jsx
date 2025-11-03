const BottomNavbar = () => {
    return(
            <div className="fixed z-50 w-full h-12 max-w-lg -translate-x-1/2 bg-neutral-100 border border-gray-200 bottom-0 left-1/2">
                <div className="flex h-full max-w-lg grid-cols-5 mx-auto justify-evenly">
                    <button data-tooltip-target="tooltip-home" type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group">
                        <svg className="w-5 h-5 mb-1 text-gray-500 group-hover:text-blue-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                        </svg>
                        <span className="sr-only">Home</span>
                    </button>
                    <div id="tooltip-home" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip">
                        Home
                        <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                    <button data-tooltip-target="tooltip-home" type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group">
<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mb-1 text-gray-500 group-hover:text-blue-600" viewBox="0 0 1024 1024"><path fill="currentColor" d="M160 448a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32H160zm448 0a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32H608zM160 896a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32H160zm448 0a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32H608z"/></svg>
                        <span className="sr-only">Home</span>
                    </button>
                    <div id="tooltip-home" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip">
                        SERVICES
                        <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>

                    <div className="flex items-center justify-center -translate-y-6">
                        <button data-tooltip-target="tooltip-new" type="button" className="py-3 px-4 shadow-lg inline-flex items-center justify-center text-xs font-medium bg-amber-200 shadow-md text-neutral-900 rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none">
                            GET A FREE <br/> QUOTE
                            <span className="sr-only">Get a free Quote</span>
                        </button>
                    </div>

                    <button data-tooltip-target="tooltip-profile" type="button" className="inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-gray-50 group">
<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mb-1 text-gray-500 group-hover:text-blue-600"  viewBox="0 0 14 14" fill="currentColor"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M10.081 2.489a1.04 1.04 0 0 0-.93-.897c-1.155-.11-2.362-.247-3.603-.247s-2.448.138-3.604.247a1.04 1.04 0 0 0-.93.897C.89 3.417.75 4.383.75 5.375s.141 1.958.264 2.886c.063.478.45.852.93.897"/><path d="M3.919 11.511c.063.478.45.852.93.897c1.155.11 2.362.247 3.603.247s2.448-.138 3.604-.247c.48-.045.867-.42.93-.897c.123-.928.264-1.894.264-2.886s-.141-1.958-.264-2.886a1.04 1.04 0 0 0-.93-.897c-1.156-.11-2.362-.247-3.604-.247c-1.24 0-2.448.138-3.603.247a1.04 1.04 0 0 0-.93.897c-.123.928-.264 1.894-.264 2.886s.14 1.958.264 2.886"/><path d="M3.818 10.68a7.6 7.6 0 0 1 1.531-1.43c.566-.401 1.323-.432 1.889-.03c1.234.878 2.278 2.128 2.986 3.357m-.143-3.747c.784 0 1.224-.44 1.224-1.223s-.44-1.224-1.224-1.224c-.783 0-1.224.44-1.224 1.224c0 .783.441 1.224 1.224 1.224"/></g></svg>
                        <span className="sr-only">Profile</span>
                    </button>
                    <div id="tooltip-profile" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700">
                        Profile
                        <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                                        <button data-tooltip-target="tooltip-profile" type="button" className="inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-gray-50 dark:hover:bg-gray-800 group">
                        <svg className="w-5 h-5 mb-1 text-gray-500 group-hover:text-blue-600" viewBox="0 0 24 24">
    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16"/>
</svg>
                        <span className="sr-only">Profile</span>
                    </button>
                    <div id="tooltip-profile" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700">
                        Profile
                        <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                </div>
            </div>
    )
}

export default BottomNavbar;
