export default function NotFoundPage(){
    return(
        <div className="h-screen flex flex-col gap-4 md:gap-8 items-center justify-center max-w-lg px-4 sm:px-6 md:px-8 mx-auto">
            <p className="text-5xl md:text-6xl font-secondary [mask-image:linear-gradient(to_right,rgb(0_0_0_/_0.5)_0%,black_90%,black_100%)]">404</p>
            <p className="text-lg md:text-xl font-secondary text-center">This page seems to have slipped through our collection. The link you followed may be broken, or the page may have been moved.</p>
            <a href="/" className="w-full text-sm md:text-lg p-2 bg-black text-center text-white uppercase font-secondary">Get Back To Homepage</a>
        </div>
    )
}