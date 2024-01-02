
const SectionTitle = ({ hedding, subHedding }) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-2">
            <p className="text-yellow-600 mb-2">---{subHedding}---</p>
            <h2 className="text-3xl border-y-2 py-2 italic font-bold">{hedding}</h2>
        </div>
    );
};

export default SectionTitle;