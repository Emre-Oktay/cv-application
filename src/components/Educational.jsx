export default function Educational({ initial, handler }) {
    return (
        <section className="educational">
            <h2 className="section-title">Educational Information</h2>

            <div className="form-item">
                <label htmlFor="school">School Name:</label>
                <input type="text" id="school" name="school" value={initial['school']} onChange={handler} />
            </div>

            <div className="form-item">
                <label htmlFor="study-title">Title of study:</label>
                <input
                    type="text"
                    id="study-title"
                    name="study-title"
                    value={initial['study-title']}
                    onChange={handler}
                />
            </div>

            <div className="form-item">
                <label htmlFor="location">Location:</label>
                <input type="text" id="location" name="location" value={initial['location']} onChange={handler} />
            </div>

            <div className="form-group">
                <div className="form-item">
                    <label htmlFor="start-date">Start Date:</label>
                    <input
                        type="date"
                        id="start-date"
                        name="start-date"
                        value={initial['start-date']}
                        onChange={handler}
                    />
                </div>

                <div className="form-item">
                    <label htmlFor="end-date">End Date:</label>
                    <input type="date" id="end-date" name="end-date" value={initial['end-date']} onChange={handler} />
                </div>
            </div>
        </section>
    );
}
