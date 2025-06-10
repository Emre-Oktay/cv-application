export default function Practical({ initial, handler }) {
    return (
        <section className="practical">
            <h2 className="section-title">Practical Information</h2>

            <div className="form-item">
                <label htmlFor="company">Company Name:</label>
                <input type="text" id="company" name="company" value={initial['company']} onChange={handler} />
            </div>

            <div className="form-item">
                <label htmlFor="position">Position Title:</label>
                <input type="text" id="position" name="position" value={initial['position']} onChange={handler} />
            </div>

            <div className="form-group">
                <div className="form-item">
                    <label htmlFor="position-start-date">Start Date:</label>
                    <input
                        type="date"
                        id="position-start-date"
                        name="start-date"
                        value={initial['start-date']}
                        onChange={handler}
                    />
                </div>

                <div className="form-item">
                    <label htmlFor="position-end-date">End Date:</label>
                    <input
                        type="date"
                        id="position-end-date"
                        name="end-date"
                        value={initial['end-date']}
                        onChange={handler}
                    />
                </div>
            </div>

            <div className="form-item">
                <label htmlFor="company-location">Location:</label>
                <input
                    type="text"
                    id="company-location"
                    name="location"
                    value={initial['location']}
                    onChange={handler}
                />
            </div>

            <div className="form-item">
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    name="description"
                    rows={2}
                    value={initial['description']}
                    onChange={handler}
                />
            </div>
        </section>
    );
}
