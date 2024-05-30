import Image from 'next/image';

export default function Login() {
  return (
    <div className="flex w-full items-center justify-center">
      <Image
        width={150}
        height={70}
        src="https://images.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/e5b8438b.svg"
        alt="logo"
      />
    </div>
  );
}
