import Image from "next/image";

export const metadata = {
    title: 'Resume',
};

export default function Home() {
    return (
        <>
            <h2 className="text-4xl font-bold mb-3">Resume</h2>
            <p>
                Pedding <a href="/" className="underline">
                    PDF Version
                </a>.
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
