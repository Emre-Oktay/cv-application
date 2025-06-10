export default function General({ initial, handler }) {
    return (
        <section className="general">
            <h2 className="section-title">General Information</h2>

            <div className="form-group">
                <div className="form-item">
                    <label htmlFor="first-name">First Name:</label>
                    <input
                        type="text"
                        id="first-name"
                        name="first-name"
                        autoComplete="given-name"
                        value={initial['first-name']}
                        onChange={handler}
                    />
                </div>

                <div className="form-item">
                    <label htmlFor="last-name">Last Name:</label>
                    <input
                        type="text"
                        id="last-name"
                        name="last-name"
                        autoComplete="family-name"
                        value={initial['last-name']}
                        onChange={handler}
                    />
                </div>
            </div>

            <div className="form-item">
                <label htmlFor="email">Email Address:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    value={initial['email']}
                    onChange={handler}
                />
            </div>

            <div className="form-item">
                <label htmlFor="phone">Phone Number:</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    autoComplete="tel"
                    value={initial['phone']}
                    onChange={handler}
                />
            </div>
        </section>
    );
}
