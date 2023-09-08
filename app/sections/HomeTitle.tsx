import React from "react";

const HomeTitle = () => {
    return (
        <section
    className="fixed z-12 h-screen w-screen bg-gradient-to-r flex flex-col justify-center items-center"
    id="home"
>
    <h1 className=" text-center whitespace-nowrap italic text-6xl font-medium font-mono text-transparent bg-clip-text bg-gradient-to-r to-indigo-100 from-indigo-700">
        Gabriela Bairros Porto
    </h1>
    <h3 className="text-center whitespace-nowrap text-2xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-100 to-indigo-700">
        Desenvolvedora Web / Data Analyst
    </h3>
</section>
    );
};

export default HomeTitle;
