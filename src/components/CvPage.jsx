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
                {practical.map((experience) => (
                    <div key={experience.id} className="cv-item">
                        <div className="cv-group">
                            <p>
                                <strong>{experience.position}</strong>
                            </p>
                            <p>
                                {experience['start-date']} - {experience['end-date']}
                            </p>
                        </div>
                        <div className="cv-group">
                            <p>{experience.company}</p> <p>{experience.location}</p>
                        </div>
                        <p>{experience.description}</p>
                    </div>
                ))}
            </div>

            <div className="cv-section">
                <h2>Education</h2>
                {educational.map((education) => (
                    <div key={education.id} className="cv-item">
                        <div className="cv-group">
                            <p>
                                <strong>{education.school}</strong>
                            </p>
                            <p>
                                {education['start-date']} - {education['end-date']}
                            </p>
                        </div>
                        <div className="cv-group">
                            <p>{education['study-title']}</p> <p>{education.location}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
