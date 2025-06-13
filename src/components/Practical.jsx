export default function Practical({ items, handler, onAdd, onRemove }) {
    return (
        <section className="practical">
            <div className="section-title">
                <h2>Work experience</h2>
                <button type="button" className="add-button" onClick={onAdd}>
                    Add Experience
                </button>
            </div>
            {items.map((item, index) => (
                <div key={item.id}>
                    <div className="item-header">
                        <h3>Experience {index + 1}</h3>
                        {items.length > 1 && (
                            <button type="button" className="remove-button" onClick={() => onRemove(item.id)}>
                                Remove
                            </button>
                        )}
                    </div>

                    <div className="form-item">
                        <label htmlFor={`company-${index}`}>Company Name:</label>
                        <input
                            type="text"
                            id={`company-${index}`}
                            name="company"
                            value={item['company']}
                            onChange={(e) => handler(item.id, e)}
                        />
                    </div>

                    <div className="form-item">
                        <label htmlFor={`position-${index}`}>Position Title:</label>
                        <input
                            type="text"
                            id={`position-${index}`}
                            name="position"
                            value={item['position']}
                            onChange={(e) => handler(item.id, e)}
                        />
                    </div>

                    <div className="form-group">
                        <div className="form-item">
                            <label htmlFor={`position-start-date-${index}`}>Start Date:</label>
                            <input
                                type="date"
                                id={`position-start-date-${index}`}
                                name="start-date"
                                value={item['start-date']}
                                onChange={(e) => handler(item.id, e)}
                            />
                        </div>

                        <div className="form-item">
                            <label htmlFor={`position-end-date-${index}`}>End Date:</label>
                            <input
                                type="date"
                                id={`position-end-date-${index}`}
                                name="end-date"
                                value={item['end-date']}
                                onChange={(e) => handler(item.id, e)}
                            />
                        </div>
                    </div>

                    <div className="form-item">
                        <label htmlFor={`company-location-${index}`}>Location:</label>
                        <input
                            type="text"
                            id={`company-location-${index}`}
                            name="location"
                            value={item['location']}
                            onChange={(e) => handler(item.id, e)}
                        />
                    </div>

                    <div className="form-item">
                        <label htmlFor={`description-${index}`}>Description:</label>
                        <textarea
                            id={`description-${index}`}
                            name="description"
                            rows={2}
                            value={item['description']}
                            onChange={(e) => handler(item.id, e)}
                        />
                    </div>
                </div>
            ))}
        </section>
    );
}
