import SignatureForm from '../components/SignatureForm';

export default function HomePage() {
  return (
    <div className="w-full max-w-2xl mx-auto space-y-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Signature électronique</h1>
        <p className="text-gray-600 mt-1">Renseignez les informations du signataire pour envoyer le document via Yousign.</p>
      </div>
      <SignatureForm />
    </div>
  );
}
