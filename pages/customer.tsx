import SwitchSelect from "../components/inputs/switch-select";

function Customer() {
  return (
    <div className="px-[10px] py-10">
      <div className="px-[10px]">
        <h4>Getting started</h4>
        <SwitchSelect
          label="What type of financing do you need?*"
          required={true}
        ></SwitchSelect>
      </div>
    </div>
  );
}

export default Customer;
