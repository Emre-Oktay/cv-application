export default function Educational({ items, handler, onAdd, onRemove }) {
    return (
        <section className="educational">
            <div className="section-title">
                <h2>Educational Information</h2>
                <button type="button" className="add-button" onClick={onAdd}>
                    Add Education
                </button>
            </div>
            {items.map((item, index) => (
                <div key={item.id}>
                    <div className="item-header">
                        <h3>Education {index + 1}</h3>
                        {items.length > 1 && (
                            <button type="button" className="remove-button" onClick={() => onRemove(item.id)}>
                                Remove
                            </button>
                        )}
                    </div>
                    <div className="form-item">
                        <label htmlFor={`school-${index}`}>School Name:</label>
                        <input
                            type="text"
                            id={`school-${index}`}
                            name="school"
                            value={item['school']}
                            onChange={(e) => handler(item.id, e)}
                        />
                    </div>
                    <div className="form-item">
                        <label htmlFor={`study-title-${index}`}>Title of study:</label>
                        <input
                            type="text"
                            id={`study-title-${index}`}
                            name="study-title"
                            value={item['study-title']}
                            onChange={(e) => handler(item.id, e)}
                        />
                    </div>
                    <div className="form-item">
                        <label htmlFor={`location-${index}`}>Location:</label>
                        <input
                            type="text"
                            id={`location-${index}`}
                            name="location"
                            value={item['location']}
                            onChange={(e) => handler(item.id, e)}
                        />
                    </div>
                    <div className="form-group">
                        <div className="form-item">
                            <label htmlFor={`start-date-${index}`}>Start Date:</label>
                            <input
                                type="date"
                                id={`start-date-${index}`}
                                name="start-date"
                                value={item['start-date']}
                                onChange={(e) => handler(item.id, e)}
                            />
                        </div>

                        <div className="form-item">
                            <label htmlFor={`end-date-${index}`}>End Date:</label>
                            <input
                                type="date"
                                id={`end-date-${index}`}
                                name="end-date"
                                value={item['end-date']}
                                onChange={(e) => handler(item.id, e)}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}
