import { FaMagnifyingGlass } from "react-icons/fa6"

export default function SearchInput() {
    return (
        <label className="custom_search_input">
            <input
                type="text"
                placeholder="What Are You Looking For?"
            />
            <button>
                <FaMagnifyingGlass />
            </button>
        </label>
    )
};
