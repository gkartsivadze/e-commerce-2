import { Fragment } from "react";

export default function AsideNavigation({ categories }) {
    return (
        <aside>
            {categories.map(category => <Fragment key={category.id}>
                <input className="custom_radio" key={category.id}
                    id={category.id}
                    type="radio"
                    name="category"
                    value={category.name}
                />
                <label className="custom_radio" htmlFor={category.id}>{category.name}</label>
            </Fragment>)}
        </aside>
    )
};
