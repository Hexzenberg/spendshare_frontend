import { useState } from "react";

const PredictForm = () => {
    const [formData, setFormData] = useState({
        Education: false,
        Loan: false,
        Shopping: false,
        Weekday: false,
        Weekend: false,
        month: 1,
    });

    const [prediction, setPrediction] = useState(null);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, type, checked, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : parseInt(value, 10),
        }));
    };

    const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setPrediction(null);

    try {
        const response = await fetch("https://spendshare-api.onrender.com/predict", { 
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        if (data.error) {
            setError(data.error);
        } else {
            setPrediction(data.prediction);
        }
    } catch (err) {
        setError("Failed to connect to the API.");
    }
};

    return (
        <section>
            <h2>Predict Your Spending</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Education:
                    <input type="checkbox" name="Education" checked={formData.Education} onChange={handleChange} />
                </label>
                <label>
                    Loan:
                    <input type="checkbox" name="Loan" checked={formData.Loan} onChange={handleChange} />
                </label>
                <label>
                    Shopping:
                    <input type="checkbox" name="Shopping" checked={formData.Shopping} onChange={handleChange} />
                </label>
                <label>
                    Weekday:
                    <input type="checkbox" name="Weekday" checked={formData.Weekday} onChange={handleChange} />
                </label>
                <label>
                    Weekend:
                    <input type="checkbox" name="Weekend" checked={formData.Weekend} onChange={handleChange} />
                </label>
                <label>
                    Month (1-12):
                    <input
                        type="number"
                        name="month"
                        value={formData.month}
                        onChange={handleChange}
                        min="1"
                        max="12"
                    />
                </label>

                <button type="submit">Predict</button>
            </form>

            {prediction !== null && <h3>Predicted Expense: ₹{prediction.toFixed(2)}</h3>}
            {error && <p style={{ color: "red" }}>{error}</p>}
        </section>
    );
};

export default PredictForm;
