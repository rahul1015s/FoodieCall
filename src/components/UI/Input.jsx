export default function Input({ label, id, ...props }) {
  return (
    <p>
      <label htmlFor={id} className="block text-gray-700 font-medium">
        {label}
      </label>
      <input
        id={id}
        name={id}
        required
        {...props}
        className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </p>
  );
}
