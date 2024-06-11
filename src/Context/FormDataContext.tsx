import React, { createContext, useState, ReactNode } from 'react';

interface FormData{
    name: string;
    lastName: string;
    cpf: string;
    rg: string;
    nameCollege: string;
    ra: string;
    course: string;
    birthday: string;
    start: string;
    end: string;
}

interface FormDataContextProps{
    formData: FormData | null;
    setFormData: React.Dispatch<React.SetStateAction<FormData | null>>;
}

const FormDataContext = createContext<FormDataContextProps | undefined>(undefined);

export const FormDataProvider = ({ children }: { children: ReactNode }) => {
    const [formData, setFormData] = useState<FormData | null>(null);

    return (
        <FormDataContext.Provider value={{ formData, setFormData }}>
            {children}
        </FormDataContext.Provider>
    );
};

export const useFormData = () => {
    const context = React.useContext(FormDataContext);
    if (!context) {
        throw new Error('useFormData must be used within a FormDataProvider');
    }
    return context;
};