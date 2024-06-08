import Image from "next/image";
import Link from 'next/link';

export const metadata = {
    title: 'Resume',
};

export default function Home() {
    return (
        <>
            <p>
                Pedding <Link href="/" className="underline">
                    PDF Version
                </Link>.
            </p>
            <div className="max-w-xl">
                <Image
                    src="/V.jpg"
                    width="1133"
                    height="1751"
                    className="rounded-sm"
                    layout="responsive"
                    quality={100}
                />
            </div>
        </>
    );
}
