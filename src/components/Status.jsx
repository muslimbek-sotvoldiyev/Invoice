export default function StatusBadge({ text, variant }) {
    let finalResult = {};
    switch (variant) {
        case "paid":
            finalResult = {
                className: "bg-[#FF8F00] bg-opacity-[6%] text-[#FF8F00]",
                circle: "bg-[#FF8F00]"
            };
            break;
        case "pending":
            finalResult = {
                className: "bg-[#33D69F] bg-opacity-[6%] text-[#33D69F]",
                circle: "bg-[#33D69F]"
            };
            break;
        case "draft":
            finalResult = {
                className: "bg-[#373B53] bg-opacity-[6%] text-[#373B53] dark:bg-[#DFE3FA] dark:bg-opacity-[6%] dark:text-[#DFE3FA]",
                circle: "bg-[#373B53] dark:bg-[#DFE3FA]"
            };
            break;
    }

    return (
        <>
            <div className={`py-3 justify-center w-[104px] capitalize text-xs font-bold flex gap-2 items-center rounded-[6px] ${finalResult.className}`}>
                <div className={`w-2 h-2 rounded-full ${finalResult.circle}`} />
                {text}
            </div>
        </>
    );
}
