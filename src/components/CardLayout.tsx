import { useFormData } from '../Context/FormDataContext';

export default function Card() {
    const { formData } = useFormData();

    if (!formData) {
        return <div>Nenhum dado disponível</div>;
    }

    return (
        <div className='flex justify-center'>
            <div className='border-2 border-yellow-500 rounded'>
                <div className='flex w-full justify-center items-center m-auto p-5 bg-[#10316b] '>
                    <img src="/img/logo-sem-fundo.png" width={60} alt="" />
                </div>
                <div className='flex gap-5 justify-center px-10 py-5 '>
                    <div className=''>
                        <img src="/img/default-image.jpg" className='w-20 rounded-full' alt="" />
                    </div>
                    <div className='text-yellow-500'>
                        <p className='font-semibold'>NOME: {formData.name} {formData.lastName}</p>
                        <p className='font-semibold'>DATA DE NASCIMENTO: {formData.birthday}</p>
                        <p className='font-semibold'>CPF: {formData.cpf}</p>
                        <p className='font-semibold'>RG: {formData.rg}</p>
                        <p className='font-semibold'>INSTITUIÇÃO: {formData.nameCollege}</p>
                        <p className='font-semibold'>CURSO: {formData.course}</p>
                        <p className='font-semibold'>RA (Registro Acadêmico): {formData.ra}</p>
                        <p className='font-semibold'>DATA DE INÍCIO: {formData.start}</p>
                        <p className='font-semibold'>DATA DE FIM: {formData.end}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}