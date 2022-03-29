import AppAccordion from "./accodion";

function DocumentsRequired({ className = "" }) {
  return (
    <AppAccordion
      className={className}
      label="Documents Required"
      expanded={true}
    >
      <div className="px-5 pt-5 pl-10">
        <ul className="list-disc">
          <li className="leading-10">
            Photocopy of NRIC/Passport for all Applicants and Owners Salaried
            Employees Latest Tax Assessment & 12 months CPF Contribution History
            Latest 3 months payslip Self-Employed Applicants Latest Tax
            Assessment
          </li>
          <li className="leading-10">
            Option to Purchase or Sale & Purchase Agreement
          </li>
          <li className="leading-10">HDB information & statement</li>
        </ul>
        <div className="font-bold mt-6">Salaried Employees</div>
        <ul className="list-disc">
          <li className="leading-10">
            Latest Tax Assessment & 12 months CPF Contribution History Latest
            Latest Tax Assessment
          </li>
          <li className="leading-10">3 months payslip</li>
        </ul>
        <div className="font-bold mt-6">Self-Employed Applicants</div>
        <ul className="list-disc">
          <li className="leading-10">Latest Tax Assessment</li>
        </ul>
      </div>
    </AppAccordion>
  );
}

export default DocumentsRequired;
