import React, { useState } from 'react';
import data from '../data/data.json';

const Emoji = () => {
    const [search, setSearch] = useState("");
    const [copied, setCopied] = useState(null);

    const handleCopy = (symbol, title) => {
        navigator.clipboard.writeText(symbol);
        setCopied(title);
        setTimeout(() => setCopied(null), 2000);
    };

    const filteredEmojis = data.filter(emoji => 
        search === "" || 
        emoji.keywords.split(" ").some(kw => kw.includes(search.toLowerCase().trim())) ||
        emoji.title.toLowerCase().includes(search.toLowerCase().trim())
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-700 text-white p-6">
            {/* Header & Search */}
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
                    Emoji Finder
                </h1>
                
                <div className="relative flex justify-center mb-8">
                    <input 
                        className="px-6 py-4 w-full max-w-xl rounded-xl bg-slate-800 border border-slate-600 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 text-white placeholder-slate-400 transition-all duration-300 shadow-lg hover:shadow-cyan-500/10"
                        type="search" 
                        value={search} 
                        placeholder="🔍 Search emoji by name or keyword..." 
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    {search && (
                        <button 
                            onClick={() => setSearch("")}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white"
                        >
                            ✕
                        </button>
                    )}
                </div>

                {/* Emoji Grid */}
                {filteredEmojis.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-4 bg-slate-800/50 rounded-2xl border border-slate-700/50 backdrop-blur-sm max-h-[60vh] overflow-y-auto custom-scrollbar">
                        {filteredEmojis.map((emoji, index) => (
                            <div
                                key={index}
                                onClick={() => handleCopy(emoji.symbol, emoji.title)}
                                className="flex flex-col items-center p-4 rounded-xl bg-slate-800/30 hover:bg-slate-700/50 border border-slate-700 hover:border-cyan-400/30 cursor-pointer transition-all duration-300 hover:scale-105 group"
                            >
                                <span className="text-5xl mb-2 group-hover:text-6xl transition-all duration-300">
                                    {emoji.symbol}
                                </span>
                                <h3 className="text-sm font-medium text-slate-300 group-hover:text-white">
                                    {emoji.title}
                                </h3>
                                {copied === emoji.title && (
                                    <div className="absolute -top-2 -right-2 bg-cyan-500 text-xs px-2 py-1 rounded-full animate-ping">
                                        Copied!
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-xl text-slate-400">No emojis found for "{search}"</p>
                        <button 
                            onClick={() => setSearch("")}
                            className="mt-4 px-6 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-lg transition-colors"
                        >
                            Clear search
                        </button>
                    </div>
                )}

                {/* Footer */}
                <div className="mt-8 text-center text-slate-400">
                    <marquee behavior="scroll" direction="left" scrollamount="5">
                    <p className="text-sm">
                        Developer: 
                        <a 
                            href="https://github.com/Huzaifa0-2" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ml-1 text-cyan-400 hover:text-cyan-300 hover:underline flex items-center justify-center"
                        >
                            Huzaifa 
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </p>
                    </marquee>
                </div>
            </div>

            {/* Add this to your global CSS */}
            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 8px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(30, 41, 59, 0.5);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(94, 234, 212, 0.5);
                    border-radius: 10px;
                }
            `}</style>
        </div>
    );
};

export default Emoji;