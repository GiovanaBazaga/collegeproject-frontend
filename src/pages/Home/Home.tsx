import { Card } from '../../components/card/card';
import { ProductData } from '../../interface/ProductData';
import { useProductData } from '../../hooks/useProductData';
import { CreateModal } from '../../components/create-modal/create-modal';
import { useState } from 'react';
import './home.css'

const Home: React.FC = () => {
  const { data } = useProductData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen((prev: any) => !prev)
  }

  return (
    <div className="container">
      <h1>Produtos</h1>
      <div className="card-grid">
        {data?.map((productData: ProductData | undefined) => 
          productData && (
            <Card 
              key={productData.id}
              name={productData.name} 
              description={productData.description}
              price={productData.price}
              imgUrl={productData.imgUrl} 
            />
          )
        )}       
      </div>
      {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
      <button onClick={handleOpenModal}>Cadastrar produto</button>
    </div>
  );
}

export default Home;
