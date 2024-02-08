import Image from "next/image";

export const Heroes = () => {
    return (
        <div className="flex flex-col items-center justify-center max-w-5xl">
            <div className="flex items-center">
                <div className="relative h-[400px] w-[400px] hidden md:block">
                    <Image
                        src="/pep2.png"
                        fill
                        className="object-contain dark:hidden"
                        alt="Documents"
                    />
                    <Image
                        src="/pep2-dark.png"
                        fill
                        className="object-contain hidden dark:block"
                        alt="Documents"
                    />
                </div>
                <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[300px] md:h-[300px]">
                    <Image
                        src="/pep1.png"
                        fill
                        className="object-contain dark:hidden"
                        alt="Reading"
                    />
                    <Image
                        src="/pep1-dark.png"
                        fill
                        className="object-contain hidden dark:block"
                        alt="Reading"
                    />
                </div>
            </div>
        </div>

    );
}