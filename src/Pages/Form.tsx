import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import InputMask from 'react-input-mask';
import { parseISO, isValid } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { useFormData } from '../Context/FormDataContext';
import Header from '../components/Header';

const schema = z.object({
    name: z.string().min(1, "Campo Obrigatório"),
    lastName: z.string().min(1, "Campo Obrigatório"),
    cpf: z.string().min(1, "Campo Obrigatório").max(14, "CPF inválido"),
    rg: z.string().min(1, "Campo Obrigatório").max(13, "RG Inválido"),
    nameCollege: z.string().min(1, "Campo Obrigatório"),
    ra: z.string().min(1, "Campo Obrigatório"),
    course: z.string().min(1, "Campo Obrigatório"),
    birthday: z.string().nonempty("Data de Nascimento é Obrigatória.").refine((data) => {
        const parsedDate = parseISO(data);
        return (
            isValid(parsedDate) && parsedDate.getFullYear() >= 1900 && parsedDate.getFullYear() <= 9999);
    }, {
        message: "Data de Nascimento inválida.",
    }),
    start: z.string().nonempty("Data de Início é Obrigatória.").refine((data) => {
        const parsedDate = parseISO(data);
        return (
            isValid(parsedDate) && parsedDate.getFullYear() >= 1900 && parsedDate.getFullYear() <= 9999);
    }, {
        message: "Data de Início inválida.",
    }),
    end: z.string().nonempty("Data de Fim é Obrigatória.").refine((data) => {
        const parsedDate = parseISO(data);
        return (
            isValid(parsedDate) && parsedDate.getFullYear() >= 1900 && parsedDate.getFullYear() <= 9999);
    }, {
        message: "Data de Fim inválida.",
    }),
});

type FormData = z.infer<typeof schema>;

export default function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        mode: "onBlur",
        resolver: zodResolver(schema),
    });

    const { setFormData } = useFormData();
    const navigate = useNavigate();

    const onSubmit = (data: FormData) => {
        console.log(data);
        setFormData(data);
        navigate('/card');
    };

    return (
        <>
            <Header/>
            <section className="py-3 px-6 flex flex-col w-full border">
                <h2 className="text-xl font-semibold text-center mt-4 pb-4 border-b border-zinc-300">Monte a sua Carteirinha de Estudante preenchendo o formulário abaixo.</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                    {/* Dados Pessoais */}
                    <div className="p-3 border-b border-zinc-300">
                        <h4 className="text-lg font-medium pb-4 text-[#10316b]">Dados Pessoais</h4>
                        <div className="flex flex-wrap gap-3 mb-4">
                            <div className="w-full sm:w-[25%]">
                                <label>Nome: </label>
                                <input
                                    type="text"
                                    placeholder="Digite o seu nome"
                                    {...register("name")}
                                    className={`bg-gray-50 appearance-none border-2 rounded-md w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none ${errors.name ? 'border-red-500' : 'border-gray-200'} focus:bg-white focus:border-yellow-500`}
                                />
                                {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                            </div>
                            <div className="w-full sm:w-[40%]">
                                <label>Sobrenome: </label>
                                <input
                                    type="text"
                                    placeholder="Digite o seu sobrenome"
                                    {...register("lastName")}
                                    className={`bg-gray-50 appearance-none border-2 rounded-md w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none ${errors.lastName ? 'border-red-500' : 'border-gray-200'} focus:bg-white focus:border-yellow-500`}
                                />
                                {errors.lastName && <span className="text-red-500 text-sm">{errors.lastName.message}</span>}
                            </div>
                            <div className="w-full sm:w-[30%]">
                                <label>Data de Nascimento: </label>
                                <input
                                    type="date"
                                    {...register("birthday")}
                                    className={`bg-gray-50 appearance-none border-2 rounded-md w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none ${errors.birthday ? 'border-red-500' : 'border-gray-200'} focus:bg-white focus:border-yellow-500`}
                                />
                                {errors.birthday && <span className="text-red-500 text-sm">{errors.birthday.message}</span>}
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 mb-4">
                            <div className="w-full sm:w-[20%]">
                                <label>CPF: </label>
                                <InputMask
                                    mask="999.999.999-99"
                                    {...register("cpf")}
                                    className={`bg-gray-50 appearance-none border-2 rounded-md w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none ${errors.cpf ? 'border-red-500' : 'border-gray-200'} focus:bg-white focus:border-yellow-500`}
                                    placeholder="___.___.___-__"
                                />
                                {errors.cpf && <span className="text-red-500 text-sm">{errors.cpf.message}</span>}
                            </div>
                            <div className="w-full sm:w-[20%]">
                                <label>RG: </label>
                                <input
                                    type="string"
                                    {...register("rg")}
                                    maxLength={10}
                                    className={`bg-gray-50 appearance-none border-2 rounded-md w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none ${errors.rg ? 'border-red-500' : 'border-gray-200'} focus:bg-white focus:border-yellow-500`}
                                    placeholder="__.___.___-_"
                                />
                                {errors.rg && <span className="text-red-500 text-sm">{errors.rg.message}</span>}
                            </div>
                        </div>
                    </div>

                    {/* Dados Acadêmicos */}
                    <div className="p-3">
                        <h4 className="text-lg font-medium pb-4 text-[#10316b]">Dados Acadêmicos</h4>
                        <div className="flex flex-wrap gap-3 mb-4">
                            <div className="w-full sm:w-[55%]">
                                <label>Nome da Instituição: </label>
                                <input
                                    type="text"
                                    placeholder="Digite o nome da instituição"
                                    {...register("nameCollege")}
                                    className={`bg-gray-50 appearance-none border-2 rounded-md w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none ${errors.nameCollege ? 'border-red-500' : 'border-gray-200'} focus:bg-white focus:border-yellow-500`}
                                />
                                {errors.nameCollege && <span className="text-red-500 text-sm">{errors.nameCollege.message}</span>}
                            </div>
                            <div className="w-full sm:w-[40%]">
                                <label>RA (Registro Acadêmico): </label>
                                <input
                                    type="text"
                                    placeholder="Digite o RA"
                                    {...register("ra")}
                                    className={`bg-gray-50 appearance-none border-2 rounded-md w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none ${errors.ra ? 'border-red-500' : 'border-gray-200'} focus:bg-white focus:border-yellow-500`}
                                />
                                {errors.ra && <span className="text-red-500 text-sm">{errors.ra.message}</span>}
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-3 mb-4">
                            <div className="w-full sm:w-[35%]">
                                <label>Curso: </label>
                                <input
                                    type="text"
                                    placeholder="Digite o curso"
                                    {...register("course")}
                                    className={`bg-gray-50 appearance-none border-2 rounded-md w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none ${errors.course ? 'border-red-500' : 'border-gray-200'} focus:bg-white focus:border-yellow-500`}
                                />
                                {errors.course && <span className="text-red-500 text-sm">{errors.course.message}</span>}
                            </div>
                            <div className="w-full sm:w-[30%]">
                                <label>Data de Início: </label>
                                <input
                                    type="date"
                                    {...register("start")}
                                    className={`bg-gray-50 appearance-none border-2 rounded-md w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none ${errors.start ? 'border-red-500' : 'border-gray-200'} focus:bg-white focus:border-yellow-500`}
                                />
                                {errors.start && <span className="text-red-500 text-sm">{errors.start.message}</span>}
                            </div>
                            <div className="w-full sm:w-[30%]">
                                <label>Data de Conclusão: </label>
                                <input
                                    type="date"
                                    {...register("end")}
                                    className={`bg-gray-50 appearance-none border-2 rounded-md w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none ${errors.end ? 'border-red-500' : 'border-gray-200'} focus:bg-white focus:border-yellow-500`}
                                />
                                {errors.end && <span className="text-red-500 text-sm">{errors.end.message}</span>}
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <button className="px-5 py-1 rounded bg-yellow-500 hover:bg-yellow-600 transition-all text-white" type="submit">Enviar</button>
                    </div>
                </form>
            </section>
        </>
    );
}