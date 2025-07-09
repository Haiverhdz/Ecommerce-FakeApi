import Title from "../Title";
import SearchApi from "../SearchApi";
import './index.css';

const ItemListContainer = () => {

    return(
        <>
        <main className="main-ppal">
        <Title heading='h3' text='¡La mejor tienda que encontraras en la web!' />
        <SearchApi/>
        </main>
        </>
    );
};

export default ItemListContainer;