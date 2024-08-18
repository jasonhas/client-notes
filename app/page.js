import Image from "next/image";

export default function Home() {

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="bg-slate-300 border border-spacing-1 border-slate-500 rounded-xl shadow-xl">
          <h2 className="text-2xl font-bold text-center p-6">To Do's</h2>
          <ul className="p-8">
            <li>Update Sales Force</li>
            <li>Strategy Document for UPS</li>
            <li>Setup time with AA for new feature review</li>
            <li>Reply to Dean about additional accounts</li>
          </ul>
        </div>
        <div className="bg-yellow-50 border border-spacing-1 border-slate-500 rounded-xl">
          <h2 className="text-2xl font-bold text-center p-6">Upcoming Events</h2>
          <ul className="steps steps-vertical p-8">
            <li className="step step-primary">Register</li>
            <li className="step step-primary">Choose plan</li>
            <li className="step">Purchase</li>
            <li className="step">Receive Product</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
