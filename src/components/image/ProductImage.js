import './ProductImage.css';

export default function ProductImage(prose) {
  return (
    <div id="productImage">
      <img src={prose.Image} alt="burger" />
    </div>
  )
}