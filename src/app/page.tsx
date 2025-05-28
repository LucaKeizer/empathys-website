export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-primary-600 mb-4">
          Empathys Website
        </h1>
        <p className="text-gray-700 mb-6">
          Welcome to the new Empathys website. This is a placeholder homepage.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
          <p className="text-gray-600">
            We'll be building the complete homepage with all sections soon.
          </p>
        </div>
      </div>
    </div>
  );
}