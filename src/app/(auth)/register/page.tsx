import Image from 'next/image';
import RegisterForm from './_components/register-form';

export default function Register() {
  return (
    <div className="flex h-screen flex-1 items-center justify-center gap-12 px-10">
      <div className="hidden flex-col sm:flex">
        <Image
          src="https://images.tokopedia.net/img/content/register_new.png"
          width={400}
          height={200}
          alt="image mascot"
        />
        <h1 className="text-2xl font-extrabold">
          Jual Beli Mudah Hanya di Tokopedia
        </h1>
        <span>
          Gabung dan rasakan kemudahan bertransaksi di
          Tokopedia
        </span>
      </div>

      <RegisterForm />
    </div>
  );
}
