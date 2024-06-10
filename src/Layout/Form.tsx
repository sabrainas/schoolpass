export default function Form() {
    return (
        <>
            <main className="bg-gradient-to-b from-[#4c70ae] to-[#10316b]  min-h-screen w-full flex justify-center items-center p-4">
                <div className="w-full max-w-5xl bg-zinc-200 shadow-2xl border-l-4 border-l-yellow-500 border-r-4 border-r-yellow-500">
                    <header className="bg-[#10316b] flex flex-col justify-center items-center shadow-md p-4">
                        <img src="/img/logo.png" width={220} alt="logo schoolpass" />
                    </header>
                    <section className="py-3 px-6 flex flex-col w-full border">
                        <h2 className="text-xl font-semibold text-center mt-4 pb-4 border-b border-zinc-300">Monte a sua Carteirinha de Estudante preenchendo o formulário abaixo.</h2>
                        <form action="" className="flex flex-col">
                            {/* Dados Pessoais */}
                            <div className="p-3 border-b border-zinc-300">
                                <h4 className="text-lg font-medium pb-4 text-[#10316b]">Dados Pessoais</h4>
                                <div className="flex flex-wrap gap-3 mb-4">
                                    <div className="w-full sm:w-[25%]">
                                        <label htmlFor="">Nome: </label>
                                        <input className="bg-gray-50 appearance-none border-2 border-gray-200 rounded-md w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500" type="text" placeholder="Digite o seu nome" />
                                    </div>
                                    <div className="w-full sm:w-[40%]">
                                        <label htmlFor="">Sobrenome: </label>
                                        <input className="bg-gray-50 appearance-none border-2 border-gray-200 rounded-md w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500" type="text" placeholder="Digite o seu sobrenome" />
                                    </div>
                                    <div className="w-full sm:w-[30%]">
                                        <label htmlFor="">Data de Nascimento: </label>
                                        <input className="bg-gray-50 appearance-none border-2 rounded-md w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none" placeholder="Data de Nascimento" type="date" />
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-4 mb-4">
                                    <div className="w-full sm:w-[20%]">
                                        <label htmlFor="">CPF: </label>
                                        <input className="bg-gray-50 appearance-none border-2 border-gray-200 rounded-md w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500" placeholder="___-___-___-__" type="text" />
                                    </div>
                                    <div className="w-full sm:w-[20%]">
                                        <label htmlFor="">RG: </label>
                                        <input className="bg-gray-50 appearance-none border-2 border-gray-200 rounded-md w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500" placeholder="__-___-___-_" type="text" />
                                    </div>
                                </div>
                            </div>

                            {/* Dados Acadêmicos */}
                            <div className="p-3">
                                <h4 className="text-lg font-medium pb-4 text-[#10316b]">Dados Acadêmicos</h4>
                                <div className="flex flex-wrap gap-3 mb-4">
                                    <div className="w-full sm:w-[55%]">
                                        <label htmlFor="">Nome da Instituição: </label>
                                        <input className="bg-gray-50 appearance-none border-2 border-gray-200 rounded-md w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500" type="text" />
                                    </div>
                                    <div className="w-full sm:w-[40%]">
                                        <label htmlFor="">RA(Registro Acadêmico): </label>
                                        <input className="bg-gray-50 appearance-none border-2 border-gray-200 rounded-md w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500" type="text" />
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-3 mb-4">
                                    <div className="w-full sm:w-[35%]">
                                        <label htmlFor="">Curso: </label>
                                        <input className="bg-gray-50 appearance-none border-2 border-gray-200 rounded-md w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500" type="text" />
                                    </div>
                                    <div className="w-full sm:w-[30%]">
                                        <label htmlFor="">Data de Início: </label>
                                        <input className="bg-gray-50 appearance-none border-2 rounded-md w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none" placeholder="Data de Nascimento" type="date" />
                                    </div>
                                    <div className="w-full sm:w-[30%]">
                                        <label htmlFor="">Data de Conclusão: </label>
                                        <input className="bg-gray-50 appearance-none border-2 rounded-md w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none" placeholder="Data de Nascimento" type="date" />
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <button className="px-5 py-1 rounded bg-yellow-500 hover:bg-yellow-600 transition-all text-white">Enviar</button>
                            </div>
                        </form>
                    </section>
                </div>
            </main>
        </>
    )
}
