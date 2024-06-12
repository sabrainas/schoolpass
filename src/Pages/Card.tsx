import { useState } from 'react';
import { useFormData } from "../Context/FormDataContext";
import CardLayout from "../components/CardLayout";
import Header from "../components/Header";
import Modal from "../components/Modal";
import { format } from 'date-fns';

export default function Card() {
  const { formData } = useFormData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!formData) {
    return <div>Nenhum dado disponível</div>;
  }

  const formatDate = (dateString:string) => {
    const date = new Date(dateString);
    return format(date, 'dd/MM/yyyy');
};

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <Header />
      <div className="py-2">
        <h2 className="text-center text-[#10316b] font-semibold text-2xl border border-b-zinc-300 pb-2">Documento de Identificação Estudantil</h2>
        <div className="flex my-10 items-center justify-center gap-5">
          <div>
            <img src="/img/default-image.jpg" alt="" />
          </div>
          <div className="border-r-2 border-r-yellow-500 pr-3">
            <span className="font-bold text-[#10316b]">NOME </span>
            <p className="font-medium pb-2">{formData.name} {formData.lastName}</p>

            <span className="font-bold text-[#10316b]">DATA DE NASCIMENTO </span>
            <p className="font-medium pb-2">{formatDate(formData.birthday)}</p>

            <span className="font-bold text-[#10316b]">CPF </span>
            <p className="font-medium pb-2">{formData.cpf}</p>

            <span className="font-bold text-[#10316b]">RG </span>
            <p className="font-medium pb-2">{formData.rg}</p>
          </div>
          <div>
            <span className="font-bold text-[#10316b]">INSTITUIÇÃO </span>
            <p className="font-medium pb-2">{formData.nameCollege}</p>

            <span className="font-bold text-[#10316b]">CURSO </span>
            <p className="font-medium pb-2">{formData.course}</p>

            <span className="font-bold text-[#10316b]">DATA DE INÍCIO </span>
            <p className="font-medium pb-2">{formatDate(formData.start)}</p>

            <span className="font-bold text-[#10316b]">DATA DE TÉRMINO </span>
            <p className="font-medium pb-2">{formatDate(formData.end)}</p>
          </div>
        </div>
        <div className="text-center mb-5">
          <button
            className="px-5 py-1 rounded bg-yellow-500 hover:bg-yellow-600 transition-all text-white"
            type="button"
            onClick={openModal}
          >
            Ver Carteirinha
          </button>
        </div>
      </div>
      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <CardLayout />
        </Modal>
      )}
    </div>
  );
}