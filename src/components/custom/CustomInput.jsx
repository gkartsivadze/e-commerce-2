import { FaMagnifyingGlass, FaTelegram } from "react-icons/fa6"

export default function CustomInput({ type = "text" }) {

    return (
        <label className={`custom_input ${type}`}>
            <input
                type={ type }
                placeholder={ type == "text" ? "What Are You Looking For?" : "Enter your email"}
            />
            <button>
                {
                    type == "text" ? <FaMagnifyingGlass /> : <FaTelegram color="white" />
                }
            </button>
        </label>
    )
};
