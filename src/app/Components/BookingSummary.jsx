export default function BookingSummary({ details }) {
    return (
        <div className=" summ p-4 border rounded">
            <h3 className="text-lg font-semibold">Booking Summary:</h3>
            <p>Date: {details.date.toDateString()}</p>
            <p>Time: {details.time}</p>
            <p>Guests: {details.guests}</p>
            <p>Name: {details.name}</p>
            <p>Contact: {details.contact}</p>
        </div>
    );
}
