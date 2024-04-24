import { useEffect, useState } from "react";
import { useProductDataMutate } from "../../hooks/useProductDataMutate";
import { ProductData } from "../../interface/ProductData";

import "./modal.css";

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void
}  

interface ModalProps {
    closeModal(): void
}

const Input = ({label, value, updateValue}: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)} />
        </>
    )
}

export function CreateModal({closeModal}: ModalProps){
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("0");
    const [imgUrl, setImgUrl] = useState("");
    const {mutate, isSuccess} = useProductDataMutate();

    const submit = () => {
        const productData: ProductData = {
            name,
            description,
            price: Number(price),
            imgUrl
        }
        mutate(productData)
    }

    useEffect(() => {
        if(!isSuccess) return
        closeModal();
    }, [isSuccess])

    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre um novo produto</h2>
                <form className="input-container">
                    <Input label="Nome" value={name} updateValue={setName} ></Input>
                    <Input label="Descrição" value={description} updateValue={setDescription} ></Input>
                    <Input label="Preço" value={price} updateValue={setPrice} ></Input>
                    <Input label="Url da imagem" value={imgUrl} updateValue={setImgUrl} ></Input>
                </form>
                <button onClick={submit} className="btn-secondary">
                    Postar
                </button>
            </div>
        </div>
    );
}
