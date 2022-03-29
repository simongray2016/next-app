function InputLabel({
  label,
  required = false,
}: {
  label: string;
  required?: boolean;
}) {
  return (
    <div className="font-bold">
      <span>{label}</span>
      {required && <span className="text-primary">*</span>}
    </div>
  );
}

export default InputLabel;
