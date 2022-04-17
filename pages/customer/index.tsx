import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DocumentsRequired from "../../components/accodions/document-required";
import Eligibility from "../../components/accodions/eligibility";
import GradientButton from "../../components/buttons/graident-button";
import AppSelect, { AppSelecOption } from "../../components/inputs/select";
import SwitchSelect from "../../components/inputs/switch-select";
import { ETypeOfFinaning } from "../../models/applicant.model";

export async function getServerSideProps(context) {
  console.log('env: ', process.env.BASE_URL);
  return {
    props: {},
  };
}

function Customer() {
  const numberOfApplicants: AppSelecOption[] = [
    {
      value: 1,
      viewValue: "1",
    },
    {
      value: 2,
      viewValue: "2",
    },
  ];

  const [applicantNumber, setApplicantNumber] = useState(1);
  const [typeOfFincaing, setTypeOfFincaing] = useState(
    ETypeOfFinaning.Purchase
  );

  return (
    <div className="px-[10px] py-10">
      <div className="px-[10px]">
        <h4>Getting started</h4>
        <AppSelect
          className="mt-8"
          label="How many person applying for the loan?"
          required={true}
          option={numberOfApplicants}
          value={applicantNumber}
          onChange={(value) => setApplicantNumber(value)}
        ></AppSelect>
        <SwitchSelect
          className="mt-8"
          label="What type of financing do you need?"
          required={true}
          leftButton={{
            text: ETypeOfFinaning.Purchase,
            value: ETypeOfFinaning.Purchase,
          }}
          rightButton={{
            text: ETypeOfFinaning.Refinace,
            value: ETypeOfFinaning.Refinace,
          }}
          value={typeOfFincaing}
          onChange={(value) => setTypeOfFincaing(value)}
        ></SwitchSelect>
        <Eligibility className="mt-8" />
        <DocumentsRequired className="mt-3" />
        <div className="mt-7 font-bold flex items-start">
          <span>Apply with ease using</span>
          <Image height={28} width={130} src="/signpass.png" alt="signpass" />
        </div>
        <p className="mt-4">
          With your Singpass, use Myinfo to retrieve your personal details for
          even faster application.
        </p>
        <GradientButton className="w-full mt-5">
          Retrieve Myinfo with Singpass
        </GradientButton>
        <div className="mt-5">
          <span className="font-bold">No Singpass account? </span>
          <span>Don’t worry, apply via online application form </span>
          <Link href="/single-applicant">
            <a className="text-primary underline">here</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Customer;
