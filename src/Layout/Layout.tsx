import React from 'react';
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className="bg-gradient-to-b from-[#4c70ae] to-[#10316b] min-h-screen w-full flex justify-center items-center p-4">
            <div className="w-full max-w-5xl bg-zinc-200 shadow-2xl border-t-[5px] border-yellow-500 ">
                {children}
            </div>
        </main>
    );
}