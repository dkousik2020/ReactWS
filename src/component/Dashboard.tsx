import { useState } from "react";
import "./Dashboard.css";

export default function Dashboard() {

    const [open, setOpen] = useState(false);
    const [closing, setClosing] = useState(false);

    const closePanel = () => {
        setClosing(true);

        setTimeout(() => {
            setOpen(false);
            setClosing(false);
        }, 300); // match CSS animation time
    };

    return (
        <div>

            <button onClick={() => setOpen(true)}>
                Open Overlay
            </button>

            {open && (
                <div className="backdrop" onClick={closePanel}>

                    <div
                        className={`panel ${closing ? "slide-out" : "slide-in"
                            }`}
                        onClick={(e) => e.stopPropagation()}
                    >

                        <button onClick={closePanel}>
                            Close
                        </button>

                        <h2>Overlay Content</h2>
                        <p>Right side drawer content...</p>

                    </div>

                </div>
            )}

        </div>
    );
}