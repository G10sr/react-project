import Button from "../components/CustomButton";
import "../assets/css/productos.css"
function Productos(){
    const [product, setProduct] = useState({
        name: "Producto 1",
        description: "Descripción del producto 1",
        price: "$10.00",
        img: "https://via.placeholder.com/150"
    });
    return(
        <div id="box">
            <h1>Productos</h1>
        </div>
    )
}

export default Productos;