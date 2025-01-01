export default function AvailabilityDisplay({ date, onSelectSlot }) {
    const mockSlots = ["12:00 PM", "1:00 PM", "2:00 PM"];

    return (

        <div className=" sec space-y-2">
            <h3>Available Slots for {date.toDateString()}:</h3>
            <div className="grid grid-cols-3 gap-4">
                {mockSlots.map((slot, index) => (
                    <button
                    key={index}
                    onClick={() => onSelectSlot(slot)}
                    className="border px-4 py-2 rounded hover:bg-gray-200"
                    >
                        {slot}
                    </button>
                ))}
            </div>
        </div>
    );
}
