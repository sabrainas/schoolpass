import { useFormData } from '../Context/FormDataContext';

export default function Card() {
    const { formData } = useFormData();

    if (!formData) {
        return <div>Nenhum dado disponível</div>;
    }

    return (
        <div className='flex justify-center'>
            <div className='border-2 border-yellow-500 rounded-lg'>
                <div className='flex w-full justify-center items-center m-auto p-5 bg-[#10316b] rounded-tl-lg rounded-tr-lg'>
                    <img src="/img/logo-sem-fundo.png" width={60} alt="" />
                    <p className='font-semibold text-xl text-yellow-500'>SchoolPass</p>
                </div>
                <div className='flex gap-5 justify-center px-10 py-5 bg-zinc-200 rounded-b-lg'>
                    <div className='flex flex-col gap-5'>
                        <img src="/img/default-image.jpg" className='w-20 rounded-full' alt="" />
                        <img src="/img/qr-code.png" width={75} alt="" />
                    </div>

                    <div className="text-[#10316b]">
                        <p className="font-semibold pb-2 uppercase">{formData.name} {formData.lastName}</p>

                        <p className="font-semibold pb-2 uppercase ">{formData.nameCollege}</p>

                        <p className="font-semibold pb-2 uppercase">{formData.course}</p>

                        <p className="font-semibold pb-2">{formData.cpf}</p>

                        <p className="font-semibold pb-2">{formData.birthday}</p>

                        <p className="font-semibold pb-2">{formData.rg}</p>

                        <p className="font-semibold">VALIDADE: {formData.end}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}