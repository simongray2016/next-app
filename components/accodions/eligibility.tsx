import AppAccordion from "./accodion";

function Eligibility({ className = "" }) {
  return (
    <AppAccordion className={className} label="Eligibility" expanded={true}>
      <ul className="list-disc px-5 pl-10 mt-5">
        <li className="leading-10">21 to 70 years old</li>
        <li className="leading-10">
          Applicants must earn more than S$36,000 per annum
        </li>
        <li className="leading-10">Min. loan amount of S$200,000</li>
      </ul>
    </AppAccordion>
  );
}

export default Eligibility;
