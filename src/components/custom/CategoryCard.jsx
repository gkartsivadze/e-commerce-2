export default function CategoryCard({ name, img }) {
    
    return (
        <div className="category_card">
            <img src={ img } alt={name + " Logo"} />
            <p>{ name }</p>
        </div>
    )
};
