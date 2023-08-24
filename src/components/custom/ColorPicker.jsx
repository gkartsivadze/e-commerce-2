export default function ColorPicker({ colors }) {
    return (
        <div className="color_picker">
            {colors.map(color => <div key={color.id} style={{background: color.name}} />)}
        </div>
    )
};
