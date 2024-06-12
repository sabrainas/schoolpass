import { format } from 'date-fns';
import { useFormData } from '../Context/FormDataContext';

export default function Card() {
    const { formData } = useFormData();

    if (!formData) {
        return <div>Nenhum dado disponível</div>;
    }

    const formatDate = (dateString:string) => {
        const date = new Date(dateString);
        return format(date, 'dd/MM/yyyy');
    };

    return (
        <div className='flex justify-center'>
            <div className='border-2 border-yellow-500 rounded-lg w-[35rem]'>
                <div className='flex w-full justify-center items-center m-auto p-5 bg-[#10316b] rounded-tl-lg rounded-tr-lg'>
                    <img src={`${process.env.PUBLIC_URL}/img/logo-sem-fundo.png`} width={60} alt="" />
                    <p className='font-semibold text-xl text-yellow-500'>SchoolPass</p>
                </div>
                <div className='flex gap-5 justify-around px-10 py-5 bg-zinc-200 rounded-b-lg'>
                    <div className='flex flex-col gap-5'>
                        <img src={`${process.env.PUBLIC_URL}/img/default-image.jpg`} className='w-20 rounded-full' alt="" />
                        <img src={`${process.env.PUBLIC_URL}/img/qr-code.png`} width={75} alt="" />
                    </div>

                    <div className="text-[#10316b]">
                        <p className="font-semibold pb-2 uppercase">{formData.name} {formData.lastName}</p>

                        <p className="font-semibold pb-2 uppercase ">{formData.nameCollege}</p>

                        <p className="font-semibold pb-2 uppercase">{formData.course}</p>

                        <p className="font-semibold pb-2">{formData.cpf}</p>

                        <p className="font-semibold pb-2">{formatDate(formData.birthday)}</p>

                        <p className="font-semibold pb-2">{formData.rg}</p>

                        <p className="font-semibold">VALIDADE: {formatDate(formData.end)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}