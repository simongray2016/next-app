function InputLabel({ label, required }: { label: string; required: boolean }) {
  return (
    <div className="font-bold">
      <span>{label}</span>
      {required && <span className="text-primay">*</span>}
    </div>
  );
}

export default InputLabel;
