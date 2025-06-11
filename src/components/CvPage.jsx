export default function CvPage({ general, educational, practical }) {
    return (
        <div className="cv-page">
            <div className="cv-header">
                <h1>
                    {general['first-name']} {general['last-name']}
                </h1>
                <p>
                    {general.email} | {general.phone}
                </p>
            </div>

            <div className="cv-section">
                <h2>Work Experience</h2>
                <div className="cv-group">
                    <p>
                        <strong>{practical.position}</strong>
                    </p>
                    <p>
                        {practical['start-date']} - {practical['end-date']}
                    </p>
                </div>
                <div className="cv-group">
                    <p>{practical.company}</p> <p>{practical.location}</p>
                </div>
                <p>{practical.description}</p>
            </div>

            <div className="cv-section">
                <h2>Education</h2>
                <div className="cv-group">
                    <p>
                        <strong>{educational.school}</strong>
                    </p>
                    <p>
                        {educational['start-date']} - {educational['end-date']}
                    </p>
                </div>
                <div className="cv-group">
                    <p>{educational['study-title']}</p> <p>{educational.location}</p>
                </div>
            </div>
        </div>
    );
}
