import ContactForm from '../components/contact-form'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md px-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
        <ContactForm />
      </div>
    </div>
  )
}

