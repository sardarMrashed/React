import { useState } from "react";

export const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="accordion-card">
            <div className="header" onClick={() => setIsOpen(!isOpen)}>
                <div>{title}</div>
                <p className="icon">{isOpen ? "-" : "+"}</p>
            </div>
            {isOpen && (
                <div className="content">
                    {content}
                </div>
            )}
        </section>
    );
};
