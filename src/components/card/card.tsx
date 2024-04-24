import "./card.css"

interface CardProps{
    name: string,
    description: string,
    price: number,
    imgUrl: String
}
    
// Função para formatar o preço
const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
    }).format(price);
};


export function Card({name, description, price, imgUrl} : CardProps){
    return(
        <div className="card">           
            <h2>{name}</h2>
            <p>{description}</p>
            <p><b>Preço: {formatPrice(price)}</b></p>
            <img src={String(imgUrl)}/> 
        </div>
    )
}