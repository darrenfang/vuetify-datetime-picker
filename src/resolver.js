export function DatetimeResolver() {
  return (name) => {
    if (name === 'VDatetimePicker')
			return { importName: 'VDatetimePicker', path: "." };
	};
}
