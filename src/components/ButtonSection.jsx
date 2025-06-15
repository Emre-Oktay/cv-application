export default function ButtonSection({ state, stateSetter, resetter }) {
    return (
        <section className="button-section">
            <button
                onClick={(event) => {
                    event.preventDefault();
                    stateSetter('edit');
                }}
                disabled={state === 'edit'}
            >
                Edit
            </button>
            <button
                onClick={(event) => {
                    event.preventDefault();
                    stateSetter('submit');
                }}
                disabled={state === 'submit'}
            >
                Submit
            </button>

            <button
                onClick={(event) => {
                    event.preventDefault();
                    stateSetter('edit');
                    resetter();
                }}
            >
                Reset
            </button>
        </section>
    );
}
