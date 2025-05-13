import { MinusCircle, PlusCircle } from "@phosphor-icons/react/dist/ssr";

function Collapse({
  number = "01",
  title = "Title",
  description = "Description",
  isExpanded = false,
  onToggle = () => {},
}) {
  return (
    <div
      className={`border rounded-3xl drop-shadow-[0_5px_0_rgba(0,0,0,1)] duration-300 transition-all px-10 py-8 ${
        isExpanded ? "bg-primary" : "bg-tertiary"
      }`}
    >
      <div
        onClick={onToggle}
        className="flex items-center justify-between cursor-pointer"
      >
        <div className="flex items-center gap-6">
          <h2 className="text-h1 font-space-grotesk font-medium">{number}</h2>
          <h4 className="text-h3 font-space-grotesk font-medium">{title}</h4>
        </div>
        <div>
          {isExpanded ? (
            <MinusCircle size={40} weight="bold" />
          ) : (
            <PlusCircle size={40} weight="bold" />
          )}
        </div>
      </div>

      <div
        className={`cs_collapse text-black space-y-8 ${
          isExpanded ? "expanded" : ""
        }`}
      >
        <hr />
        <p className="text-p">{description}</p>
      </div>
    </div>
  );
}

export default Collapse;
