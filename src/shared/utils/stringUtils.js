//converting camelCase to startCase
export const startCase = camelCase =>
    camelCase.replace(/([A-Z])/g, match => ` ${match}`).replace(/^./, match => match.toUpperCase());
